import { UserContext } from "@/context/UserContext";
import { useContext, useEffect, useState } from "react";
import MixTapeListHeader from "./MixTapeListHeader";
import OwnedSongsList from "./OwnedSongsList";
import OwnedTapesList from "./OwnedTapesList";
import PublicProfileCard from "./PublicProfileCard";
import SongsListHeader from "./SongsListHeader";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/SyncLoader";
import VerifyJWTExpire from "@/components/utils/functions/VerifyJWTExpire";

const PublicProfile = () => {
  const router = useRouter();
  const { state, getNftData, getSingleNftData } = useContext(UserContext);
  const [songs, setSongs] = useState([]);
  const [tapeSongs, setTapeSongs] = useState([]);
  const [singleProfile, setSingleProfile] = useState([]);
  const [checkAuth, setCheckAuth] = useState(true);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const data = VerifyJWTExpire(userInfo?.idToken);
    if (data) {
      router.push("/login");
      setCheckAuth(false);
    } else {
      router.push(router?.pathname);
      setCheckAuth(true);
    }
  }, []);

  useEffect(() => {
    if (checkAuth) {
      getSingleNftData({ docID: "gang_of_four_damaged_goods" });
      getNftData("1");
    }
  }, [checkAuth]);

  useEffect(() => {
    if (checkAuth) {
      if (state?.nftMetaData?.length > 0) {
        const allTapes = state?.nftMetaData?.filter((val) => {
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
      if (state?.singleNftData?.length > 0) {
        const data = state?.singleNftData?.map((val) => {
          return val;
        });
        setSingleProfile(data[0]);
      }
    }
  }, [state]);

  return (
    <div className="relative z-[1] overflow-x-hidden">
      {/* <div>
        {state.error && (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              color: "red",
              marginTop: 30,
            }}
          >
            {state.error}
          </span>
        )}
      </div> */}
      <div>
        {state.loading || !singleProfile.length==0 ? (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
          >
            <ClipLoader color="white" />
          </div>
        ) : (
          <PublicProfileCard profile={singleProfile} />
        )}
      </div>

      <SongsListHeader />
      <div>
        {state.loading ? (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
          >
            <ClipLoader color="white" />
          </div>
        ) : songs.length == 0 ? (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
          >
            <h2>Songs Not Found</h2>
          </div>
        ) : (
          <OwnedSongsList songs={songs} />
        )}
      </div>
      <MixTapeListHeader />
      <div>
        {state.loading ? (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
          >
            <ClipLoader color="white" />
          </div>
        ) : tapeSongs.length == 0 ? (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
          >
            <h2>MixTape Not Found</h2>
          </div>
        ) : (
          <OwnedTapesList />
        )}
      </div>

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
