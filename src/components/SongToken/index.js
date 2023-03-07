import React from 'react';
import SongTokenHeader from './SongTokenHeader';
import SongTokenActivity from './SongTokenActivity';
import TrackData from '../trackData';
import TrackOverview from '../trackOverview';
import OffterTable from './OffterTable';

const SongToken = () => {
  return (
    <div className=' relative z-[1] overflow-x-hidden'>
      <div
        aria-hidden='true'
        className='absolute z-0 transform rounded-full opacity-50 -left-[400px] blur-lg -top-20'
        style={{
          width: '917px',
          height: '917px',
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(248, 78, 36, 0.501961) 0%, rgba(17, 11, 29, 0.0001) 100%)',
        }}
      ></div>
      <SongTokenHeader />
      <div className='block mb-8 mosh-container-normal lg:hidden'>
        <OffterTable />
      </div>
      <SongTokenActivity />
      <TrackData />
      <TrackOverview />
    </div>
  );
};

export default SongToken;
