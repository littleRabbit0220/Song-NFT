import ShareIcon from "@/icons/ShareIcon";
import ArtistTag from "./ArtistTag";
import Button from "../utils/elements/Button";
import MasterCardIcon from "@/icons/MasterCardIcon";
import VisaCardIcon from "@/icons/VisaCardIcon";
import GooglePlayIcon from "@/icons/GooglePlayIcon";
import ApplePayIcon from "@/icons/ApplePayIcon";
import AmericanPayIcon from "@/icons/AmericanPayIcon";
import VerifiedIcon from "@/icons/VerifiedIcon";
import USDCIcon from "@/icons/USDCIcon";
import MaticIcon from "@/icons/MaticIcon";
import { ethers } from "ethers";
import data from "./data.json";
import { useCallback, useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import Modal from "../utils/elements/Modal";
const TrackDetails = () => {
  const { buyWithCreditCard } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  async function handleBuyWithCypto() {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      try {
        const TrackPackNFTContract = new ethers.Contract(
          data.address,
          data.abi,
          signer
        );
        let nftCount = 1;
        const buyNFT = await TrackPackNFTContract.mintTrackPackNFT(nftCount);
        await buyNFT.wait();
        alert("NFT buy successfully");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("install wallet");
    }
  }

  const buyWithVisaCreditCard = useCallback(async () => {
    try {
      await buyWithCreditCard();
      alert("NFT buy successfully");
    } catch (error) {
      alert(error);
    }
  }, []);
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
          onClick={() => setShowModal(true)}
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
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <p>Do you really buy this NFT with credit card?</p>
        <div className="flex justify-center mt-10">
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setShowModal(false);
              buyWithVisaCreditCard();
            }}
          >
            Ok
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TrackDetails;
