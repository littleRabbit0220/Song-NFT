import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const PriceRangeSlider = () => {
  const [priceRange, setPriceRange] = useState([10, 90]);

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  return (
    <ReactSlider
      className='w-full pt-2.5 pb-3.5 rounded-full select-none'
      thumbClassName='bg-white rounded-full text-[10px] h-[26px] w-[26px] rounded-full flex items-center justify-center text-MoshDark-6 transform -translate-y-1/2 font-bold font-open-sans'
      trackClassName='h-1 bg-primary'
      defaultValue={priceRange}
      ariaLabel={['Lower thumb', 'Upper thumb']}
      ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      pearling
      onChange={handlePriceChange}
      minDistance={10}
    />
  );
};
export default PriceRangeSlider;
