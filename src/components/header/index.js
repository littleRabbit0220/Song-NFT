import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import TopMenu from './TopMenu';
import Button from '../utils/elements/Button';
import Link from 'next/link';
import { useContext, useState, useEffect, useMemo } from 'react';
import { LoginContext } from '@/context/LoginContext';

const navigation = [
  { name: 'Current Drop', href: '#' },
  { name: 'Drop Schedule', href: '/drop-schedule' },
  { name: 'Leader Board', href: '/leadboard' },
  { name: 'Explore', href: '/explore' },
];

export default function Header() {
  const { state, logout } = useContext(LoginContext);

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);
  const loginButton = useMemo(() => {
    if (!state?.user?.idToken && load) {
      return (
        <li className='lg:mr-2'>
          <Link
            href='/login'
            className={` ${
              !state?.user?.idToken && load ? 'block' : 'hidden'
            } py-1.5 px-2 rounded-md text-sm text-white hover:bg-white hover:bg-opacity-10 transition duration-200 font-bold`}
          >
            Login
          </Link>
        </li>
      );
    } else {
      return (
        <li>
          <button
            onClick={() => logout()}
            className={`${
              state?.user ? 'flex' : 'hidden'
            } py-1.5 px-5 font-bold rounded-md items-center capitalize h-11 bg-sweetTurquoise text-MoshDark-7 hover:bg-opacity-90 transition duration-200`}
          >
            <span className='block w-6 h-6 border-2 rounded-full bg-secondary border-white/25'></span>
            <span className='flex items-center pl-2'>logout</span>
          </button>
        </li>
      );
    }
  }, [state.user, load]);

  const loginButtonMobile = useMemo(() => {
    if (!state?.user?.idToken && load) {
      return (
        <Link
          href='/login'
          className={`${
            !state?.user ? 'block' : 'hidden'
          } py-1.5 px-2 rounded-md text-sm text-white hover:bg-white  hover:bg-opacity-10 transition duration-200 font-bold`}
        >
          Login
        </Link>
      );
    } else {
      return (
        <button
          onClick={() => logout()}
          className={`${
            state?.user ? 'flex' : 'hidden'
          }  w-[200px] max-w-full h-12 ml-2 py-1.5 px-5 font-bold rounded-md items-center capitalize  bg-sweetTurquoise text-MoshDark-7 hover:bg-opacity-90 transition duration-200`}
        >
          <span className='block w-6 h-6 border-2 rounded-full bg-secondary border-white/25'></span>
          <span className='flex items-center pl-2'>logout</span>
        </button>
      );
    }
  }, [state.user, load]);
  return (
    <header className='relative z-10 mt-5'>
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
                  <ul className='flex md:items-center'>
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
                    {loginButton}
                  </ul>

                  <Button className='px-5 py-2 ml-2.5 font-bold rounded-md md:w-auto text-secondary h-11 bg-sweetTurquoise'>
                    <Image
                      height={24}
                      width={25}
                      className='mr-2.5'
                      src='assets/img/icons/wallet-icon.svg'
                      alt=''
                    />
                    <span className='flex items-center'>Connect</span>
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
                  {loginButtonMobile}
                  {/* Button */}
                  <div className='pt-2'>
                    <Button className='px-5 w-[200px] max-w-full h-12 py-2 ml-2 font-bold rounded-md md:w-auto text-secondary bg-sweetTurquoise'>
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
