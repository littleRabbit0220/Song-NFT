import Image from 'next/image';
import Link from 'next/link';

const NeverMissCTA = () => {
  return (
    <div className='max-w-[1400px] px-5 mx-auto  mt-7 mb-9 '>
      <div className='bg-gradient-to-b from-[#F84E24] to-[#4F3583] rounded-md relative'>
        <Image
          height={300}
          width={270}
          src='assets/img/n-m-pattern.svg'
          alt='lines'
          className='absolute hidden transform -translate-y-1/2 top-1/2 sm:block'
        />
        <div className=' flex flex-col  max-w-[500px] w-full mx-auto py-16 md:px-0 px-5 text-center'>
          <div className='w-full sm:w-auto'>
            <h2 className='text-4xl md:text-[52px] font-bold mb1.5'>
              Never miss a beat!
            </h2>
            <p className='font-suisse-intl leading-[160%] mt-5'>
              Subscribe to our email list to get drop reminders, special perks
              and the latest Meezer updates delivered right to your inbox.
            </p>
          </div>
          <div className='w-full mt-7 '>
            <form
              action=''
              className='relative z-10 flex flex-col justify-center sm:flex-row'
            >
              <input
                type='text'
                className='text-white bg-MoshLight-1 bg-opacity-20 h-[44px] px-4 font-suisse-intl placeholder:text-white focus:outline-none rounded w-full sm:max-w-[251px] focus:shadow-1'
                placeholder='Email address'
              />
              <Link
                href='/signup'
                className='font-bold flex items-center justify-center bg-white text-MoshDark-7 h-[44px] rounded mt-3 sm:mt-0 sm:ml-2.5 sm:w-auto w-full min-w-[90px] hover:bg-MoshLight-2'
              >
                Subscribe
              </Link>
            </form>
          </div>
        </div>
        <Image
          height={300}
          width={270}
          src='assets/img/n-m-pattern.svg'
          alt='lines'
          className='absolute bottom-0 right-0 hidden sm:block md:transform md:-translate-y-1/2 md:top-1/2'
        />
      </div>
    </div>
  );
};

export default NeverMissCTA;
