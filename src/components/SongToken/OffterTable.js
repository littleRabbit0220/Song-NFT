import MaticIcon from '@/icons/MaticIcon';
import React from 'react';

const OffterTable = () => {
  return (
    <>
      <h2 className='mt-8 text-base font-medium tracking-widest uppercase font-open-sans'>
        Offer
      </h2>
      <div className='overflow-auto custom-scrollbar pb-2.5  relative z-[1] !leading-none'>
        <div className='min-w-[560px] lg:w-auto mt-4 lead-board-list'>
          <div className='flex px-4 py-3 mb-3 text-sm text-white bg-white rounded-md font-aril bg-opacity-10 '>
            <div className='basis-[17%] md:basis-[17%]'>Price</div>
            <div className='basis-[19%] md:basis-[19%]'>USD Price</div>
            <div className='basis-[19%] md:basis-[22%]'>Floor Difference</div>
            <div className='basis-[19%] md:basis-[20%] text-center'>
              Expiration
            </div>
            <div className='flex-grow basis-[24%] md:basis-[22%] text-center'>
              From
            </div>
          </div>
          {[...'aaaaa'].map((ar, index) => (
            <div
              key={index}
              className={` flex py-2.5 leading-normal text-sm font-open-sans px-4   mb-3 rounded text-[#E7E7E8] `}
            >
              <div className='basis-[17%] md:basis-[17%] flex items-center'>
                <span className='pr-1'>
                  <MaticIcon className='w-4 h-4' />
                </span>
                14.9
              </div>
              <div className='basis-[19%] md:basis-[19%]'>14.9 Matic</div>
              <div className='basis-[19%] md:basis-[22%]'>in 3 minutes</div>
              <div className='basis-[19%] md:basis-[20%]'>siouxzzy_vault</div>
              <div className='flex -mx-2 justify-end basis-[24%] md:basis-[20%] text-primary ml-auto max-w-[210px]'>
                andrewsaladino
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OffterTable;
