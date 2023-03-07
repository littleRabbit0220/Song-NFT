import MeticSolidIcon from '@/icons/MeticSolidIcon';
import MoshMIcon from '@/icons/MoshMIcon';
import MusicTuneIcon from '@/icons/MusicTuneIcon';
import PlayListIcon from '@/icons/PlayListIcon';
import ShareIcon from '@/icons/ShareIcon';
import SpotifyIcon from '@/icons/SpotifyIcon';
import Image from 'next/image';
import { FaEllipsisH } from 'react-icons/fa';

const SongHeader = () => {
  return (
    <div className=' mosh-container-normal relative z-[1]'>
      <div className='flex flex-wrap justify-between md:flex-nowrap'>
        <div className='relative max-w-[415px]'>
          <Image
            src={`/assets/img/song.png`} // specify the image path
            alt='Alternative text' // add alternative text for accessibility
            width={400} // set the width of the image
            height={450} // set the height of the image
          />
          <button className='absolute px-4 py-0.5 text-2xl text-black bg-white rounded-full top-8 right-3 focus:text-primary hover:bg-opacity-90'>
            <FaEllipsisH />
          </button>
          <button className='hover:bg-MoshLight-1 md:mt-0 mt-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[#030205] font-bold bg-white flex items-center rounded-full py-2   pl-2.5 text-lg sm:text-base min-w-max '>
            <MoshMIcon className='' />
            <span className='pl-2.5 pr-6 text-[22px] font-black font-aril'>
              Song
            </span>
          </button>
        </div>

        <div className='max-w-xl pt-5 md:pl-5 basis-full md:basis-2/3 md:pt-0'>
          <div className='flex items-center'>
            <h2 className='!leading-[110%] text-3xl sm:text-[42px] font-bold'>
              Song Name
            </h2>
            <button className='ml-2.5'>
              <ShareIcon />
            </button>
          </div>
          <p className='mt-2 mb-5 font-bold'>Artists Name</p>

          <small className='font-normal tracking-widest uppercase opacity-50 font-xs'>
            mix tape
          </small>
          <p className='text-[26px] font-medium !leading-none'>Season #1</p>

          <small className='block mt-5 font-normal tracking-widest uppercase opacity-50 font-xs'>
            listen this song on
          </small>
          <div className='flex flex-wrap mb-5'>
            <button className='mt-2 bg-gradient-to-b px-3 sm:px-5 from-[#FD355A] to-[#FD5163] flex items-center justify-center  h-10 sm:h-10 rounded-[5px]'>
              <MusicTuneIcon className=' h-[22px] w-[22px]  sm:w-auto mr-2 sm:mr-2.5' />
              Listen
            </button>
            <button className='flex mt-2 items-center justify-center  h-10 sm:h-10 bg-[#2EBD59] rounded-[5px] ml-2.5 px-3 sm:px-5 font-open-sans text-sm'>
              <SpotifyIcon className=' h-[22px] w-[22px]  sm:w-auto mr-2 sm:mr-2.5' />
              Listen
            </button>
            <button className='text-MoshDark-7 mt-2 flex items-center justify-center  h-10 sm:h-10 bg-white rounded-[5px] ml-2.5 px-3 sm:px-5 font-open-sans text-sm'>
              <PlayListIcon className=' h-[22px] w-[22px]  sm:w-auto mr-2 sm:mr-2.5 text-MoshDark-7' />
              Listen
            </button>
          </div>

          <small className='font-normal tracking-widest uppercase opacity-50 font-xs '>
            Lowest price
          </small>
          <p className='text-[26px] font-medium !leading-none flex items-center mt-2.5'>
            <span className='mr-4 pr-0.5'>$100 USD</span>
            <span className='flex items-center'>
              <MeticSolidIcon className='mr-2.5' />
              20 MATIC
            </span>
          </p>

          <div className='flex flex-col w-full sm:space-x-3 sm:flex-row mt-7'>
            <button className='py-3 bg-white rounded-md font-aril text-MoshDark-7 min-w-[60%]  hover:bg-opacity-90 transition duration-200'>
              Make an Offer
            </button>
            <button className='py-3 mt-3 text-white transition duration-200 rounded-md sm:mt-0 bg-primary font-aril basis-2/3 hover:bg-opacity-90'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongHeader;
