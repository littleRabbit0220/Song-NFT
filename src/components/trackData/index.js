import React from 'react';
import StreamStats from './StreamStats';
import WhatIncluded from './WhatIncluded';
import TopCollectors from './TopCollectors';

const TrackData = () => {
  return (
    <div className='mosh-container-normal'>
      <div className='flex flex-row -mx-[15px] overflow-hidden flex-wrap'>
        <div className='w-full md:w-1/3 md:basis-1/2 lg:w-1/3 lg:basis-1/3 p-[15px]'>
          <StreamStats />
        </div>
        <div className='w-full basis-full md:w-1/2 md:basis-1/2 lg:w-1/3 lg:basis-1/3 p-[15px]'>
          <WhatIncluded />
        </div>
        <div className='w-full basis-full md:w-1/2 md:basis-1/2 lg:w-1/3 lg:basis-1/3 p-[15px]'>
          <TopCollectors />
        </div>
      </div>
    </div>
  );
};

export default TrackData;
