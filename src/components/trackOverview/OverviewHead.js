import MoshMIcon from '@/icons/MoshMIcon';
import TrackAvatar from '../trackPack/TrackAvatar';
import Image from 'next/image';

const OverviewHead = () => {
  return (
    <div className='mt-20 bg-white rounded-md mb-[30px] max-w-md md:max-w-full mx-auto md:mx-0'>
      <div className='flex flex-col pb-8 md:items-end md:flex-row'>
        <div className='flex justify-center -mt-8 overflow-hidden md:pl-6 md:justify-start'>
          <div className='relative inline-block'>
            <Image
              height={127}
              width={216}
              className='w-[216px] max-w-full'
              src='/assets/img/tracks/vol2-flow-futurama.png'
              alt=''
            />
            <button className='hover:bg-MoshLight-1 absolute right-2.5 top-5 font-suisse-intl text-[#030205] font-bold bg-white flex items-center rounded-full py-1.5 px-3 text-[10px]'>
              <svg
                className='mr-1.5 w-3 h-3'
                width='15'
                height='19'
                viewBox='0 0 15 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.7869 10.0916L1.56856 18.2371C1.48176 18.2948 1.38092 18.328 1.27678 18.333C1.17264 18.3379 1.0691 18.3146 0.977184 18.2654C0.885269 18.2162 0.808422 18.1429 0.75483 18.0535C0.701237 17.9641 0.672905 17.8618 0.672852 17.7575V1.46647C0.672905 1.36221 0.701237 1.25992 0.75483 1.17049C0.808422 1.08106 0.885269 1.00784 0.977184 0.958627C1.0691 0.909416 1.17264 0.886058 1.27678 0.891039C1.38092 0.896021 1.48176 0.929157 1.56856 0.986917L13.7869 9.13244C13.8658 9.18508 13.9305 9.25639 13.9753 9.34005C14.0201 9.42371 14.0435 9.51712 14.0435 9.612C14.0435 9.70688 14.0201 9.80029 13.9753 9.88395C13.9305 9.96761 13.8658 10.0389 13.7869 10.0916Z'
                  fill='#030205'
                />
              </svg>
              Play Song
            </button>
            {/* track pack */}
            <button className='hover:bg-MoshLight-1 md:mt-0 mt-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-suisse-intl text-[#030205] font-bold bg-white flex items-center rounded-full py-1.5   px-1.5 text-lg sm:text-base w-[200px] sm:w-[175px] '>
              <MoshMIcon className='w-10 h-10 ' />
              <span className='pl-2 font-bold font-suisse-intl'>Mix Tapes</span>
            </button>
          </div>
        </div>

        <div className='pl-4 pr-4 mt-6 md:pb-3 md:pl-6 text-MoshDark-7 md:pr-0 md:mt-0'>
          <p className='mb-3.5 text-sm font-bold font-aril flex items-center'>
            Season #3
          </p>
          <h2 className='text-3xl sm:text-[42px] font-bold  !leading-[110%] flex items-center'>
            Bad Apples
          </h2>

          <div className='flex flex-wrap space-x-2 text-sm font-open-sans'>
            <span className='flex mt-3.5 '>
              <MoshMIcon className='w-6 h-6' />
              <span className='font-black pl-1.5 flex items-center'>Mosh</span>
            </span>
            <span className='mt-3.5 flex items-center'>2023</span>
            <span className='mt-3.5 flex items-center'>
              • 20 songs, 57 min 11 sec
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewHead;
