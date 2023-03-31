import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, setState] = useState({
    status: false,
    loading: false,
    nftMetaData: [],
    error: null,
    message: null,
    singleNftData: [],
    mixtapeOwnData: [],
    nftKeyData: {},
    user: true,
  });

  // get all NftMeta data
  const getNftData = async (pageNo) => {
    setState((state) => ({ ...state, loading: true }));
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
      if (typeof responseData == "object") {
        setState((state) => ({
          ...state,
          loading: false,
          nftMetaData: responseData,
        }));
      } else {
        setState((state) => ({
          ...state,
          loading: false,
          error: responseData,
        }));
      }
    } catch (error) {
      setState((state) => ({ ...state, loading: false, error: error }));
    }
  };

  // single nft data
  const getSingleNftData = async (docId) => {
    setState((state) => ({ ...state, loading: true }));
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
      if (typeof responseData == "object") {
        setState((state) => ({
          ...state,
          loading: false,
          singleNftData: responseData,
        }));
      } else {
        setState((state) => ({
          ...state,
          loading: false,
          error: responseData,
        }));
      }
    } catch (error) {
      setState((state) => ({ ...state, loading: false, error: error }));
    }
  };

  // user maxtape data
  const getMaxtapeNftData = async (docID) => {
    setState((state) => ({ ...state, loading: true }));
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
          body: JSON.stringify(docID),
        }
      );
      const responseData = await response.json();
      if (typeof responseData == "object") {
        setState((state) => ({
          ...state,
          loading: false,
          mixtapeOwnData: responseData,
        }));
      } else {
        setState((state) => ({
          ...state,
          loading: false,
          error: responseData,
        }));
      }
    } catch (error) {
      setState((state) => ({ ...state, loading: false, error: error }));
    }
  };
  
  // user nft ownership data
  const getOwnershipNft = async (uId) => {
    setState((state) => ({ ...state, loading: true }));
    const userAuth = JSON.parse(localStorage.getItem("userInfo"));
    try {
      const response = await fetch(
        `${process.env.HOST_URL}/nft-records/get-nft-ownership-data?uid=${uId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userAuth?.idToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      if (typeof responseData == "object") {
        setState((state) => ({
          ...state,
          loading: false,
          nftKeyData: responseData,
        }));
      } else {
        setState((state) => ({
          ...state,
          loading: false,
          error: responseData,
        }));
      }
    } catch (error) {
      setState((state) => ({ ...state, loading: false, error: error }));
    }
  };

  return (
    <UserContext.Provider
      value={{
        state,
        getNftData,
        getSingleNftData,
        getMaxtapeNftData,
        getOwnershipNft,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
