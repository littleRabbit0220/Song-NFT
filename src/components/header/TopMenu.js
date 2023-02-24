const TopMenu = () => {
  return (
    <div className='px-4 pb-5 mx-auto lg:px-9 xl:px-10 mosh-container-xl'>
      <ul className='flex items-center justify-end text-sm'>
        <li className='mr-5'>
          <a
            className='text-white transition duration-200 text-opacity-70 hover:text-opacity-100'
            href='#'
          >
            About
          </a>
        </li>
        <li className='mr-5'>
          <a
            className='text-white transition duration-200 text-opacity-70 hover:text-opacity-100'
            href='#'
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className='text-white transition duration-200 text-opacity-70 hover:text-opacity-100'
            href='#'
          >
            Help center
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
