import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

function ProductQty() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className='flex items-center mt-5'>
      <button
        className='flex items-center justify-center w-10 h-10 bg-white rounded text-MoshDark-7 hover:bg-MoshLight-1'
        onClick={handleDecrease}
      >
        <FaMinus />
      </button>
      <input
        type='number'
        className='w-10 text-center bg-transparent border-0 focus:outline-none text-MoshLight-2 appear-none'
        value={quantity}
        onChange={(e) => handleChange(e)}
      />
      <button
        className='flex items-center justify-center w-10 h-10 bg-white rounded text-MoshDark-7 hover:bg-MoshLight-1'
        onClick={handleIncrease}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default ProductQty;
