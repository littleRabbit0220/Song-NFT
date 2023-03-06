import ArrowUpRightIcon from '@/icons/ArrowUpRightIcon';
import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
const ArtistStats = () => {
  return (
    <div className='relative z-10 flex -m-[15px] flex-wrap'>
      <div className='basis-full sm:basis-1/2 lg:basis-1/3 p-[15px]'>
        <div className='flex items-center justify-between p-5 bg-white rounded-md shadow-1'>
          <span className='text-sm opacity-50 text-MoshDark-7 font-open-sans'>
            Royalties Earned
          </span>
          <div className='flex'>
            <p className='font-bold text-[22px] text-MoshDark-7 mr-3.5'>
              $1,280
            </p>
            <span className='flex items-center justify-center px-3 text-center text-white rounded-full bg-sweetTurquoise h-9'>
              10%
              <HiArrowUpRight className='ml-1.5' />
            </span>
          </div>
        </div>
      </div>

      <div className='basis-full sm:basis-1/2 lg:basis-1/3 p-[15px]'>
        <div className='flex items-center justify-between p-5 bg-white rounded-md shadow-1'>
          <span className='text-sm opacity-50 text-MoshDark-7 font-open-sans'>
            Songs
          </span>
          <div className='flex'>
            <p className='font-bold text-[22px] text-MoshDark-7 mr-3.5'>14</p>
            <span className='flex items-center justify-center px-3 text-center text-white rounded-full bg-sweetTurquoise h-9'>
              12%
              <HiArrowUpRight className='ml-1.5' />
            </span>
          </div>
        </div>
      </div>

      <div className='basis-full sm:basis-1/2 lg:basis-1/3 p-[15px]'>
        <div className='flex items-center justify-between p-5 bg-white rounded-md shadow-1'>
          <span className='text-sm opacity-50 text-MoshDark-7 font-open-sans'>
            Fans
          </span>
          <div className='flex'>
            <p className='font-bold text-[22px] text-MoshDark-7 mr-3.5'>14</p>
            <span className='flex items-center justify-center px-3 text-center text-white rounded-full bg-[#EE3F3F] h-9'>
              2%
              <HiArrowUpRight className='ml-1.5 transform rotate-90' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistStats;
