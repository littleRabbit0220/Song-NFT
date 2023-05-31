import ShareIcon from "@/icons/ShareIcon";
import ArtistTag from "./ArtistTag";
import Button from "../utils/elements/Button";
import MasterCardIcon from "@/icons/MasterCardIcon";
import VisaCardIcon from "@/icons/VisaCardIcon";
import AmericanPayIcon from "@/icons/AmericanPayIcon";
import VerifiedIcon from "@/icons/VerifiedIcon";
import USDCIcon from "@/icons/USDCIcon";
import MaticIcon from "@/icons/MaticIcon";
import { ethers } from "ethers";
import track_pack from "./TrackPackNFT.json";
import mock_token from './MockToken.json';
import { useCallback, useContext, useEffect, useState } from "react";
import {useRouter} from 'next/router';
import { UserContext } from "@/context/UserContext";
import Modal from "../utils/elements/Modal";
import Loading from "../utils/elements/Loading";
import Alert from "../utils/elements/Alert";
import WithdrawModal from "../utils/elements/WithdrawModal";
import Radio from "../utils/elements/Radio";

const TrackDetails = () => {
  const router = useRouter();
  const { addToNftRecord, updateNftRecordPrivate, state, getOwnershipNft } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [errors, setErrors] = useState(null);
  const [num, setNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [cryptoModal, setCryptoModal] = useState(false);
  async function handleBuyWithCypto() {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      try {
        const TrackPackNFTContract = new ethers.Contract(
          track_pack.address,
          track_pack.abi,
          signer
        );
        const MockTokenContract = new ethers.Contract(
          mock_token.address,
          mock_token.abi,
          signer
        );

        TrackPackNFTContract.on('trackPackNFTMinted', async (to, id) => {
          const mintedTokenId = parseInt(id._hex, 16);
          console.log(mintedTokenId)
          setLoadingText('Saving into ntf_record database...');
          await addToNftRecord(mintedTokenId, 'private');
          setLoadingText('Opening...');
          await TrackPackNFTContract.openTrackPackNFT(mintedTokenId);
        });
        TrackPackNFTContract.on('TrackPackOpened', async (from, tokenId, requestId, mintedIDs) => {
          console.log("from" + from, "tokenId" + tokenId, "requestId" + requestId, "mintedIDs" + mintedIDs);
          setLoadingText('Saving into ntf_record database...');
          await updateNftRecordPrivate(mintedIDs, tokenId);
          setLoading(false)
          setAlertMessage('You bought successfully!');
          setAlertVisible(true);
          setTimeout(() => setAlertVisible(false), 5000);
        });

        setLoadingText('Approving...');
        setLoading(true);
        await MockTokenContract.approve(track_pack.address, 1000);
        setLoadingText('Minting...');
        setTimeout(async () => {
          await TrackPackNFTContract.mintTrackPackNFT(num);
          setNumber(1);
        }, 2000);

      } catch (error) {
        setAlertMessage('Somthing is wrong! Try again.' + error);
        setAlertVisible(true);
        setLoading(false)
      }
    } else {
      setAlertMessage('Install your wallet!');
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 5000);
    }
  }

  const buyWithCreditCard = useCallback(() => {
    if (num <= 0) {
      setErrors("exist");
    } else {
      router.push('/checkout?quentity='+ num);
    }
  }, [num, errors]);

  useEffect(() => {
    getOwnershipNft();
  },[]);


  return (
    <div className="py-10 md:py-16">
      <span className="flex items-center uppercase text-MoshLight-1 font-open-sans">
        <span className="align-middle">SEASON #1</span>
        <VerifiedIcon className="ml-2" />
      </span>
      <div className="flex items-center">
        <h2 className="mb-2 sm:mb-1 text-3xl sm:!leading-relaxed sm:text-[42px] font-bold">
          Bad Apples
        </h2>
        <button className="ml-2.5">
          <ShareIcon />
        </button>
      </div>
      <div className="flex flex-wrap -mt-1.5 md:-mt-2 sm:items-center sm:flex-row">
        <span className="pr-2.5 font-bold text-sm mt-2 w-full sm:w-auto !leading-relaxed ">
          Artists in this TrackPack
        </span>
        <div>
          {"Phoebe Bridgers|Tame Impala|The National|Bon Iver|Mitski|Vampire Weekend|Fleet Foxes|Beach House|Sharon Van Etten|Sufjan Stevens"
            .split("|")
            .map((tag, index) => (
              <ArtistTag
                btnText={tag}
                key={index}
                className="mt-1.5 mr-1.5 md:mt-2 md:mr-2"
              />
            ))}
        </div>
      </div>
      <p className="text-MoshLight-1 font-open-sans mt-5 mb-7 !leading-[160%] ">
        The “Bad Apples” track pack features a random collection of 20 songs
        from some of your favorite Latin artists including Canserbero, Lochard
        Remy, Gilberto Santa Rosa and Orchestre Septentrional. Earn streaming
        revenue from every song in this collection.
      </p>
      <p className=" text-[#F5F5F5] !leading-normal mb-1 flex items-center flex-wrap ">
        <span className="font-medium text-[26px] pr-2">$25 USD</span>

        <small className="tracking-widest uppercase">
          • USDC or Polygon (MATIC)
        </small>
      </p>

      <div className="flex items-center text-sm">
        <p className="text-sm font-aril ">TrackPacks Available:</p>
        <span className="px-1.5 font-aril">•</span>
        <p className="text-sm font-aril">
          <strong>200 out of 2,500 remaining</strong>
        </p>
      </div>
      <div className="flex flex-col flex-wrap my-6 sm:flex-row">
        <Button
          className="justify-center px-4 py-3 bg-primary font-suisse-intl sm:justify-start"
          onClick={() => setWithdrawModal(true)}
        >
          <span className="flex items-center">
            <MaticIcon className="mr-3" /> <USDCIcon className="mr-3" />
          </span>
          Buy with Crypto
        </Button>
        <Button
          className="bg-white text-sweetDark py-3 px-4 sm:ml-2.5 mt-3 sm:mt-0  sm:justify-start justify-center"
          onClick={() => setShowModal(true)}
        >
          <span className="flex items-center">
            <MasterCardIcon className="mr-[7px]" />
            <VisaCardIcon className="mr-[7px]" />
            <AmericanPayIcon />
          </span>
          <span className="pl-2.5">Buy with Credit Card</span>
        </Button>
      </div>
      <Modal
        setModalOpen={() => setShowModal(false)}
        isOpen={showModal}
        title={"Input the number of NFTs"}
        setNum={(v) => setNumber(v)}
        onOk={() => {
          setShowModal(false);
          if(cryptoModal===false) {
            buyWithCreditCard();
          } else {
            handleBuyWithCypto()
          }
        }}
      >
        <div className="p-5 text-white modal-body">
          <label>QUANTITY:</label>
          <input
            type="text"
            className="border-solid border-gray-500 border-2 ml-5 bg-black pl-2"
            value={num}
            onChange={(e) => {
              if (e.target.value === "") setNumber(0);
              else {
                if (num === 0) {
                  const str = e.target.value.substring(
                    1,
                    e.target.value.length
                  );
                  let x = parseInt(str);
                  setNumber(x);
                } else {
                  setNumber(parseInt(e.target.value));
                }
                setErrors(null);
              }
            }}
          />
          {errors ? (
            <div className="text-red-500">
              The number of NFts must be not empty.
            </div>
          ) : (
            <></>
          )}
        </div>
      </Modal>
      <WithdrawModal
        isOpen={withdrawModal}
        setModalOpen={(v) => setWithdrawModal(v)}
        onOk={() => {console.log('withdraw')}}
        title="Withdraw From Custodial Wallet"
        >
          <div className="pl-5 pr-5 pb-5">
            <div>
              <div className="flex flex-row justify-between text-white">
                <h4>TrackPackNFT:</h4><h4>15</h4>
              </div>
              <div className="flex flex-row justify-between text-white">
                <h4>SongNFT:</h4><h4>15</h4>
              </div>
            </div>
            <hr className="mt-3 mb-3 border-orange-400"/>
            <div>
              <h4>NFT Type:</h4>
              <div className="flex flex-row justify-between">
                <div className="flex items-center">
                  <Radio name="nft_type" value="trackpack"/>
                  <label className="ml-2">TrackPackNFT</label>
                </div>
                <div className="flex items-center">
                  <Radio name="nft_type" value="song"/>
                  <label className="ml-2">SongNFT</label>
                </div>
              </div>
              <hr className="mt-3 mb-3 border-orange-400"/>
              <label>The Number Of NFTs</label>
              <input type="number" min="1" className="w-full mb-2 bg-black p-1"></input>
            </div>
            <hr className="mt-3 mb-3 border-orange-400"/>
            <div>
              <button type="button" className="w-full border border-solid border-blue-500 bg-blue-500 hover:bg-blue-700 rounded p-2">Withdraw</button>
            </div>
          </div>
      </WithdrawModal>
      {loading && (<Loading message={loadingText} />)}
      {alertVisible && (<Alert hidden={!alertVisible} message={alertMessage} setAlertHidden={(v) => setAlertVisible(!v)} />)}
    </div>
  );
};

export default TrackDetails;
