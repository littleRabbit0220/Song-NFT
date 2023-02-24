import Image from 'next/image';
import React from 'react';

const Artists = () => {
  return (
    <div>
      <h2 className='text-[22px] font-semibold mb-3.5'>
        Artist in This Trackpad
      </h2>
      <div className='flex flex-wrap overflow-hidden -mx-[7.5px]'>
        <div className='basis-full sm:basis-1/2 md:basis-1/3  lg:basis-1/4 p-[7.5px] '>
          <div className='bg-white rounded-md pl-2.5 pt-2.5 flex pb-[18px]'>
            <div>
              <Image
                height={104}
                width={112}
                src='/assets/img/artists/anuel-aa.png'
              />
            </div>
            <div className='pl-4 mt-4 text-MoshDark-7'>
              <span className='block text-sm font-open-sans mb-1.5'>
                Puerto Rican Rapper
              </span>
              <span className='block font-bold'>Anuel AA</span>
            </div>
          </div>
        </div>
        <div className='basis-full sm:basis-1/2 md:basis-1/3  lg:basis-1/4 p-[7.5px] '>
          <div className='bg-white rounded-md pl-2.5 pt-2.5 flex pb-[18px]'>
            <div>
              <Image
                height={104}
                width={112}
                src='/assets/img/artists/ansy-derose.png'
              />
            </div>
            <div className='pl-4 mt-4 text-MoshDark-7'>
              <span className='block text-sm font-open-sans mb-1.5'>
                Puerto Rican Rapper
              </span>
              <span className='block font-bold'>Ansy Derose</span>
            </div>
          </div>
        </div>
        <div className='basis-full sm:basis-1/2 md:basis-1/3  lg:basis-1/4 p-[7.5px] '>
          <div className='bg-white rounded-md pl-2.5 pt-2.5 flex pb-[18px]'>
            <div>
              <Image
                height={104}
                width={112}
                src='/assets/img/artists/bacanos.png'
              />
            </div>
            <div className='pl-4 mt-4 text-MoshDark-7'>
              <span className='block text-sm font-open-sans mb-1.5'>
                Puerto Rican Rapper
              </span>
              <span className='block font-bold'>Bacanos</span>
            </div>
          </div>
        </div>
        <div className='basis-full sm:basis-1/2 md:basis-1/3  lg:basis-1/4 p-[7.5px] '>
          <div className='bg-white rounded-md pl-2.5 pt-2.5 flex pb-[18px]'>
            <div>
              <Image
                height={104}
                width={112}
                src='/assets/img/artists/canserbero.png'
              />
            </div>
            <div className='pl-4 mt-4 text-MoshDark-7'>
              <span className='block text-sm font-open-sans mb-1.5'>
                Puerto Rican Rapper
              </span>
              <span className='block font-bold'>Canserbero</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
