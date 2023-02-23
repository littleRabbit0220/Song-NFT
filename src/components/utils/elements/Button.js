import React from 'react';

const Button = ({ className, as, icon, children, onClick, href }) => {
  return as === 'a' ? (
    <a
      onClick={onClick}
      href={href}
      className={`flex items-center px-5 py-3 rounded-md hover:bg-opacity-80 ease-in-out transition duration-200 ${className}`}
    >
      {icon && <span className='mr-2.5'>{icon}</span>}

      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`flex items-center px-5 py-3 rounded-md hover:bg-opacity-80 ease-in-out transition duration-200 ${className}`}
    >
      {icon && <span className='mr-2.5'>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
