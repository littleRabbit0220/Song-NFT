import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import TopMenu from './TopMenu';
import Button from '../utils/elements/Button';
import Link from 'next/link';

const navigation = [
  { name: 'Current Drop', href: '#' },
  { name: 'Drop Schedule', href: '#' },
  { name: 'Leader Board', href: '#' },
  { name: 'Explore', href: '#' },
  { name: 'Login', href: '/login' },
];

export default function Header() {
  return (
    <header className='mt-5'>
      <TopMenu />
      <Disclosure as='nav'>
        {({ open }) => (
          <>
            <div className='px-4 mx-auto lg:px-9 xl:px-10 mosh-container-xl'>
              <div className='flex items-center justify-between'>
                {/* Logo */}
                <Link href='/' className='flex items-center flex-shrink-0'>
                  <Image
                    className='w-[150px] lg:w-[190px] '
                    src='assets/img/logo.svg'
                    alt='Logo'
                    width={190}
                    height={50}
                  />
                </Link>
                {/* Menu */}
                <div className='items-center hidden md:flex'>
                  <ul className='flex'>
                    {navigation.map((item) => (
                      <li className=' lg:mr-4' key={item.name}>
                        <Link
                          key={item.name}
                          href={item.href}
                          className='py-1.5 px-2 rounded-md text-sm text-white hover:bg-white  hover:bg-opacity-10 transition duration-200 font-bold'
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Button className='px-5 py-2 ml-2 font-bold rounded-md md:w-auto text-secondary bg-sweetTurquoise'>
                    <Image
                      height={24}
                      width={25}
                      className='mr-2.5'
                      src='assets/img/icons/wallet-icon.svg'
                      alt=''
                    />
                    Connect
                  </Button>
                </div>
                {/* Button */}
                <div className='flex items-center md:hidden'>
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 -mr-2 text-white rounded-md opacity-80 hover:opacity-100 hover:bg-primary/20 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <FaTimes className='block w-6 h-6' aria-hidden='true' />
                    ) : (
                      <FaBars className='block w-6 h-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            {/* Responsive Menu */}

            <Transition
              show={open}
              enter='transition duration-300 ease-out transform'
              enterFrom='opacity-0 z-[-1] translate-y-[-100%]'
              enterTo='opacity-100 z-10 translate-y-0'
              leave='transition duration-300 ease-in transform'
              leaveFrom='opacity-100 z-10 translate-y-0'
              leaveTo='opacity-0 z-[-1] translate-y-[-100%]'
            >
              {' '}
              <Disclosure.Panel className='md:hidden max-w-[640px] mx-auto pb-3'>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className='py-1.5 px-2 rounded-md text-sm text-white hover:bg-white  hover:bg-opacity-10 transition duration-200 font-bold block '
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* Button */}
                  <div className='pt-2'>
                    <Button className='px-5 py-2 ml-2 font-bold rounded-md md:w-auto text-secondary bg-sweetTurquoise'>
                      <Image
                        height={24}
                        width={25}
                        className='mr-2.5'
                        src='assets/img/icons/wallet-icon.svg'
                        alt=''
                      />
                      Connect
                    </Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </header>
  );
}
