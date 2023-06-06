import { UserContext } from '@/context/UserContext';
import React, { useContext, useEffect, useState } from 'react';
import Radio from '../utils/elements/Radio';
import WithdrawModal from '../utils/elements/WithdrawModal';
import OpenModal from '../utils/elements/OpenModal';
import cloneDeep from 'lodash/cloneDeep';

const OpenAndWithdraw = () => {

  const { state, setModalStatus, getOwnershipNft, openNft, userEthAddr, getUserEthAddr, withdrawNft, updateNftRecordPrivate, setErrorStatus  } = useContext(UserContext);
  const [ openNftId, setOpenNftId ] = useState(null);
  const [ withdrawNftId, setWithdrawNftId ] = useState(null);
  const [ withdrawNftType, setWithdrawNftType ] = useState(null);
  const [ userEthAddress, setUserEthAddress ] = useState('');
  const [ openModalVisible, setOpenModalVisible ] = useState(false);
  const [ withdrawModalVisible, setWithdrawModalVisible ] = useState(false);
  const [ track_nfts,  setTrackNfts ] = useState([]);
  const [ song_nfts, setSongNfts ] = useState([]);
  const [ open_track_nfts, setOpenTrackNfts ] = useState([]);

  useEffect(() => {
    getOwnershipNft();
    getUserEthAddr();
  },[]);

  useEffect(() => {
    if(Object.keys(state.nftKeyData).length !== 0) {
      const track_nfts = Object.keys(Object.fromEntries(
        Object.entries(state.nftKeyData.TrackPackNFT).filter(([key, value]) =>{
          console.log(key, value);
          return  value === 'custodial';
        })
      ));

      const song_nfts = Object.keys(Object.fromEntries(
        Object.entries(state.nftKeyData.SongNFT).filter(([key, value]) =>{
          return  value === 'custodial';
        })
      ));

      const open_track_nfts = Object.keys(Object.fromEntries(
        Object.entries(state.nftKeyData.SongNFT)
      ));

      setOpenTrackNfts(cloneDeep(open_track_nfts));
      setTrackNfts(cloneDeep(track_nfts));
      setSongNfts(cloneDeep(song_nfts));
    }
  },[state.nftKeyData])

  const open = () => {
    async function startOpen () {
      if(openNftId !== null) {
        await openNft(openNftId);
        setModalStatus(true, "Success!",<div>You opened successfully!</div>);
      } else {
        setErrorStatus('Please select the Id.')
      }
    }
    startOpen();
  }

  const withdraw = () => {
    const startWithdraw = async() => {
      if(withdrawNftId !== null && withdrawNftType !== null) {
        if(state.userEthAddress !== null) {
          withdrawNft(withdrawNftId, withdrawNftType);
        } else {
          console.log(x);
          if(userEthAddress !== '') {
            setErrorStatus('Input the information correctly!');
          } else {
            await userEthAddr(userEthAddress);
            await withdrawNft(withdrawNftId, withdrawNftType);
          }
        }
        await getOwnershipNft();
      } else {
        setErrorStatus('Input the information correctly!');
      }
    }
    startWithdraw();
  }
  
  return (
    <div className="mosh-container-normal">
      <div className="flex justify-end ">
        <button type="button" className="rounded p-2 bg-orange-700 hover:bg-orange-500 mr-4" onClick={() => setOpenModalVisible(true)}>Open</button>
        <button type="button" className="rounded p-2 bg-orange-700 hover:bg-orange-500" onClick={() => setWithdrawModalVisible(true)}>Withdraw</button>
      </div>
      <WithdrawModal visible={withdrawModalVisible} setModalVisible={(v) =>  setWithdrawModalVisible(v)} title="Withdraw Modal">
        <div className='p-2'>
          <label>TrackPackNFT Ids:</label>
          <div className='grid grid-cols-2 mb-3'>   
          {track_nfts?.length !==0 && track_nfts.map((nft, index) => (
            <div key={index} className='cols-span-1 flex justify-start items-center'>
              <Radio name="withdraw_nft_id" value={nft} onClick={(v) => {
                setWithdrawNftId(v);
                setWithdrawNftType('TrackPackNFT');
                }}/>
              <label className='ml-2'>{nft}</label>
            </div>
          ))}
          </div>
          <label>SongNFT Ids:</label>
          <div className='grid grid-cols-2 mb-3'>
          {song_nfts?.length !==0 && song_nfts.map((nft, index) => (
            <div key={index} className='cols-span-1 flex justify-start items-center'>
              <Radio name="withdraw_nft_id" value={nft} onClick={(v) => {
                setWithdrawNftId(v);
                setWithdrawNftType('SongNFT');
              }}/>
              <label className='ml-2'>{nft}</label>
            </div>
          ))}
          </div>
          {state?.userEthAddress === null && (
            <div className='mb-3'>
              <input type="text" className='rounded w-full bg-black text-white' placeholder='User Eth Address:' value={userEthAddress} onChange={(e) =>  setUserEthAddress(e.target.value)}></input>
            </div>
          )}
          <button type="button" className='rounded p-2 bg-orange-700 hover:bg-orange-500 w-full text-white z-[10]' onClick={()=>{
            withdraw();
            setWithdrawModalVisible(false);
            }}>Withdraw</button>
        </div>
      </WithdrawModal>
      <OpenModal visible={openModalVisible} setModalVisible={(v) =>  setOpenModalVisible(v)} title="Open Modal">
        <div className='p-3'>
          <label>TrackPackNFT Ids:</label>
          <div className='grid grid-cols-2 mb-3'>
          {track_nfts?.length !==0 && track_nfts.map((nft, index) => (
            <div key={index} className='cols-span-1 flex justify-start items-center'>
              <Radio name="open_nft_id" value={nft} onClick={(v) => {
                setOpenNftId(v)}}/>
              <label className='ml-2'>{nft}</label>
            </div>
          ))}
          </div>
          <button type="button" className='rounded p-2 bg-orange-700 hover:bg-orange-500 w-full text-white' onClick={()=>{
            open();
            setOpenModalVisible(false);
          }}>Open</button>
        </div>
      </OpenModal>
    </div>
  )
}

export default OpenAndWithdraw;