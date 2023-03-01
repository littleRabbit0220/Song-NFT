import { LoginContext } from '@/context/LoginContext';
import { SignupContext } from '@/context/SignupContext';
import React, { useContext, useState, useEffect } from 'react';

const Form = () => {
  const { state, loginUser } = useContext(LoginContext);
  const { clearSignupState } = useContext(SignupContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [showErr, setShowErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setShowErr(true);
      loginUser({ email, password });
    }
  };
  useEffect(() => {
    clearSignupState();

    state?.user?.kind
      ? setErrMsg('Login Successfully')
      : setErrMsg(state?.user || state?.error);

    // Set showErr to false after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowErr(false);
    }, 3000);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [state]);

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
      <div className='my-4'>
        <input
          className='w-full h-12 px-4 rounded-md bg-MoshLight-1 focus:bg-MoshLight-2 focus:outline-none text-sweetDark placeholder:text-sweetDark'
          type='password'
          name='password'
          placeholder='Password'
          id='password'
          autoComplete='current-password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type='submit'
        className='block w-full h-12 px-4 font-semibold capitalize rounded-md bg-sweetTurquoise hover:bg-opacity-90 text-MoshDark-7'
      >
        {state.loading ? (
          <span className='loader block !text-[5px] mx-auto'></span>
        ) : (
          'login'
        )}
      </button>
      {showErr && !state.loading && (
        <span
          className={`block p-3 mt-4 text-xs ${
            state?.user?.kind ? 'bg-green-500' : ' bg-red-500'
          } rounded text-MoshLight-2 bg-opacity-40 font-open-sans`}
        >
          {errMsg}
        </span>
      )}
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
