import Artists from './Artists';
import OverviewHead from './OverviewHead';
import TracksList from './TracksList';

const TrackOverview = () => {
  return (
    <div className=' mosh-container-normal'>
      <OverviewHead />
      {/* <TracksList /> */}
      <Artists />
    </div>
  );
};

export default TrackOverview;
