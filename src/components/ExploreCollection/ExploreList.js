import ExploreSong from './ExploreSong';

const ExploreList = () => {
  return (
    <div className='flex flex-wrap -mx-2 -mt-2 sm:-mx-4 sm:-mt-5'>
      {[...'............'].map((_, i) => (
        <div
          key={i}
          className='p-2 sm:p-4 basis-1/2 sm:basis-1/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4'
        >
          <ExploreSong song={i} />
        </div>
      ))}
    </div>
  );
};

export default ExploreList;
