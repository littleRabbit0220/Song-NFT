import { useState } from 'react';
import StreamChart from './StreamChart';

const StreamStats = () => {
  const [activeButton, setActiveButton] = useState('1M');
  const [chartData, setChartData] = useState({
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Stream',
        data: [10, 20, 30, 40],
        fill: {
          target: 'origin',
          above: 'rgba(255, 90, 0, 0.2)',
        },
        borderColor: 'rgba(255, 90, 0)',
        tension: 0.4,
      },
    ],
  });

  const handleButtonClick = (button) => {
    setActiveButton(button);
    // Handle logic for fetching and displaying stream stats based on the selected time period
    // Set chartData state variable with the appropriate data for the selected time period
    switch (button) {
      case '1M':
        setChartData({
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              label: 'Stream',
              data: [10, 20, 30, 40],
              fill: {
                target: 'origin',
                above: 'rgba(255, 90, 0, 0.2)',
              },
              borderColor: 'rgba(255, 90, 0)',
              tension: 0.4,
            },
          ],
        });
        break;
      case '3M':
        setChartData({
          labels: ['Month 1', 'Month 2', 'Month 3'],
          datasets: [
            {
              label: 'Stream',
              data: [50, 70, 90],
              fill: {
                target: 'origin',
                above: 'rgba(255, 90, 0, 0.2)',
              },
              borderColor: 'rgba(255, 90, 0)',
              tension: 0.4,
            },
          ],
        });
        break;
      case '6M':
        setChartData({
          labels: [
            'Month 1',
            'Month 2',
            'Month 3',
            'Month 4',
            'Month 5',
            'Month 6',
          ],
          datasets: [
            {
              label: 'Stream',
              data: [50, 40, 60, 80, 40, 30],
              fill: {
                target: 'origin',
                above: 'rgba(255, 90, 0, 0.2)',
              },
              borderColor: 'rgba(255, 90, 0)',
              tension: 0.4,
            },
          ],
        });
        break;
      case '1Y':
        setChartData({
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [
            {
              label: 'Stream',
              data: [400, 150, 200, 250],
              fill: {
                target: 'origin',
                above: 'rgba(255, 90, 0, 0.2)',
              },
              borderColor: 'rgba(255, 90, 0)',
              tension: 0.4,
            },
          ],
        });
        break;
      case 'ALL':
        setChartData({
          labels: ['2019', '2020', '2021', '2022', '2023'],
          datasets: [
            {
              label: 'Stream',
              data: [1125, 2100, 3210, 2520, 5550],
              fill: {
                target: 'origin',
                above: 'rgba(255, 90, 0, 0.2)',
              },
              borderColor: 'rgba(255, 90, 0)',
              tension: 0.4,
            },
          ],
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className='w-full h-full overflow-hidden bg-white rounded-md shadow-1'>
      <div className='flex items-center justify-between px-5 pt-4 mb-4 sm:px-7'>
        <div className='flex flex-wrap space-x-2.5 text-sm sm:space-x-4 sm:flex-nowrap '>
          <button
            className={`bg-MoshDark-7 text-MoshDark-7 bg-opacity-5 mt-3  py-1 px-4 hover:bg-opacity-20 focus:ring-primary font-semibold font-open-sans ${
              activeButton === '1M'
                ? ' text-white hover:bg-opacity-95 !bg-MoshDark-7'
                : ''
            }`}
            onClick={() => handleButtonClick('1M')}
          >
            1M
          </button>
          <button
            className={`bg-MoshDark-7 text-MoshDark-7 bg-opacity-5 mt-3  py-1 px-4 hover:bg-opacity-20 focus:ring-primary font-semibold font-open-sans ${
              activeButton === '6M'
                ? ' text-white hover:bg-opacity-95 !bg-MoshDark-7'
                : ''
            }`}
            onClick={() => handleButtonClick('6M')}
          >
            6M
          </button>
          <button
            className={`bg-MoshDark-7 text-MoshDark-7 bg-opacity-5 mt-3  py-1 px-4 hover:bg-opacity-20 focus:ring-primary font-semibold font-open-sans ${
              activeButton === '1Y'
                ? ' text-white hover:bg-opacity-95 !bg-MoshDark-7'
                : ''
            }`}
            onClick={() => handleButtonClick('1Y')}
          >
            1Y
          </button>
          <button
            className={`bg-MoshDark-7 text-MoshDark-7 bg-opacity-5 mt-3  py-1 px-4 hover:bg-opacity-20 focus:ring-primary font-semibold font-open-sans ${
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
      <div className='flex justify-between w-full mt-4 max-w-[400px] sm:max-w-[304px] px-7'>
        <div>
          <span className=' font-semibold mt-[22px] text-MoshDark-7 text-[22px] '>
            {chartData?.datasets[0]?.data
              ?.reduce((acc, cur) => acc + cur, 0)
              ?.toLocaleString()}
          </span>
          <span className='block text-MoshDark-7 font-open-sans'>
            {activeButton === '1M'
              ? 'Last 30 days'
              : activeButton === '6M'
              ? 'Last 6 months'
              : activeButton === '1Y'
              ? 'Last 1 Year'
              : 'All time'}
          </span>
        </div>
        <div className=' bg-[#EBEBEB] w-[1px] max-h-full h-[55px]'></div>
        <div>
          <span className=' font-semibold mt-[22px] text-MoshDark-7 text-[22px] '>
            {activeButton === '1M'
              ? '1 Month'
              : activeButton === '6M'
              ? '6 Months'
              : activeButton === '1Y'
              ? '1 Year'
              : 'All time'}
          </span>
          <span className='block text-MoshDark-7 font-open-sans'>Released</span>
        </div>
      </div>
      <StreamChart period={activeButton} chartData={chartData} />
    </div>
  );
};
export default StreamStats;
