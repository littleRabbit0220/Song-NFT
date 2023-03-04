import BellIcon from '@/icons/BellIcon';
import Image from 'next/image';

const PublicProfileCard = () => {
  return (
    <div className='mosh-container-normal relative z-[1] my-10 '>
      <div className='bg-MoshDark-7 px-[20px] py-[25px] md:px-[30px] md:py-[35px] rounded-xl flex lg:flex-row flex-col'>
        <div className='flex flex-wrap sm:flex-nowrap'>
          <Image
            className='w-[164px] h-[164px] rounded-full object-cover border-4 border-white/25'
            src='/assets/img/profile-image.png' // specify the image path
            alt='Alternative text' // add alternative text for accessibility
            width={320} // set the width of the image
            height={320} // set the height of the image
          />
          <div className='max-w-[485px] pt-6 sm:pt-0 sm:pl-6 '>
            <h2 className='text-2xl sm:text-[28px] font-bold flex items-center'>
              a KID called BEAST
              <svg
                className='ml-3'
                width='23'
                height='25'
                viewBox='0 0 23 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M13.133 1.58484C12.4647 0.758179 11.2044 0.75818 10.5362 1.58484L9.61534 2.72391C9.20019 3.23753 8.52125 3.45813 7.88348 3.28664L6.46899 2.90633C5.44248 2.63033 4.42285 3.37114 4.36813 4.4327L4.29273 5.89544C4.25874 6.55503 3.83914 7.13254 3.22236 7.36868L1.85449 7.8924C0.861799 8.27249 0.472335 9.47113 1.05203 10.3621L1.85083 11.5899C2.211 12.1434 2.211 12.8573 1.85083 13.4109L1.05203 14.6386C0.472334 15.5296 0.861798 16.7282 1.85449 17.1083L3.22236 17.632C3.83914 17.8682 4.25874 18.4457 4.29273 19.1053L4.36813 20.568C4.42285 21.6296 5.44248 22.3704 6.46899 22.0944L7.88348 21.7141C8.52125 21.5426 9.20019 21.7632 9.61534 22.2768L10.5362 23.4159C11.2044 24.2426 12.4647 24.2426 13.133 23.4159L14.0537 22.2768C14.4689 21.7632 15.1479 21.5426 15.7856 21.7141L17.2001 22.0944C18.2266 22.3704 19.2462 21.6296 19.301 20.568L19.3763 19.1053C19.4104 18.4457 19.8299 17.8682 20.4467 17.632L21.8146 17.1083C22.8073 16.7282 23.1967 15.5296 22.617 14.6386L21.8182 13.4109C21.4581 12.8573 21.4581 12.1434 21.8182 11.5899L22.617 10.3621C23.1967 9.47113 22.8073 8.27249 21.8146 7.8924L20.4467 7.36868C19.8299 7.13254 19.4104 6.55503 19.3763 5.89544L19.301 4.43269C19.2462 3.37113 18.2266 2.63033 17.2001 2.90633L15.7856 3.28664C15.1479 3.45813 14.4689 3.23753 14.0537 2.72391L13.133 1.58484ZM17.9355 9.70633L16.415 8.18588L10.4895 14.1113L8.14168 11.7635L6.62123 13.284L10.4895 17.1523L17.9355 9.70633Z'
                  fill='white'
                />
              </svg>
            </h2>
            <p className='mt-2 text-sm sm:text-base font-suisse-intl'>
              Big Joe's music blends indie rock with blues and soul, featuring
              gritty vocals and soaring guitar solos, delivering honest and
              powerful songs that leave a lasting impression.
            </p>
            <div className='flex mt-5'>
              <button className='flex items-center justify-center w-10 h-10 bg-white rounded-[5px]'>
                <BellIcon />
              </button>
              <button className='rounded-[5px] h-10 min-w-[121px] border-white border ml-3 hover:bg-primary/10 transition ease-in-out duration-200'>
                Follow
              </button>
            </div>
          </div>
        </div>

        <div className='basis-full mt-6 lg:mt-0 w-full lg:w-[30%] lg:basis-[30%] ml-auto text-sm'>
          <ul>
            <li className='flex items-center justify-between mb-5'>
              <span className='tracking-widest uppercase'>songs owned</span>
              <span>13</span>
            </li>
            <li className='flex items-center justify-between mb-5'>
              <span className='tracking-widest uppercase'>Mix taped owned</span>
              <span className='opacity-50'>Coming soon</span>
            </li>

            <li className='flex items-center justify-between mb-5'>
              <span className='tracking-widest uppercase'>
                Royalties earned
              </span>
              <span>$1.203</span>
            </li>

            <li className='flex items-center justify-between mb-5'>
              <span className='tracking-widest uppercase'>
                Best performing song
              </span>
              <span>1</span>
            </li>
            <li className='flex items-center justify-between'>
              <span className='tracking-widest uppercase'>Labels</span>
              <span className='opacity-50'>Coming soon</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PublicProfileCard;
0;
