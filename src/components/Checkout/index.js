import React from 'react';
import CartItem from './CartItem';
import CartItems from './CartItems';
import Payment from './Payment';

export default function Checkout() {
  return (
    <div>
      <div className='max-w-[1300px] px-5 mx-auto py-20'>
        <div className='flex flex-col-reverse justify-between md:flex-row'>
          <div className='mt-10 md:mt-0 md:basis-1/2 md:pr-10'>
            <h2 className='text-3xl lg:text-[42px] font-bold mb-3'>
              Checkout Your Trackpad
            </h2>
            <CartItems />
          </div>
          <div className='max-w-[528px] basis-1/2'>
            <h2 className='text-3xl lg:text-[42px] font-bold pb-6 block'>
              Payment
            </h2>
            <Payment />
          </div>
        </div>
      </div>
    </div>
  );
}
