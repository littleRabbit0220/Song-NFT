import SaleIcon from '@/icons/SaleIcon';
import TrasnforIcon from '@/icons/TrasnforIcon';
import React from 'react';

const SongTokenActivity = () => {
  return (
    <>
      <div className='mosh-container-normal '>
        <h2 className='tracking-widest uppercase text-MoshLight-1'>
          Item activity
        </h2>
      </div>
      <div className='mosh-container-normal'>
        <div className='overflow-auto custom-scrollbar  relative z-[1]  mb-8'>
          <div className='min-w-[760px] lead-board-list mt-4  '>
            <div className='flex px-4 py-3 mb-3 text-sm text-white bg-white rounded-md md:px-5 lg:px-7 font-aril bg-opacity-10 '>
              <div className='basis-[20%] md:basis-[20%]'>Price</div>
              <div className='basis-[20%] md:basis-[20%]'>Price</div>
              <div className='basis-[21%] md:basis-[21%]'>From</div>
              <div className='basis-[21%] md:basis-[21%]'>To</div>
              <div className='flex-grow basis-[18%] md:basis-[18%] text-right'>
                Date
              </div>
            </div>

            <div
              className={` flex py-2.5 leading-normal text-sm font-open-sans px-4 md:px-5 lg:px-7  mb-3 rounded text-[#E7E7E8] `}
            >
              <div className='basis-[20%] md:basis-[20%] flex items-center'>
                <span className='pr-1'>
                  <SaleIcon />
                </span>
                Sale
              </div>
              <div className='basis-[20%] md:basis-[20%]'>14.9 Matic</div>
              <div className='basis-[21%] md:basis-[21%]'>in 3 minutes</div>
              <div className='basis-[21%] md:basis-[21%]'>
                <span className='text-primary'>siouxzzy_vault</span>
              </div>
              <div className='text-right basis-[18%] md:basis-[18%] text-MoshLight-3 ml-auto '>
                4h ago
              </div>
            </div>

            <div
              className={` flex py-2.5 leading-normal text-sm font-open-sans px-4 md:px-5 lg:px-7  mb-3 rounded text-[#E7E7E8] `}
            >
              <div className='basis-[20%] md:basis-[20%] flex items-center'>
                <span className='pr-1'>
                  <TrasnforIcon />
                </span>
                Transfer
              </div>
              <div className='basis-[20%] md:basis-[20%]'>14.9 Matic</div>
              <div className='basis-[21%] md:basis-[21%]'>in 3 minutes</div>
              <div className='basis-[21%] md:basis-[21%]'>
                <span className='text-primary'>siouxzzy_vault</span>
              </div>
              <div className='text-right basis-[18%] md:basis-[18%] text-MoshLight-3 ml-auto '>
                4h ago
              </div>
            </div>

            <div
              className={` flex py-2.5 leading-normal text-sm font-open-sans px-4 md:px-5 lg:px-7  mb-3 rounded text-[#E7E7E8] `}
            >
              <div className='basis-[20%] md:basis-[20%] flex items-center'>
                <span className='pr-1'>
                  <SaleIcon />
                </span>
                Sale
              </div>
              <div className='basis-[20%] md:basis-[20%]'>14.9 Matic</div>
              <div className='basis-[21%] md:basis-[21%]'>in 3 minutes</div>
              <div className='basis-[21%] md:basis-[21%]'>
                <span className='text-primary'>siouxzzy_vault</span>
              </div>
              <div className='text-right basis-[18%] md:basis-[18%] text-MoshLight-3 ml-auto '>
                4h ago
              </div>
            </div>

            <div
              className={` flex py-2.5 leading-normal text-sm font-open-sans px-4 md:px-5 lg:px-7  mb-3 rounded text-[#E7E7E8] `}
            >
              <div className='basis-[20%] md:basis-[20%] flex items-center'>
                <span className='pr-1'>
                  <TrasnforIcon />
                </span>
                Transfer
              </div>
              <div className='basis-[20%] md:basis-[20%]'>14.9 Matic</div>
              <div className='basis-[21%] md:basis-[21%]'>in 3 minutes</div>
              <div className='basis-[21%] md:basis-[21%]'>
                <span className='text-primary'>siouxzzy_vault</span>
              </div>
              <div className='text-right basis-[18%] md:basis-[18%] text-MoshLight-3 ml-auto '>
                4h ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongTokenActivity;
