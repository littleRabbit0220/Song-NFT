import ShareIcon from '@/icons/ShareIcon';
import ArtistTag from './ArtistTag';
import Button from '../utils/elements/Button';
import MasterCardIcon from '@/icons/MasterCardIcon';
import VisaCardIcon from '@/icons/VisaCardIcon';
import GooglePlayIcon from '@/icons/GooglePlayIcon';
import ApplePayIcon from '@/icons/ApplePayIcon';
import AmericanPayIcon from '@/icons/AmericanPayIcon';

const TrackDetails = () => {
  return (
    <div className='py-10 md:py-16'>
      <span className='text-MoshLight-1 !leading-[160%] font-open-sans uppercase'>
        SEASON #2
      </span>
      <div className='flex items-center'>
        <h2 className='text-[42px] font-bold'>Bad Apples</h2>
        <button className='ml-2.5'>
          <ShareIcon />
        </button>
      </div>
      <div className='flex flex-wrap'>
        <span className='pr-1'>
          <strong>Artists in this TrackPack</strong>
        </span>
        {'Beyonce|Nas|Elton|John'.split('|').map((tag) => (
          <ArtistTag btnText={tag} key={tag} className='ml-2' />
        ))}
      </div>
      <p className='text-MoshLight-1 font-open-sans mt-5 mb-7 !leading-[160%] '>
        The “Bad Apples” track pack features a random collection of 20 songs
        from some of your favorite Latin artists including Canserbero, Lochard
        Remy, Gilberto Santa Rosa and Orchestre Septentrional. Earn streaming
        revenue from every song in this collection.
      </p>
      <p className='price text-[#F5F5F5] font-medium !leading-normal text-2xl mb-1'>
        $25.00
      </p>
      <div className='flex items-center text-sm'>
        <p className='font-aril'>TrackPacks Available:</p>
        <span className='px-1.5 font-aril'>•</span>
        <p className='font-aril'>
          <strong>200 out of 2,500 remaining</strong>
        </p>
      </div>
      <div className='flex flex-col flex-wrap my-6 sm:flex-row'>
        <Button className='justify-center bg-primary font-suisse-intl sm:justify-start'>
          Buy with Crypto
        </Button>
        <Button className='bg-white text-sweetDark sm:ml-2.5 mt-3 sm:mt-0  sm:justify-start justify-center'>
          Buy with Credit Card
        </Button>
      </div>
      <div className='flex items-center gap-x-2'>
        <MasterCardIcon />
        <VisaCardIcon />
        <GooglePlayIcon />
        <ApplePayIcon />
        <AmericanPayIcon />
      </div>
    </div>
  );
};

export default TrackDetails;
