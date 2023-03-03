import MoshMIcon from '@/icons/MoshMIcon';
import Image from 'next/image';
import { FaEllipsisH } from 'react-icons/fa';

const ExploreSong = ({ i }) => {
  return (
    <div className='pt-1 song'>
      <div className='relative'>
        <Image
          src='/assets/img/tracks/song.png' // specify the image path
          alt='Alternative text' // add alternative text for accessibility
          width={400} // set the width of the image
          height={450} // set the height of the image
          layout='responsive' // specify the layout of the image
          objectFit='cover' // set the object-fit property for the image
        />
        <button className='px-1.5 py-0 text-black bg-white rounded-full absolute top-5 right-3 focus:text-primary hover:bg-opacity-90'>
          <FaEllipsisH />
        </button>
        <button className='hover:bg-MoshLight-1 md:mt-0 mt-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-suisse-intl text-[#030205] font-bold bg-white flex items-center rounded-full py-1.5   pl-1.5 text-lg sm:text-base '>
          <MoshMIcon className='w-[30px] sm:w-[30px] h-[30px] sm:h-[30px] ' />
          <span className='pl-1.5 pr-3 text-sm font-bold font-suisse-intl'>
            Song
          </span>
        </button>
      </div>
      <div className='px-1 sm:px-3.5 pt-2.5 sm:pt-5'>
        <h3 className='mb-1 text-base font-bold truncate sm:mb-2 sm:text-xl font-aril'>
          Teddy Bear
        </h3>
        <p className='text-[10px] sm:text-sm font-open-sans '>
          <span className='uppercase'>STAYC </span>• Teddy Bear - Single
        </p>
      </div>
    </div>
  );
};

export default ExploreSong;
