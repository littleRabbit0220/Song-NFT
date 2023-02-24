import React from 'react';
import StreamStats from './StreamStats';
import WhatIncluded from './WhatIncluded';
import TopCollectors from './TopCollectors';

const TrackData = () => {
  return (
    <div className='mosh-container-normal'>
      <div className='flex flex-row -mx-[15px] overflow-hidden'>
        <div className='basis-1/3 p-[15px]'>
          <StreamStats />
        </div>
        <div className='basis-1/3 p-[15px]'>
          <WhatIncluded />
        </div>
        <div className='basis-1/3 p-[15px]'>
          <TopCollectors />
        </div>
      </div>
    </div>
  );
};

export default TrackData;
