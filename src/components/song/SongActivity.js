import OfferHandIcon from '@/icons/OfferHandIcon';
import React from 'react';

const SongActivity = () => {
  return (
    <>
      <div className='mosh-container-normal'>
        <h2 className='uppercase text-MoshLight-1'>Item activity</h2>
        <div className='overflow-auto custom-scrollbar pb-2.5  relative z-[1] '>
          <div className='min-w-[760px] lead-board-list mt-4  '>
            <div className='flex px-4 py-3 mb-3 text-sm text-white bg-white rounded-md md:px-5 lg:px-7 font-aril bg-opacity-10 '>
              <div className='basis-[19%] md:basis-[19%]'>Price</div>
              <div className='basis-[19%] md:basis-[19%]'>Price</div>
              <div className='basis-[19%] md:basis-[20%]'>Expiration</div>
              <div className='basis-[19%] md:basis-[20%]'>From</div>
              <div className='flex-grow basis-[24%] md:basis-[22%] text-right'>
                Action
              </div>
            </div>
            {[...'aaaaa'].map((ar, index) => (
              <div
                key={index}
                className={` flex py-2.5 leading-normal text-sm font-open-sans px-4 md:px-5 lg:px-7  mb-3 rounded text-[#E7E7E8] `}
              >
                <div className='basis-[19%] md:basis-[19%] flex items-center'>
                  <span className='pr-1'>
                    <OfferHandIcon />
                  </span>
                  Offer
                </div>
                <div className='basis-[19%] md:basis-[19%]'>14.9 Matic</div>
                <div className='basis-[19%] md:basis-[20%]'>in 3 minutes</div>
                <div className='basis-[19%] md:basis-[20%]'>
                  <span className='text-primary'>siouxzzy_vault</span>
                </div>
                <div className='flex -mx-2 justify-end basis-[24%] md:basis-[22%] text-[#7D7A84] ml-auto max-w-[210px]'>
                  <span className='px-2 basis-1/2'>
                    <button className='block w-full py-2 text-xs truncate transition duration-200 bg-white rounded-md md:text-sm font-aril text-MoshDark-7 hover:bg-opacity-90'>
                      Make Offer
                    </button>
                  </span>
                  <span className='px-2 basis-1/2'>
                    <button className='block w-full py-2 text-xs text-white truncate transition duration-200 rounded-md md:text-sm bg-primary font-aril hover:bg-opacity-90'>
                      Buy Now
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SongActivity;
