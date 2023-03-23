import { LoginContext } from '@/context/LoginContext';
import { SignupContext } from '@/context/SignupContext';
import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';

const Form = () => {
  const { state, forgotPassword } = useContext(LoginContext);
  const [email, setEmail] = useState('');


  const handleSubmit =async (e) => {
    e.preventDefault();
    if (email) {
     const data=await forgotPassword({ email });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <div>
        <input  
          className='w-full h-12 px-4 rounded-md bg-MoshLight-1 focus:bg-MoshLight-2 focus:outline-none text-sweetDark placeholder:text-sweetDark'
          type='text'
          name='username'
          id='username'
          placeholder='Email address or username'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='my-4'></div>
      <button
        type='submit'
        className='block w-full h-12 px-4 font-semibold capitalize rounded-md bg-sweetTurquoise hover:bg-opacity-90 text-MoshDark-7'
      >
        {state.loading ? (
          <span className='loader block !text-[5px] mx-auto'></span>
        ) : (
          'Verify Email'
        )}
      </button>
      {!state.loading && state.error && (
        <span
          className={`block p-3 mt-4 text-xs bg-red-500
            } rounded text-MoshLight-2 bg-opacity-40 font-open-sans`}
        >
          {state.error}
        </span>
      )}
      {!state.loading && !state.error && state.message && (
        <span
          className={`block p-3 mt-4 text-xs bg-green-500
            } rounded text-MoshLight-2 bg-opacity-40 font-open-sans`}
        >
          {state.message}
        </span>
      )}
      <div className='mb-4 text-center'>
        <span className='px-5 bg-sweetDark'>or</span>
        <div className='bg-MoshLight-1 h-[1px] mt-[-15px]'></div>
      </div>
      <div className='pt-4'>
        <Link href='/login' className='text-primary'>
          <button className='block w-full h-12 px-4 text-center border rounded-md bg-MoshDark-6 border-MoshDark-6 focus:outline-none '>
            Back
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Form;
