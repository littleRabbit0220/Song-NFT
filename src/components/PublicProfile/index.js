import MixTapeListHeader from './MixTapeListHeader';
import OwnedSongsList from './OwnedSongsList';
import OwnedTapesList from './OwnedTapesList';
import PublicProfileCard from './PublicProfileCard';
import SongsListHeader from './SongsListHeader';

const PublicProfile = () => {
  return (
    <div className='relative z-[1] overflow-x-hidden'>
      <PublicProfileCard />
      <SongsListHeader />
      <OwnedSongsList />
      <MixTapeListHeader />
      <OwnedTapesList />

      <div
        aria-hidden='true'
        className='absolute z-0 transform rounded-full opacity-60 -left-[380px] blur-lg -top-5'
        style={{
          width: '917px',
          height: '917px',
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(248, 78, 36, 0.501961) 0%, rgba(17, 11, 29, 0.0001) 100%)',
        }}
      ></div>
      <div
        aria-hidden='true'
        className='absolute z-0  rounded-full opacity-50 -right-[200px] blur-lg top-1/3  transform rotate-[22deg]'
        style={{
          width: '532px',
          height: '857px',
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(248, 78, 36, 0.501961) 0%, rgba(17, 11, 29, 0.0001) 100%)',
        }}
      ></div>
    </div>
  );
};

export default PublicProfile;
