import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import StreamChart from './StreamChart';

const StreamStats = () => {
  const [activeButton, setActiveButton] = useState('1M');

  const handleButtonClick = (button) => {
    setActiveButton(button);
    // Handle logic for fetching and displaying stream stats based on the selected time period
  };

  return (
    <div className='h-full overflow-hidden bg-white rounded-md shadow-1'>
      <div className='flex items-center justify-between mb-4 px-7 pt-7'>
        <div className='flex space-x-4 text-sm '>
          <button
            className={`bg-MoshDark-7 text-MoshDark-7 bg-opacity-5  py-1 px-4 hover:bg-opacity-20 focus:ring-primary font-semibold font-open-sans ${
              activeButton === '1M'
                ? ' text-white hover:bg-opacity-95 !bg-MoshDark-7'
                : ''
            }`}
            onClick={() => handleButtonClick('1M')}
          >
            1M
          </button>
          <button
            className={`bg-MoshDark-7 text-MoshDark-7 bg-opacity-5  py-1 px-4 hover:bg-opacity-20 focus:ring-primary font-semibold font-open-sans ${
              activeButton === '2M'
                ? ' text-white hover:bg-opacity-95 !bg-MoshDark-7'
                : ''
            }`}
            onClick={() => handleButtonClick('2M')}
          >
            2M
          </button>
          <button
            className={`bg-MoshDark-7 text-MoshDark-7 bg-opacity-5  py-1 px-4 hover:bg-opacity-20 focus:ring-primary font-semibold font-open-sans ${
              activeButton === '1Y'
                ? ' text-white hover:bg-opacity-95 !bg-MoshDark-7'
                : ''
            }`}
            onClick={() => handleButtonClick('1Y')}
          >
            1Y
          </button>
          <button
            className={`bg-MoshDark-7 text-MoshDark-7 bg-opacity-5  py-1 px-4 hover:bg-opacity-20 focus:ring-primary font-semibold font-open-sans ${
              activeButton === 'ALL'
                ? ' text-white hover:bg-opacity-95 !bg-MoshDark-7'
                : ''
            }`}
            onClick={() => handleButtonClick('ALL')}
          >
            ALL
          </button>
        </div>
      </div>
      <h2 className=' font-semibold mt-[22px] text-MoshDark-7 text-[22px] px-7'>
        Stream
      </h2>
      <div className='flex justify-between w-full mt-4 max-w-[262px] px-7'>
        <div>
          <span className=' font-semibold mt-[22px] text-MoshDark-7 text-[22px] '>
            37, 427
          </span>
          <span className='block text-MoshDark-7 font-open-sans'>
            Last 30 days
          </span>
        </div>
        <div className=' bg-[#EBEBEB] w-[1px] max-h-full h-[55px]'></div>
        <div>
          <span className=' font-semibold mt-[22px] text-MoshDark-7 text-[22px] '>
            1 Month
          </span>
          <span className='block text-MoshDark-7 font-open-sans'>Released</span>
        </div>
      </div>
      <StreamChart />
    </div>
  );
};
export default StreamStats;
