import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='max-w-[1400px] px-5 mx-auto mt-16 md:mt-24'>
      <div className='flex flex-wrap justify-between'>
        <div className='basis-full sm:basis-1/2 md:basis-[30%]'>
          <a href='#' className='flex items-center flex-shrink-0'>
            <Image
              className='w-[150px] lg:w-[190px] '
              src='/assets/img/logo.svg'
              alt='Logo'
              width={190}
              height={50}
            />
          </a>
          <p className='mt-5 font-suisse-intl text-MoshLight-1'>
            Subscribe to our email list to receive notifications about new
            drops, exclusive benefits and updates on Meezer straight to your
            inbox
          </p>

          <form
            action=''
            className='relative z-10 flex flex-col mt-6 mb-5 sm:flex-row sm:mb-0'
          >
            <input
              type='text'
              className='text-white bg-MoshLight-1 bg-opacity-20 h-[44px] px-4 font-suisse-intl placeholder:text-white focus:outline-none rounded w-full sm:max-w-[251px] focus:shadow-1'
              placeholder='Email address'
            />
            <Link
              href='/signup'
              className='font-bold flex items-center justify-center bg-sweetTurquoise text-MoshDark-7 h-[44px] rounded mt-3 sm:mt-0 sm:ml-2.5 sm:w-auto w-full min-w-[90px] hover:bg-opacity-90'
            >
              Sign up
            </Link>
          </form>
        </div>
        <div className='px-4 py-5 basis-1/2 sm:basis-[40%] md:basis-auto md:py-0 '>
          <h2 className='mb-5 font-bold'>Fans</h2>
          <ul>
            <li className='mb-2.5'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                How it works
              </a>
            </li>
            <li className='mb-2.5'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                Benefits
              </a>
            </li>
            <li className='mb-2.5'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                Our Artists
              </a>
            </li>
            <li className='mb-2.5'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                Current Drop
              </a>
            </li>
            <li className='mb-2.5'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                Drop Schedule
              </a>
            </li>
          </ul>
        </div>
        <div className='order-4 px-4 py-5 basis-1/2 sm:basis-1/3 md:basis-auto md:py-0 sm:order-2 '>
          <h2 className='mb-5 font-bold'>Artists</h2>
          <ul>
            <li className='mb-2.5'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                Join Musica
              </a>
            </li>
          </ul>
        </div>
        <div className='order-3 px-4 py-5 basis-1/2 sm:basis-1/3 md:basis-auto md:py-0 sm:order-3'>
          <h2 className='mb-5 font-bold'>Support</h2>
          <ul>
            <li className='mb-2.5'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                FAQs
              </a>
            </li>
            <li className='mb-2.5'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                Help Center
              </a>
            </li>
          </ul>
        </div>
        <div className='order-2 px-4 py-5 basis-1/2 sm:basis-1/3 md:basis-auto md:py-0 sm:order-4'>
          <h2 className='mb-5 font-bold'>Collectors</h2>
          <ul>
            <li className='mb-2.5'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                About
              </a>
            </li>
            <li className='mb-2.5'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                Contact
              </a>
            </li>
            <li className='mb-2.5'>
              <Link
                href='/login'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                Login
              </Link>
            </li>
            <li className='mb-2.5'>
              <Link
                href='/signup'
                className='transition-colors duration-200 font-suisse-intl text-MoshLight-1 hover:text-primary'
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className='pb-10 mt-10 text-sm text-center md:mt-20 text-MoshLight-3 font-suisse-intl'>
        © 2022 Meezer. All Rights Reserved <br />
        This is space for additional trademark, copyright, or legal information.
      </p>
    </footer>
  );
};

export default Footer;
