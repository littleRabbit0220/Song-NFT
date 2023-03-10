import React from 'react';
import CartItem from './CartItem';

export default function Checkout() {
  return (
    <div>
      <div className='mosh-container-normal'>
        <div className='flex'>
          <div className=''>
            <h2 className='text-[42px] font-bold '>Checkout Your Trackpad</h2>
            <CartItem />
          </div>
        </div>
      </div>
    </div>
  );
}
