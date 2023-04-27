import { createContext, useState } from "react";
import initialStripe from "stripe";
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, setState] = useState({
    status: false,
    loading: false,
    songLoading: false,
    tapeLoading: false,
    profileLoading: false,
    nftMetaData: [],
    error: null,
    message: null,
    singleNftData: [],
    mixtapeOwnData: [],
    nftKeyData: {},
    user: true,
    customer_id: null,
  });

  // get all NftMeta data
  const getNftData = async (pageNo) => {
    setState((state) => ({ ...state, songLoading: true }));
    const userAuth = JSON.parse(localStorage.getItem("userInfo"));
    try {
      if (pageNo) {
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
            songLoading: false,
            nftMetaData: responseData,
          }));
        } else {
          setState((state) => ({
            ...state,
            songLoading: false,
            error: responseData,
          }));
        }
      }
    } catch (error) {
      setState((state) => ({ ...state, songLoading: false, error: error }));
    }
  };

  // single nft data
  const getSingleNftData = async (docId) => {
    setState((state) => ({ ...state, profileLoading: true }));
    const userAuth = JSON.parse(localStorage.getItem("userInfo"));
    try {
      if (docId) {
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
            profileLoading: false,
            singleNftData: responseData,
          }));
        } else {
          setState((state) => ({
            ...state,
            profileLoading: false,
            error: responseData,
          }));
        }
      }
    } catch (error) {
      setState((state) => ({ ...state, profileLoading: false, error: error }));
    }
  };

  const updateSingleNftData = async (data) => {
    setState((state) => ({ ...state, profileLoading: true }));
    try {
      if (data) {
        setState((state) => ({
          ...state,
          profileLoading: false,
          singleNftData: data,
        }));
      }
    } catch (error) {
      setState((state) => ({ ...state, profileLoading: false, error: error }));
    }
  };

  // user maxtape data
  const getMaxtapeNftData = async (docID) => {
    setState((state) => ({ ...state, tapeLoading: true }));
    const userAuth = JSON.parse(localStorage.getItem("userInfo"));
    try {
      if (docID) {
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
            tapeLoading: false,
            mixtapeOwnData: responseData,
          }));
        } else {
          setState((state) => ({
            ...state,
            tapeLoading: false,
            error: responseData,
          }));
        }
      }
    } catch (error) {
      setState((state) => ({ ...state, tapeLoading: false, error: error }));
    }
  };

  // user nft ownership data
  const getOwnershipNft = async () => {
    setState((state) => ({ ...state, loading: true }));
    const userAuth = JSON.parse(localStorage.getItem("userInfo"));
    try {
      const response = await fetch(
        `${process.env.HOST_URL}/nft-records/get-nft-ownership-data?uid=${userAuth?.localId}`,
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

  const postStripeCustomerId = async () => {
    const userAuth = JSON.parse(localStorage.getItem("userInfo"));
    try {
      const stripe = initialStripe(process.env.STRIPE_SECRET_KEY);
      const customer = await stripe.customers.create({
        email: userAuth.email,
      });
      console.log(customer);
      const response = await fetch(
        `${process.env.HOST_URL}/customer-id-to-uid/`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${userAuth?.idToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customer_id: customer.id,
          }),
        }
      );
      if (response.ok === false) throw ('error')
    } catch (err) {
      throw err;
      // setState((state) => ({...state, error: error }));
    }
  };
  const getUserEthAddress = async () => {
    const userAuth = JSON.parse(localStorage.getItem("userInfo"));
    try {
      const response = await fetch(`${process.env.HOST_URL}/userEthAddr/`, {
        method: "get",
        headers: {
          Authorization: `Bearer ${userAuth?.idToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      throw error;
      // setState((state) => ({...state, error: error }));
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
        updateSingleNftData,
        postStripeCustomerId,
        getUserEthAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
