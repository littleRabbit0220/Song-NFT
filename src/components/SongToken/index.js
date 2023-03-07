import React from 'react';
import SongTokenHeader from './SongTokenHeader';
import SongTokenActivity from './SongTokenActivity';
import TrackData from '../trackData';
import TrackOverview from '../trackOverview';
import OffterTable from './OffterTable';

const SongToken = () => {
  return (
    <div>
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
