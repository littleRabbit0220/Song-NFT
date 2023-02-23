import MoshMIcon from '@/icons/MoshMIcon';

const TrackAvatar = () => {
  return (
    <div className='flex justify-center pt-16 overflow-hidden md:justify-start'>
      <div className='relative inline-block'>
        <img src='assets/img/tracks/vol2-flow-futurama.png' alt='' />
        <button className='hover:bg-[#E7E7E8] absolute right-6 top-10 font-suisse-intl text-[#030205] font-bold bg-white flex items-center rounded-full py-1.5 px-3.5 '>
          <svg
            className='mr-2'
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
        <button className='hover:bg-[#E7E7E8] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-suisse-intl text-[#030205] font-bold bg-white flex items-center rounded-full py-1 sm:py-1.5 px-3.5 text-xl sm:text-[28px] w-[200px] sm:w-[270px]'>
          <MoshMIcon className='w-10 sm:w-auto' />
          <span className='pl-2'>Track Pack</span>
        </button>
      </div>
    </div>
  );
};

export default TrackAvatar;
