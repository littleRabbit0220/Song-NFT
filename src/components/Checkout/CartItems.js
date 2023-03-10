import React from 'react';
import CartItem from './CartItem';

const CartItems = () => {
  return (
    <div className='flex flex-wrap -mx-3.5'>
      {[1, 2, 3].map((_, i) => (
        <div key={i} className='px-3.5 py-5 basis-full md:basis-1/2'>
          <CartItem />
        </div>
      ))}
    </div>
  );
};

export default CartItems;
