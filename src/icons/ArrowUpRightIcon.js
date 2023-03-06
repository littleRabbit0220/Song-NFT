import React from 'react';

const ArrowUpRightIcon = (props) => {
  return (
    <svg
      {...props}
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <line x1='7' y1='17' x2='17' y2='7'></line>
      <polyline points='7 7 17 7 17 17'></polyline>
    </svg>
  );
};

export default ArrowUpRightIcon;
