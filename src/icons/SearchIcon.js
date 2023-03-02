import React from 'react';

const SearchIcon = (props) => {
  return (
    <svg
      {...props}
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.6366 21.5L15.6367 15.5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.6367 17.5C14.5027 17.5 17.6367 14.366 17.6367 10.5C17.6367 6.63401 14.5027 3.5 10.6367 3.5C6.77073 3.5 3.63672 6.63401 3.63672 10.5C3.63672 14.366 6.77073 17.5 10.6367 17.5Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SearchIcon;
