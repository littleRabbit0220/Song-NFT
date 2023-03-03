import React from 'react';
import ExploreHeader from './ExploreHeader';
import ExploreSidebar from './ExploreSidebar';
import ExploreList from './ExploreList';

const ExploreCollection = () => {
  return (
    <div className='relative overflow-hidden'>
      <div
        aria-hidden='true'
        className='absolute z-0 transform rounded-full opacity-50 -left-[400px] blur-lg top-0'
        style={{
          width: '917px',
          height: '917px',
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(248, 78, 36, 0.501961) 0%, rgba(17, 11, 29, 0.0001) 100%)',
        }}
      ></div>
      <div className='mosh-container-normal z-[1] relative'>
        <div className='pt-10 pb-8 sm:text-center md:pb-16 md:pt-24'>
          <h2 className='text-4xl font-bold lg:text-[42px] !leading-[110%]'>
            Explore Collection
          </h2>
          <div className='max-w-[700px] mx-auto  font-open-sans mt-6  sm:block hidden'>
            <p className='!leading-relaxed '>
              Your favorite Latin artists including Canserbero, Lochard Remy,
              Gilberto Santa Rosa and Orchestre Septentrional. Earn streaming
              revenue from every song in this collection.
            </p>
          </div>
        </div>
        <ExploreHeader />
        <div className='flex flex-wrap pt-5 sm:pt-10'>
          <div className='sm:w-[270px] sm:basis-[270px] md:pr-5 md:block hidden'>
            <ExploreSidebar />
          </div>
          <div className='md:w-[calc(100%_-_270px)] md:pl-4'>
            <ExploreList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCollection;
