// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "Counters.sol";
import "ERC721URIStorage.sol";
import "ERC721Enumerable.sol";
import "ERC721.sol";
import "IERC20.sol";
import "VRFCoordinatorV2Interface.sol";
import "VRFConsumerBaseV2.sol";
import "AccessControl.sol";
import "SongNFT.sol";

/**
 * @title Track Pack NFT Contract
 * @dev NFT contract for Track Pack purchasing and burning
 */
contract TrackPackNFT is ERC721URIStorage, ERC721Enumerable, VRFConsumerBaseV2, AccessControl {
    using Counters for Counters.Counter;

    // Counter to give each NFT a unique ID.
    Counters.Counter public _tokenIds;

    // Song NFT contract.
    SongNFT public songNFT;

    // Contract for USDC - for NFT payments
    IERC20 public USDC;

    // Number of songs per track pack.
    uint256 public songsPerTrackPack = 1;

    // The token URI for all of the NFTs in this contract
    string public trackPackTokenURI;

    // Number of NFTs that can be minted for this drop
    uint256 public maxNFTs;

    // NFT price in USDC
    uint256 public NFTPriceInUSDC;

    struct RequestStatus {
        address owner; // Owner of the burnt tokens
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        uint256[] tokenIds; // Token IDs tied to the request
        uint256[] randomWords;
    }
    mapping(uint256 => RequestStatus)
        public s_requests; /* requestId --> requestStatus */

    VRFCoordinatorV2Interface coordinator;

    // Your subscription ID.
    uint64 s_subscriptionId;

    // past requests Id.
    uint256[] public requestIds;
    uint256 public lastRequestId;  

    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/docs/vrf/v2/subscription/supported-networks/#configurations
    // bytes32 keyHash = 0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15;
    bytes32 keyHash = 0xd4bb89654db74673a187bd804519e65e3f71a52bc55f11da7601a13dcf505314;

    // Depends on the number of requested values that you want sent to the
    // fulfillRandomWords() function. Since fulfillRandomWords() also interacts with
    // the song contract, this value has to be fairly high.
    uint32 callbackGasLimit = 100000000;

    uint16 requestConfirmations = 3;     

    event TrackPackOpened(address indexed owner, uint256 indexed tokenId, uint256 indexed requestId, uint256[] mintedTokenIds);
    event tokenURIUpdated(uint256 indexed tokenId, string newTokenURI);
    event trackPackNFTMinted(address indexed owner, uint256 indexed tokenId);
    event RequestFulfilled(address indexed owner, uint256 requestId, uint256[] randomWords, uint256[] tokenIds);

    constructor(
        address _songNFTAddress,
        uint256 _songsPerTrackPack, 
        address _usdcAddress,
        address _vrfCoordinatorAddress,
        uint64 _subscriptionId,
        string memory _trackPackTokenURI,
        uint256 _maxNFTs,
        uint256 _NFTPriceInUSDC
    ) 
    ERC721("TrackPackNFT", "TPACK")
    VRFConsumerBaseV2(_vrfCoordinatorAddress) 
    {
        songNFT = SongNFT(_songNFTAddress);
        songsPerTrackPack = _songsPerTrackPack;
        USDC = IERC20(_usdcAddress);
        coordinator = VRFCoordinatorV2Interface(_vrfCoordinatorAddress);
        s_subscriptionId = _subscriptionId;
        trackPackTokenURI = _trackPackTokenURI;
        maxNFTs = _maxNFTs;
        NFTPriceInUSDC = _NFTPriceInUSDC;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
    * @dev Only owner function to mint a new NFT.
    * @param newTokenURI the token URI on IPFS for the NFT metadata
    * @return the ID of the newly minted NFT
     */
    function createToken(string memory newTokenURI) external onlyRole(DEFAULT_ADMIN_ROLE) returns (uint) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, newTokenURI);
        approve(address(this), newItemId);

        return newItemId;
    }

    /**
    * @dev Function to open a Track Pack NFT - also mints the song NFTs and requests random numbers from Chainlink VRF to start the song assignment.
    * @param tokenId the ID of the token to burn for the track pack opening
    * @return requestId the request ID for the random number generation
    */
    function openTrackPackNFT(uint256 tokenId) external returns(uint256) {
        require(ownerOf(tokenId) == msg.sender, "You can only burn your own NFTs.");
        _burn(tokenId);

        uint256[] memory mintedNFTIds = new uint256[](songsPerTrackPack);
        for (uint i = 0; i < songsPerTrackPack; i++) {
            mintedNFTIds[i] = songNFT.createTokenAfterTrackPackBurn(msg.sender);
        }

        // Will revert if subscription is not set and funded.
        uint256 requestId;
        requestId = coordinator.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            uint32(songsPerTrackPack)
        );

        s_requests[requestId] = RequestStatus({
            owner: msg.sender,
            randomWords: new uint256[](0),
            tokenIds: mintedNFTIds,
            exists: true,
            fulfilled: false
        });
        requestIds.push(requestId);
        lastRequestId = requestId;

        emit TrackPackOpened(msg.sender, tokenId, requestId, mintedNFTIds);

        return requestId;
    }

    /**
    * @dev Function for fulfilling the random number(s) request. Here is where the minted song NFTs are assigned a song and given a real token URI.
    * @param _requestId the ID of the random number request - created in the openTrackPackNFT function
    * @param _randomWords array of random numbers generated (called randomWords in Chainlink documentation)
    */
    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        require(s_requests[_requestId].exists, "request not found");
        require(!s_requests[_requestId].fulfilled, "request already fulfilled");

        s_requests[_requestId].fulfilled = true;
        s_requests[_requestId].randomWords = _randomWords;

        for (uint i = 0; i < s_requests[_requestId].tokenIds.length; i++) {
            uint256 tokenId = s_requests[_requestId].tokenIds[i];
            uint256 randomNumber = s_requests[_requestId].randomWords[i];
            uint256 numSongs = songNFT.numSongIds();
            if (randomNumber >= numSongs) {
                randomNumber = randomNumber % numSongs;
            }
            songNFT.assignTokenIdToSongId(tokenId, randomNumber);
            songNFT.setTokenURI(tokenId, songNFT.songIdToTokenURI(randomNumber));
        }

        emit RequestFulfilled(s_requests[_requestId].owner, _requestId, _randomWords, s_requests[_requestId].tokenIds);
    }

    /**
    * @dev Function for getting the status of a random number request.
    * @param _requestId the ID of the random number request - created in the openTrackPackNFT function
    * @return fulfilled whether or not the random numbers have been given for the supplied request ID
    * @return randomWords the list of random numbers for the request - empty list if not fulfilled
    * @return tokenIds the list of song token IDs that were minted in the openTrackPackNFT function when the random numbers were requested
    */
    function getRequestStatus(
        uint256 _requestId
    ) external view returns (bool fulfilled, uint256[] memory randomWords, uint256[] memory tokenIds) {
        require(s_requests[_requestId].exists, "request not found");
        RequestStatus memory request = s_requests[_requestId];
        return (request.fulfilled, request.randomWords, request.tokenIds);
    }
    
    /**
    * @dev Private helper function to perform the minting of the Track Pack NFTs.
    * @param nftCount the number of NFTs to mint
    * @param receiver the receiver of the NFTs upon minting
    * @return newItemIds the ID(s) of the newly minted Track Pack NFT(s)
    */
    function _mintTrackPackNFT(uint256 nftCount, address receiver) private returns (uint[] memory) {
        uint256[] memory mintedNFTIds = new uint256[](nftCount);
        uint256 i = 0;

        for (i = 0; i < nftCount; i += 1) {
            _tokenIds.increment();
            uint256 newItemId = _tokenIds.current();

            _mint(receiver, newItemId);
            _setTokenURI(newItemId, trackPackTokenURI);
            _approve(address(this), newItemId);

            mintedNFTIds[i] = newItemId;

            emit trackPackNFTMinted(receiver, newItemId);
        }

        return mintedNFTIds;
    }

    /**
    * @dev Allows someone to mint a Track Pack NFT by paying USDC
    * @param nftCount the number of NFTs to mint
    * @return newItemIds the ID(s) of the newly minted Track Pack NFT(s)
     */
    function mintTrackPackNFT(uint256 nftCount) external returns (uint[] memory) {
        require(nftCount > 0, "You have to mint at least one Track Pack NFT.");
        require(nftCount + _tokenIds.current() <= maxNFTs, "There aren't enough Track Pack NFTs for this drop for you to mint you amount you chose. Another drop will be available soon!");
        require(USDC.balanceOf(msg.sender) >= NFTPriceInUSDC * nftCount, "You don't have enough USDC to pay for the Track Pack NFT(s).");
        require(USDC.allowance(msg.sender, address(this)) >= NFTPriceInUSDC * nftCount, "You haven't approved this contract to spend enough of your USDC to pay for the Track Pack NFT(s).");

        USDC.transferFrom(msg.sender, address(this), NFTPriceInUSDC * nftCount);
        
        return _mintTrackPackNFT(nftCount, msg.sender);
    }

    /**
    * @dev Only owner function to withdraw the USDC that is paid to this contract for the Track Pack NFTs.
    */
    function withdrawTrackPackFunds() external onlyRole(DEFAULT_ADMIN_ROLE) {
        USDC.transfer(msg.sender, USDC.balanceOf(address(this)));
    }

    /**
    * @dev Setter function for the token URI of an NFT.
    * @param tokenId the ID of the NFT to update the token URI of
    * @param newTokenURI the token URI to update the NFT with
     */
    function setTokenURI(uint256 tokenId, string memory newTokenURI) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _setTokenURI(tokenId, newTokenURI);
        emit tokenURIUpdated(tokenId, newTokenURI);
    }

    /**
    * @dev Function to get all token URIs for tokens that a given user owns.
    * @param userAddress the user's address to get token URIs of
    * @return list of token URIs for a user's NFTs
     */
    function getUserTokenURIs(address userAddress) external view returns (string[] memory) {
        uint256 userTokenCount = balanceOf(userAddress);
        uint256 currTokenId = 0;
        string[] memory userNFTTokenURIs = new string[](userTokenCount);

        for (uint256 i; i < userTokenCount; i++) {
            currTokenId = tokenOfOwnerByIndex(userAddress, i);
            userNFTTokenURIs[i] = tokenURI(currTokenId);
        }

        return userNFTTokenURIs;
    }

    /**
    * @dev Function to get all token IDs for tokens that a given user owns.
    * @param userAddress the user's address to get token IDs of
    * @return list of token IDs for a user's NFTs
     */
    function getUserTokenIDs(address userAddress) external view returns (uint256[] memory) {
        uint256 userTokenCount = balanceOf(userAddress);
        uint256[] memory userNFTTokenIDs = new uint256[](userTokenCount);

        for (uint256 i; i < userTokenCount; i++) {
            userNFTTokenIDs[i] = tokenOfOwnerByIndex(userAddress, i);
        }

        return userNFTTokenIDs;
    }  

    /**
    * @dev updates the Track Pack NFT token URI
    * @param newTrackPackTokenURI the new token URI for the Track Pack NFTs
     */
    function updateTrackPackTokenURI(string memory newTrackPackTokenURI) external onlyRole(DEFAULT_ADMIN_ROLE) {
        trackPackTokenURI = newTrackPackTokenURI;
    }  

    /**
    * @dev updates the maximum number of Track Pack NFTs that can be minted for the drop this contract represents.
    * @param newMaxNFTs the new maximum number of NFTs that can be minted in this contract
     */
    function updateMaxNFTs(uint256 newMaxNFTs) external onlyRole(DEFAULT_ADMIN_ROLE) {
        maxNFTs = newMaxNFTs;
    }

    /**
    * @dev updates the price of each NFT.
    * @param newNFTPriceInUSDC the price of each NFT in USDC
     */
    function updateNFTPriceInUSDC(uint256 newNFTPriceInUSDC) external onlyRole(DEFAULT_ADMIN_ROLE) {
        NFTPriceInUSDC = newNFTPriceInUSDC;
    }    

    /**
    * @dev updates the USDC contract.
    * @param newUSDCAddress the new USDC address
     */
    function updateUSDCAddress(address newUSDCAddress) external onlyRole(DEFAULT_ADMIN_ROLE) {
        USDC = IERC20(newUSDCAddress);
    }  

    /**
    * @dev Only owner function to update the Chainlink VRF subscription ID.
    * @param newSubscriptionId the new Chainlink VRF subscription ID
    */      
    function updateSubscriptionId(uint64 newSubscriptionId) external onlyRole(DEFAULT_ADMIN_ROLE) {
        s_subscriptionId = newSubscriptionId;
    }

    /**
    * @dev Only owner function to update the reference to the song NFT contract.
    * @param newSongNFTContractAddress the address of the new song NFT contract
    */      
    function updateSongNFT(address newSongNFTContractAddress) external onlyRole(DEFAULT_ADMIN_ROLE) {
        songNFT = SongNFT(newSongNFTContractAddress);
    }

    /**
    * @dev Only owner function to update the VRF coordinator interface.
    * @param newCoordinator the new VRF coordinator interface reference
    */      
    function updateCoordinator(address newCoordinator) external onlyRole(DEFAULT_ADMIN_ROLE) {
        coordinator = VRFCoordinatorV2Interface(newCoordinator);
    }

    /**
    * @dev Only owner function to update the number of songs per Track Pack.
    * @param newNumSongsPerTrackPack the new number of songs per Track Pack
    */      
    function updateNumSongsPerTrackPack(uint256 newNumSongsPerTrackPack) external onlyRole(DEFAULT_ADMIN_ROLE) {
        songsPerTrackPack = newNumSongsPerTrackPack;
    }

    /**
    * @dev Only owner function to update the keyhash for VRF.
    * @param newKeyHash the new key hash
    */      
    function updateKeyHash(bytes32 newKeyHash) external onlyRole(DEFAULT_ADMIN_ROLE) {
        keyHash = newKeyHash;
    }

    /**
    * @dev Only owner function to update the callbackGasLimit value for VRF.
    * @param newCallbackGasLimit the new callbackGasLimit value
    */      
    function updateCallbackGasLimit(uint32 newCallbackGasLimit) external onlyRole(DEFAULT_ADMIN_ROLE) {
        callbackGasLimit = newCallbackGasLimit;
    }

    /**
    * @dev Only owner function to update the requestConfirmations value for VRF.
    * @param newRequestConfirmations the new requestConfirmations value
    */      
    function updateRequestConfirmations(uint16 newRequestConfirmations) external onlyRole(DEFAULT_ADMIN_ROLE) {
        requestConfirmations = newRequestConfirmations;
    }

    // Override function since both ERC721URIStorage and ERC721Enumerable inherit from ERC721 and so both have a definition for _burn.
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    // Override function since both ERC721URIStorage and ERC721Enumerable inherit from ERC721 and so both have a definition for _beforeTokenTransfer.
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    // Override function since both ERC721URIStorage and ERC721Enumerable inherit from ERC721 and so both have a definition for supportsInterface.
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    // Override function since both ERC721URIStorage and ERC721Enumerable inherit from ERC721 and so both have a definition for tokenURI.
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }    
}