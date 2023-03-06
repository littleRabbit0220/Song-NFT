import Image from 'next/image';
import { truncateText } from '../utils/functions/helpers';
import MoshMIcon from '@/icons/MoshMIcon';

const ArtistFan = ({ fan }) => {
  return (
    <div className='pt-1 fan'>
      <div className='relative'>
        <Image
          src={`/assets/img/${fan?.fanImg}`}
          alt='Alternative text' // add alternative text for accessibility
          width={400} // set the width of the image
          height={450} // set the height of the image
        />
        <button className='absolute px-3 py-2 text-white rounded-md bg-primary top-3 left-3 hover:bg-opacity-90'>
          #{fan?.number}
        </button>
      </div>
      <div className='px-1 sm:px-2 pt-2.5 sm:pt-5'>
        <h3 className='flex mb-1 text-base font-bold sm:mb-2 font-aril'>
          <MoshMIcon className='w-6 h-6 mr-2' /> @
          {truncateText(fan?.username || '', 20)}
        </h3>
        <p className='text-[10px] sm:text-sm font-open-sans '>
          Songs Collection <span className='font-bold'>• 20</span>
        </p>
      </div>
    </div>
  );
};

export default ArtistFan;
