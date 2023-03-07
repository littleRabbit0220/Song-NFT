import TrackData from '../trackData';
import OverviewHead from '../trackOverview/OverviewHead';
import SongActivity from './SongActivity';
import SongHeader from './SongHeader';
import SongOverview from './SongOverview';

export const Song = () => {
  return (
    <div className=' relative z-[1]'>
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
      <div className='py-[75px]'>
        <SongHeader />
      </div>
      <SongActivity />
      <div className='mosh-container-normal'>
        <SongOverview />
      </div>
      <TrackData />
    </div>
  );
};
