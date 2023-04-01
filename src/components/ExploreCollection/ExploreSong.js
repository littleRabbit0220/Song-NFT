import { UserContext } from "@/context/UserContext";
import MoshMIcon from "@/icons/MoshMIcon";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { truncateText } from "../utils/functions/helpers";

const ExploreSong = ({ song ,type}) => {
  const [track, setTrack] = useState([]);
  const {
    state,
    updateSingleNftData
  } = useContext(UserContext);

  useEffect(() => {
    if (song?.attributes) {
      const attributesData = JSON.parse(song.attributes).map((val) => {
        return val;
      });
      setTrack(attributesData);
    }
  }, [song]);

  const songTitle = () => {
    const title = track.map((val) => {
      if (val?.trait_type === "Track Title") {
        return truncateText(val.value, 12);
      }
    });
    return title;
  };

  const songSubTitle = () => {
    const title = track.map((val) => {
      if (val?.trait_type === "Year") {
        return val.value;
      }
    });
    return title;
  };

  const songType = () => {
    const title = track.map((val) => {
      if (val?.trait_type === "Category") {
        return val.value;
      }
    });
    return title;
  };

  const songArtist = () => {
    const title = track.map((val) => {
      if (val?.trait_type === "Artist") {
        return val.value;
      }
    });
    return title;
  };

  const handlePlay=()=>{
    if(song){
      const songsArray=[song]
      updateSingleNftData(songsArray)
    }
  }

  return (
    <div className="pt-1 song">
      <div className="relative">
        <Image
          src={
            song?.image
              ? song?.image
              : `/assets/img/tracks/${
                  song?.type === "Tape" ? "vol2-flow-futurama.png" : "song.png"
                }`
          } // specify the image path
          alt="Alternative text" // add alternative text for accessibility
          width={400} // set the width of the image
          height={450} // set the height of the image
          layout="responsive" // specify the layout of the image
          objectFit="cover" // set the object-fit property for the image
        />
        <button className="px-1.5 py-0 text-black bg-white rounded-full absolute top-5 right-3 focus:text-primary hover:bg-opacity-90">
          <FaEllipsisH />
        </button>
        <button onClick={handlePlay} className="hover:bg-MoshLight-1 md:mt-0 mt-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-suisse-intl text-[#030205] font-bold bg-white flex items-center rounded-full py-1.5   pl-1.5 text-lg sm:text-base min-w-max ">
          <MoshMIcon className="w-[30px] sm:w-[30px] h-[30px] sm:h-[30px] " />
          <span className="pl-1.5 pr-3 text-sm font-bold font-suisse-intl">
            {type === "tape" ? "Mix Tapes" : " Song"}
          </span>
        </button>
      </div>
      <div className="px-1 sm:px-2 pt-2.5 sm:pt-5">
        <h3 className="mb-1 text-base font-bold sm:mb-2 sm:text-xl font-aril">
          {songTitle()}
        </h3>
        <p className="text-[10px] sm:text-sm font-open-sans ">
          <span className="uppercase">{songArtist()} ,</span>
          {songSubTitle()} • {songType()}
        </p>
      </div>
    </div>
  );
};

export default ExploreSong;
