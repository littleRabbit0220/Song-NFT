import Image from 'next/image';

const CallToAction = () => {
  return (
    <div className='mosh-container-normal mt-7 mb-9 '>
      <div className='bg-gradient-to-b from-[#F84E24] to-[#4F3583] rounded-md relative'>
        <Image
          height={117}
          width={131}
          src='assets/img/icons/linesPattern.svg'
          alt='lines'
          className='absolute'
        />
        <div className='px-6 flex flex-col md:flex-row max-w-[848px] w-full mx-auto md:justify-between items-center py-8'>
          <div className='w-full sm:w-auto'>
            <h2 className='text-3xl font-bold mb1.5'>Join</h2>
            <p className='text-sm font-suisse-intl leading-[160%]'>
              Sign up to become a Mosh member - it's free.
            </p>
          </div>
          <div className='w-full mt-7 sm:w-auto md:mt-0'>
            <form action='' className='relative z-10 flex flex-col sm:flex-row'>
              <input
                type='text'
                className='text-white bg-MoshLight-1 bg-opacity-20 h-[44px] px-4 font-suisse-intl placeholder:text-white focus:outline-none rounded w-full sm:max-w-[251px] focus:shadow-1'
                placeholder='Email address'
              />
              <button
                type='submit'
                className='font-bold bg-white text-MoshDark-7 h-[44px] rounded mt-3 sm:mt-0 sm:ml-2.5 sm:w-auto w-full min-w-[90px] hover:bg-MoshLight-2'
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
        <Image
          height={117}
          width={131}
          src='assets/img/icons/linesPattern.svg'
          alt='lines'
          className='absolute bottom-0 right-0 md:transform md:-translate-y-1/2 md:top-1/2 '
        />
      </div>
    </div>
  );
};

export default CallToAction;
