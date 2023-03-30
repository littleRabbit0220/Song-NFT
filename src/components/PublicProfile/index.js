import { UserContext } from "@/context/UserContext";
import { useContext, useEffect, useState } from "react";
import MixTapeListHeader from "./MixTapeListHeader";
import OwnedSongsList from "./OwnedSongsList";
import OwnedTapesList from "./OwnedTapesList";
import PublicProfileCard from "./PublicProfileCard";
import SongsListHeader from "./SongsListHeader";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/router";

const PublicProfile = () => {
  const router = useRouter();
  const { state, getNftData, getSingleNftData } = useContext(UserContext);
  const [songs, setSongs] = useState(null);
  const [tapeSongs, setTapeSongs] = useState(null);
  const [singleProfile, setSingleProfile] = useState(null);

  useEffect(() => {
    getNftData("1");
    getSingleNftData({ docID: "Mosh Song Token" });
  }, []);

  useEffect(() => {
    if (state?.nftMetaData?.length > 0 && state?.user) {
      const allTapes = state?.nftMetaData?.filter((val, index) => {
        if (val.type == "Tape") {
          return val;
        }
      });
      if (allTapes.length > 0) {
        setTapeSongs(allTapes);
      }
      const allSongs = state?.nftMetaData?.filter((val, index) => {
        if (val.type !== "Tape") {
          return val;
        }
      });
      if (allSongs.length > 0) {
        setSongs(allSongs);
      }
    }
    if (songs) {
      const data = songs?.map((val) => {
        return val;
      });
      setSingleProfile(data[0]);
    }
  }, [state]);

  useEffect(() => {
    if (!state.user) {
      router.push("/login");
    }
  }, [state.user]);

  return (
    <div className="relative z-[1] overflow-x-hidden">
      {/* <PublicProfileCard /> */}
      {songs ? <PublicProfileCard profile={singleProfile} /> : <FaSpinner />}
      <SongsListHeader />
      {songs ? <OwnedSongsList songs={songs} /> : <FaSpinner />}
      <MixTapeListHeader />
      <OwnedTapesList />
      {/* {tapeSongs ? (
        <OwnedTapesList tapeSongs={tapeSongs} />
      ) : (
        <h1>Data Not Found</h1>
      )} */}

      <div
        aria-hidden="true"
        className="absolute z-0 transform rounded-full opacity-60 -left-[380px] blur-lg -top-5"
        style={{
          width: "917px",
          height: "917px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(248, 78, 36, 0.501961) 0%, rgba(17, 11, 29, 0.0001) 100%)",
        }}
      ></div>
      <div
        aria-hidden="true"
        className="absolute z-0  rounded-full opacity-50 -right-[200px] blur-lg top-1/3  transform rotate-[22deg]"
        style={{
          width: "532px",
          height: "857px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(248, 78, 36, 0.501961) 0%, rgba(17, 11, 29, 0.0001) 100%)",
        }}
      ></div>
    </div>
  );
};

export default PublicProfile;
