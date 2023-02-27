import React from 'react';

const Form = () => {
  return (
    <form className='mt-4'>
      <div>
        <input
          className='w-full h-12 px-4 rounded-md bg-MoshLight-1 focus:bg-MoshLight-2 focus:outline-none text-sweetDark placeholder:text-sweetDark'
          type='text'
          name='username'
          id='username'
          placeholder='Email address or username'
        />
      </div>
      <div className='my-4'>
        <input
          className='w-full h-12 px-4 rounded-md bg-MoshLight-1 focus:bg-MoshLight-2 focus:outline-none text-sweetDark placeholder:text-sweetDark'
          type='password'
          name='password'
          placeholder='Password'
          id='password'
        />
      </div>
      <button
        type='submit'
        className='block w-full h-12 px-4 font-semibold capitalize rounded-md bg-sweetTurquoise hover:bg-opacity-90 text-MoshDark-7'
      >
        login
      </button>
      <p className='my-4 text-sm text-center text-MoshLight-1 '>
        Forgot your password?
      </p>
      <div className='mb-4 text-center'>
        <span className='px-5 bg-sweetDark'>or</span>
        <div className='bg-MoshLight-1 h-[1px] mt-[-15px]'></div>
      </div>
      <div className='pt-4'>
        <button className='block w-full h-12 px-4 text-center border rounded-md bg-MoshDark-6 border-MoshDark-6 focus:outline-none '>
          Login with Wallet
        </button>
      </div>
    </form>
  );
};

export default Form;
