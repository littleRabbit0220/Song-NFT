import DiscordIcon from '@/icons/DiscordIcon';
import HeadSetIcon from '@/icons/HeadSetIcon';
import MusicIcon from '@/icons/MusicIcon';
import RoyaltyIcon from '@/icons/RoyaltyIcon';
import React from 'react';

const WhatIncluded = () => {
  return (
    <div className='h-full px-4 overflow-hidden bg-white rounded-md sm:px-7 shadow-1'>
      <h2 className=' font-semibold mt-[22px] text-MoshDark-7 text-[22px] '>
        What’s included
      </h2>

      <span className='text-sm opacity-50 font-open-sans text-MoshDark-7'>
        March 1, 2023
      </span>
      <h3 className='font-semibold uppercase text-MoshDark-7'>Drop Date</h3>
      <ul className='mt-5'>
        <li className='flex items-center justify-between mb-7'>
          <span className='flex items-center'>
            <span className='bg-MoshLight-1  h-[27px] w-[30px] flex justify-center items-center'>
              <MusicIcon />
            </span>
            <span className='font-medium text-MoshDark-7 pl-2.5'>Songs</span>
          </span>
          <span className='font-medium text-MoshDark-7'>10</span>
        </li>

        <li className='flex items-center justify-between mb-7'>
          <span className='flex items-center'>
            <span className='bg-MoshLight-1  h-[27px] w-[30px] flex justify-center items-center'>
              <RoyaltyIcon />
            </span>
            <span className='text-[15px] sm:text-base  font-medium text-MoshDark-7 pl-2.5'>
              Royalties
            </span>
          </span>
          <span className='text-sm font-medium text-primary sm:text-base'>
            10%
          </span>
        </li>

        <li className='flex items-center justify-between mb-7'>
          <span className='flex items-center'>
            <span className='bg-MoshLight-1  h-[27px] w-[30px] flex justify-center items-center'>
              <DiscordIcon />
            </span>
            <span className='text-[15px] sm:text-base  font-medium text-MoshDark-7 pl-2.5'>
              Discord Access
            </span>
          </span>
          <span className='text-sm opacity-50 text-MoshDark-7 sm:text-base'>
            Available Now
          </span>
        </li>

        <li className='flex items-center justify-between mb-7'>
          <span className='flex items-center'>
            <span className='bg-MoshLight-1  h-[27px] w-[30px] flex justify-center items-center'>
              <HeadSetIcon />
            </span>
            <span className='text-[15px] sm:text-base font-medium text-MoshDark-7 pl-2.5'>
              Listening Party
            </span>
          </span>
          <span className='text-sm opacity-50 text-MoshDark-7 sm:text-base'>
            Coming Soon
          </span>
        </li>
      </ul>
    </div>
  );
};

export default WhatIncluded;
