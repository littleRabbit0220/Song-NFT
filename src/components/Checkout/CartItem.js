import MoshMIcon from '@/icons/MoshMIcon';
import Image from 'next/image';
import React from 'react';
import { FaPlay } from 'react-icons/fa';

const CartItem = () => {
  return (
    <div>
      <div className='relative inline-block mb-6'>
        <Image
          height={260}
          width={260}
          className='w-[260px] max-w-full'
          src='/assets/img/tracks/vol2-flow-futurama.png'
          alt='vol2'
        />

        {/* track pack */}
        <button className='hover:bg-MoshLight-1 md:mt-0 mt-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-suisse-intl text-[#030205] font-bold bg-white flex items-center rounded-full py-1.5   px-1.5 text-lg sm:text-base w-[200px] sm:w-[175px] '>
          <MoshMIcon className='w-10 h-10 ' />
          <span className='pl-2 font-bold font-suisse-intl'>Track Pack</span>
        </button>
      </div>
      <h2 className='text-2xl font-bold '>Bad Apples</h2>
      <div className='my-3.5'>
        <span className='bg-white text-[#6E232E] uppercase font-open-sans text-xs rounded font-medium px-2.5 py-1 tracking-widest'>
          Price
        </span>
        <span className='ml-2 text-sm font-aril'> • $100 USD</span>
      </div>
      <p className='text-sm font-open-sans '>
        Track Available
        <strong className='pl-2'>20</strong>
      </p>
    </div>
  );
};

export default CartItem;
