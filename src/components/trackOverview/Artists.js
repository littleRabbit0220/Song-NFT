import Image from 'next/image';
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';

const Artists = () => {
  const router = useRouter();
  const { state, getNftData } = useContext(UserContext);
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getNftData(1);
  },[]);
  useEffect(() => {
    if(state && state.nftMetaData) {
      setSongs([...state.nftMetaData]);
    }
  },[state.nftMetaData]);
  const navigateToSongPage = useCallback((docId) => {
    router.push({
      pathname:'/song/' + docId,

    });
  },[]);
  return (
    <div className='hidden md:block'>
      <h2 className='text-[22px] font-semibold mb-3.5'>
        Songs in This Mix Tape
      </h2>
      <div className='flex flex-wrap overflow-hidden -mx-[7.5px]'>
        {songs && songs.map((song, index) => (
          <div
            key={index}
            className='w-full sm:w-1/2 md:w-1/3  lg:w-1/4 basis-full sm:basis-1/2 md:basis-1/3  lg:basis-1/4 p-[7.5px] '
          >
            <div className='bg-white rounded-md pl-2.5 pt-2.5 flex pb-3.5'>
              <div className='w-[70px]'>
                <Image
                  alt={JSON.parse(song.attributes).find(e =>  e.trait_type === 'Artist').value}
                  height={140}
                  width={166}
                  className='w-[70px] h-[83px] object-cover rounded'
                  src={`/assets/img/artists/malucci.jpeg`}
                />
              </div>
              <div className='flex-1 w-full pl-2.5 pr-3 text-MoshDark-7'>
                <span className='block font-bold !leading-snug'>
                  {JSON.parse(song.attributes).find(e =>  e.trait_type === 'Track Title').value}
                </span>
                <span
                  title={JSON.parse(song.attributes).find(e =>  e.trait_type === 'Artist').value}
                  className='block text-sm font-open-sans  mt-0.5 '
                >
                  {JSON.parse(song.attributes).find(e =>  e.trait_type === 'Artist').value}
                </span>
                <span className='block text-sm font-open-sans mt-0.5'>
                  {JSON.parse(song.attributes).find(e =>  e.trait_type === 'Category').value} • {JSON.parse(song.attributes).find(e =>  e.trait_type === 'Year').value}
                </span>
                <button
                  className=' hover:bg-opacity-20 transition-colors duration-200 ease-in-out mt-4 block w-full text-xs font-semibold text-center uppercase rounded bg-MoshDark-7 font-open-sans bg-opacity-10 py-1.5 px-1.5'
                  onClick={() => navigateToSongPage(song.docId)}
                >
                  Listen to this song
                </button>
                <button className='mt-1.5 flex'>
                  <Image
                    className='h-[33px] w-auto'
                    src='/assets/img/icons/play-and-follow-logo.png'
                    width={228}
                    height={67}
                    alt='play and follow logo'
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
