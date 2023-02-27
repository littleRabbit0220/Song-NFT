import ShareIcon from '@/icons/ShareIcon';
import ArtistTag from './ArtistTag';
import Button from '../utils/elements/Button';
import MasterCardIcon from '@/icons/MasterCardIcon';
import VisaCardIcon from '@/icons/VisaCardIcon';
import GooglePlayIcon from '@/icons/GooglePlayIcon';
import ApplePayIcon from '@/icons/ApplePayIcon';
import AmericanPayIcon from '@/icons/AmericanPayIcon';
import ProductQty from './ProductQty';
import VerifiedIcon from '@/icons/VerifiedIcon';
import USDCIcon from '@/icons/USDCIcon';
import MaticIcon from '@/icons/MaticIcon';

const TrackDetails = () => {
  return (
    <div className='py-10 md:py-16'>
      <span className='flex items-center uppercase text-MoshLight-1 font-open-sans'>
        <span className='align-middle'>SEASON #1</span>
        <VerifiedIcon className='ml-2' />
      </span>
      <div className='flex items-center'>
        <h2 className='mb-2 sm:mb-1 text-3xl sm:!leading-relaxed sm:text-[42px] font-bold'>
          Genesis Mixtape
        </h2>
        <button className='ml-2.5'>
          <ShareIcon />
        </button>
      </div>
      <div className='flex flex-wrap -mt-2 sm:items-center sm:flex-row'>
        <span className='pr-2.5 font-bold text-sm mt-2 w-full sm:w-auto'>
          Artists in this TrackPack
        </span>
        {'Beyonce|Nas|Elton|John|John|John|John|John|John|John|Jhon'
          .split('|')
          .map((tag, index) => (
            <ArtistTag btnText={tag} key={index} className='mt-2 mr-2' />
          ))}
      </div>
      <p className='text-MoshLight-1 font-open-sans mt-5 mb-7 !leading-[160%] '>
        The Genesis Mixtape features a collection of 10 songs from some of your
        favorite Latin artists including Canserbero, Lochard Remy, Gilberto
        Santa Rosa and Orchestre Septentrional. Earn streaming revenue from
        every song in this collection.
      </p>
      <p className='price text-[#F5F5F5] font-medium !leading-normal text-xl mb-1'>
        $25 USD / USDC on Polygon (Matic)
      </p>

      <div className='flex items-center text-sm'>
        <p className='font-aril'>TrackPacks Available:</p>
        <span className='px-1.5 font-aril'>•</span>
        <p className='font-aril'>
          <strong>200 out of 2,500 remaining</strong>
        </p>
      </div>
      <ProductQty />
      <div className='flex flex-col flex-wrap my-6 sm:flex-row'>
        <Button className='justify-center bg-primary font-suisse-intl sm:justify-start'>
          Buy with
          <span className='flex items-center ml-2'>
            <USDCIcon className='mr-1' />
            <MaticIcon />
          </span>
        </Button>
        <Button className='bg-white text-sweetDark sm:ml-2.5 mt-3 sm:mt-0  sm:justify-start justify-center'>
          Buy with
          <span className='flex items-center pl-2'>
            <MasterCardIcon className='mr-1' />
            <VisaCardIcon className='mr-1' />
            <AmericanPayIcon />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default TrackDetails;
