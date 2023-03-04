import React from 'react';
import ExploreSong from '../ExploreCollection/ExploreSong';

const OwnedTapesList = () => {
  const song = {
    title: 'Bad Apples',
    date: '2023',
    count: '20',
    duration: '57 min 45 sec',
    type: 'Tape',
  };
  return (
    <div className='pt-4 mosh-container-normal z-[1] relative'>
      <div className='flex flex-wrap -mx-2 -mt-2 sm:-mx-4 sm:-mt-5'>
        {[...'.....'].map((_, i) => (
          <div
            key={i}
            className='p-2 sm:p-4 basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5'
          >
            <ExploreSong song={song} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnedTapesList;
