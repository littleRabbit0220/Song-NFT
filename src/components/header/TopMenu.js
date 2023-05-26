import React from 'react';
import Link from 'next/link';

const TopMenu = () => {
    return (
        <div className='hidden px-4 pb-5 mx-auto lg:px-9 xl:px-10 mosh-container-xl md:block'>
            <ul className='flex items-center justify-end text-sm'>
                <li className='mr-5'>
                    <Link className='text-white transition duration-200 text-opacity-70 hover:text-opacity-100' href='#'>
                        About
                    </Link>
                </li>
                <li className='mr-5'>
                    <Link className='text-white transition duration-200 text-opacity-70 hover:text-opacity-100' href='#'>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link className='text-white transition duration-200 text-opacity-70 hover:text-opacity-100' href='#'>
                        Help center
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default TopMenu;
