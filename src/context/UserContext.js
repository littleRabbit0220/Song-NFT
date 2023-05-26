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
    alertHidden: true,
    leaderboard_list: []
  });

  const setAlertHidden = (value) => {
    console.log('va')
    setState((state) => ({ ...state, alertHidden: value }));

  }
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
        `${process.env.HOST_URL}/nft-records/get-nft-ownership-data/`,
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
      setState((state) => ({ ...state, customer_id: customer }))
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
  const getStripeCustomerId = () => {
    return new Promise(async (resolve, reject) => {
      const userAuth = JSON.parse(localStorage.getItem("userInfo"));
      try {

        const response = await fetch(
          `${process.env.HOST_URL}/customer-id-to-uid/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${userAuth?.idToken}`,
              "Content-Type": "application/json",
            },

          }
        );
        if (response.ok === false) reject('error');
        const customer_id = await response.json();
        resolve(customer_id);
      } catch (err) {
        reject(err);
        // setState((state) => ({...state, error: error }));
      }
    })
  };
  const getUserEthAddress = async () => {
    const userAuth = JSON.parse(localStorage.getItem("userInfo"));
    try {
      const response = await fetch(`${process.env.HOST_URL}/userEthAddr/`, {
        method: "get",
        headers: {
          Authorization: `Bearer ${userAuth?.idToken}`,
          "Content-Type": "application/json",
        }

      });
      console.log(response);
    } catch (error) {
      throw error;
      // setState((state) => ({...state, error: error }));
    }
  };

  const addToNftRecord = async (nft_id, address) => {
    const userAuth = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${process.env.HOST_URL}/nft-records/add-nft-record/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userAuth?.idToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nft_name: 'TrackPackNFT',
          nft_id: nft_id,
          address: address,
        })
      });
      if (response.ok) {
        console.log('ok');
      } else {
        throw "error";
      }
    } catch {
      console.log('error');
    }
  }
  const updateNftRecordPrivate = async (song_nft_ids, trackpack_nft_id) => {
    const userAuth = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${process.env.HOST_URL}/update-nft-record-private/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userAuth?.idToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          song_nft_ids: song_nft_ids,
          trackpack_nft_id: trackpack_nft_id
        })
      });
      if (response.ok) {
        console.log('ok');
      } else {
        throw "error";
      }
    } catch {
      console.log('error');
    }
  }
  const getTopUsers = async () => {
    const userAuth = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${process.env.HOST_URL}/leaderboard/`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userAuth?.idToken}`,
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        const responseData = await response.json();
        setState((state) => {
          return {
            ...state,
            leaderboard_list: responseData
          }
        })
      } else {
        console.log('error');
      }
    } catch {
      throw 'error';
    }
  }
  const openNft = async () => {
    const userAuth = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${process.env.HOST_URL}/open-nft/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userAuth?.idToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          number_of_nft: 1
        })
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData)
      } else {
        console.log('error');
      }
    } catch {
      throw 'error';
    }
  }
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
        getStripeCustomerId,
        getUserEthAddress,
        setAlertHidden,
        getTopUsers,
        addToNftRecord,
        openNft,
        updateNftRecordPrivate
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
