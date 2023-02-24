import CollectorsList from './CollectorsList';

const TopCollectors = () => {
  return (
    <div className='h-full overflow-hidden bg-white rounded-md px-7 shadow-1'>
      <div className='flex items-center mt-[22px] justify-between'>
        <h2 className=' font-semibold  text-MoshDark-7 text-[22px] '>
          Top Collectors
        </h2>
        <span className='opacity-50 text-MoshDark-7'>Purchased</span>
      </div>
      <CollectorsList />
    </div>
  );
};

export default TopCollectors;
