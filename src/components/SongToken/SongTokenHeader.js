import MeticSolidIcon from '@/icons/MeticSolidIcon';
import MoshMIcon from '@/icons/MoshMIcon';
import MusicTuneIcon from '@/icons/MusicTuneIcon';
import PlayListIcon from '@/icons/PlayListIcon';
import ShareIcon from '@/icons/ShareIcon';
import SpotifyIcon from '@/icons/SpotifyIcon';
import Image from 'next/image';
import { FaEllipsisH, FaPlay } from 'react-icons/fa';
import { truncateText } from '../utils/functions/helpers';
import VerifiedIcon from '@/icons/VerifiedIcon';
import ArtistTag from '../trackPack/ArtistTag';
import { useEffect, useState } from 'react';
import OffterTable from './OffterTable';
const _arts =
  'Phoebe Bridgers|Tame Impala|The National|Bon Iver|Mitski|Vampire Weekend|Fleet Foxes|Beach House|Sharon Van Etten|Sufjan Stevens';
const SongTokenHeader = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadlineString = 'March 9, 2023 09:06:00';
    const deadline = new Date(deadlineString).getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        clearInterval(countdown);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, []);
  return (
    <div className=' mosh-container-normal relative z-[1] py-10'>
      <div className='flex flex-wrap justify-between lg:flex-nowrap'>
        <div className='w-auto lg:max-w-[415px] sm:pt-5'>
          <div className='relative '>
            <Image
              src={`/assets/img/tape-nft.png`} // specify the image path
              alt='Alternative text' // add alternative text for accessibility
              width={400} // set the width of the image
              height={450} // set the height of the image
            />
            <button className='absolute flex items-center px-4 py-2 text-xs font-bold text-black bg-white rounded-md top-8 right-4 hover:bg-opacity-90 font-orbitron'>
              <FaPlay className='mr-2' />
              PLAY SONG
            </button>
            <button className=' md:mt-0 mt-3 absolute bottom-10 left-1/2 transform -translate-x-1/2   text-[#030205] font-bold flex items-center text-lg sm:text-base min-w-max bnt-bg- bg-contain bg-no-repeat h-[49px] w-[210px] justify-center '>
              <MoshMIcon className='w-8 h-8' />
              <span className='pl-2.5  text-xl font-orbitron font-bold'>
                Mix Tapes
              </span>
            </button>
          </div>
        </div>

        <div className='lg:max-w-[600px] lg:pl-5 basis-full lg:basis-2/3 lg:pt-0 pt-7'>
          <div className=''>
            <span className='flex items-center uppercase text-MoshLight-1 font-open-sans'>
              <span className='align-middle'>SEASON #2</span>
            </span>
            <div className='flex items-center'>
              <h2 className='mb-2 sm:mb-1 text-3xl sm:!leading-relaxed sm:text-[42px] font-bold'>
                Bad Apples
              </h2>
              <button className='ml-2.5'>
                <ShareIcon />
              </button>
            </div>
            <div className='flex flex-wrap -mt-1.5 md:-mt-2 sm:items-center sm:flex-row'>
              <span className='pr-2.5 font-bold mt-2 w-full sm:w-auto !leading-relaxed '>
                Artists in this Mix Tapes
              </span>
              <div>
                {'Phoebe Bridgers|Tame Impala|The National|Bon Iver|Mitski|Vampire Weekend|Fleet Foxes|Beach House|Sharon Van Etten|Sufjan Stevens'
                  .split('|')
                  .map((tag, index) => (
                    <ArtistTag
                      btnText={tag}
                      key={index}
                      className='mt-1.5 mr-1.5 md:mt-2 md:mr-2'
                    />
                  ))}
              </div>
            </div>
            <div className='px-5 pt-4 pb-6 bg-white rounded my-7'>
              <p className='text-sm tracking-widest uppercase opacity-50 text-MoshDark-7 '>
                Sale ends 9 March, 2023 at 9:06 AM
              </p>
              <div className='flex -mx-3 sm:-mx-5 pt-2.5'>
                {timeRemaining?.days > 0 && (
                  <div className='flex flex-col px-3 sm:px-5'>
                    <span className='text-4xl font-semibold text-MoshDark-7 !leading-none'>
                      {timeRemaining.days < 10
                        ? '0' + timeRemaining.days
                        : timeRemaining.days}
                    </span>
                    <span className='text-xs font-aril text-MoshDark-7'>
                      Days
                    </span>
                  </div>
                )}

                <div className='flex flex-col px-3 sm:px-5'>
                  <span className='text-4xl font-semibold text-MoshDark-7 !leading-none'>
                    {timeRemaining.hours < 10
                      ? '0' + timeRemaining.hours
                      : timeRemaining.hours}
                  </span>
                  <span className='text-xs font-aril text-MoshDark-7'>
                    Hours
                  </span>
                </div>
                <div className='flex flex-col px-3 sm:px-5'>
                  <span className='text-4xl font-semibold text-MoshDark-7 !leading-none'>
                    {timeRemaining.minutes < 10
                      ? '0' + timeRemaining.minutes
                      : timeRemaining.minutes}
                  </span>
                  <span className='text-xs font-aril text-MoshDark-7'>
                    Minutes
                  </span>
                </div>
                <div className='flex flex-col px-3 sm:px-5'>
                  <span className='text-4xl font-semibold text-MoshDark-7 !leading-none'>
                    {timeRemaining.seconds < 10
                      ? '0' + timeRemaining.seconds
                      : timeRemaining.seconds}
                  </span>
                  <span className='text-xs font-aril text-MoshDark-7'>
                    Seconds
                  </span>
                </div>
              </div>
            </div>
            <p className=' text-[#F5F5F5] !leading-normal mb-1 flex items-center flex-wrap '>
              <span className='font-medium text-[26px] pr-2'>$25 USD</span>

              <small className='tracking-widest uppercase'>
                • USDC or Polygon (MATIC)
              </small>
            </p>

            <div className='flex items-center text-sm'>
              <p className='text-sm font-aril '>TrackPacks Available:</p>
              <span className='px-1.5 font-aril'>•</span>
              <p className='text-sm font-aril'>
                <strong>200 out of 2,500 remaining</strong>
              </p>
            </div>
            {/* <ProductQty /> */}
            <div className='flex flex-col w-full sm:space-x-3 sm:flex-row mt-7'>
              <button className='py-3 text-white transition duration-200 rounded-md bg-primary font-aril basis-2/3 hover:bg-opacity-90'>
                Add to cart
              </button>
              <button className='py-3 mt-3 sm:mt-0 bg-white rounded-md font-aril text-MoshDark-7 min-w-[60%]  hover:bg-opacity-90 transition duration-200'>
                Make an Offer
              </button>
            </div>
            <div className='hidden lg:block'>
              <OffterTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongTokenHeader;
