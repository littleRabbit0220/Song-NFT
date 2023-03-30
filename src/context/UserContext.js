import { createContext, useEffect, useState } from "react";
import VerifyJWTExpire from "@/components/utils/functions/VerifyJWTExpire";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, setState] = useState({
    status: false,
    loading: false,
    nftMetaData: null,
    error: null,
    message: null,
    singleNftData: null,
    user: true,
  });

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const data = VerifyJWTExpire(userInfo?.idToken);
    if (data) {
      setState({ ...state, user: false });
    } else {
      setState({ ...state, user: true });
    }
  }, []);

  // get all NftMeta data
  const getNftData = async (pageNo) => {
    setState({ ...state, loading: true });
    const userAuth = JSON.parse(localStorage.getItem("userInfo"));
    try {
      const response = await fetch(
        `${process.env.HOST_URL}/nft-metadata/many-NFT-metadata/?page=${pageNo}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userAuth?.idToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        setState({ ...state, loading: false, error: responseData.error });
      } else {
        setState({ ...state, loading: false, nftMetaData: responseData });
      }
    } catch (error) {
      setState({ ...state, loading: false, error: error });
    }
  };

  // single nft data
  const getSingleNftData = async (docId) => {
    setState({ ...state, loading: true });
    const userAuth = JSON.parse(localStorage.getItem("userInfo"));
    try {
      const response = await fetch(
        `${process.env.HOST_URL}/nft-metadata/many-NFT-metadata/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${userAuth?.idToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(docId),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        setState({ ...state, loading: false, error: responseData.error });
      } else {
        setState({ ...state, loading: false, singleNftData: responseData });
      }
    } catch (error) {
      setState({ ...state, loading: false, error: error });
    }
  };

  return (
    <UserContext.Provider value={{ state, getNftData, getSingleNftData }}>
      {children}
    </UserContext.Provider>
  );
}
