import VerifyJWTExpire from '@/components/utils/functions/VerifyJWTExpire';
import { useRouter } from 'next/router';
import { createContext, useState } from 'react';
import React, { useEffect } from 'react';
export const LoginContext = createContext();
export function LoginProvider({ children }) {
  const router = useRouter();
  const [state, setState] = useState({
    status: false,
    loading: true,
    user: null,
  });
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    let _userData = null;
    if (userInfo?.idToken) {
      if (!VerifyJWTExpire(userInfo?.idToken)) {
        _userData = userInfo;
      }
    }

    setState({
      status: true,
      loading: false,
      user: _userData,
    });
  }, []);
  console.log(state);
  const loginUser = async ({ email, password }) => {
    setState({ status: false, loading: true, user: null, error: null });

    try {
      const response = await fetch(`${process.env.HOST_URL}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setState({
          status: false,
          loading: false,
          user: null,
          error: errorData.message,
        });
      } else {
        const userData = await response.json();
        setState({
          status: true,
          loading: false,
          user: userData,
          error: null,
        });
        localStorage.setItem('userInfo', JSON.stringify(userData));
      }
    } catch (error) {
      setState({
        status: false,
        loading: false,
        user: null,
        error: 'An error occurred while signing up. Please try again later.',
      });
    }
  };
  // logout user
  const logout = () => {
    localStorage.removeItem('userInfo');
    setState({
      state: false,
      loading: false,
      user: null,
      error: null,
    });
    router.push('/login');
  };

  return (
    <LoginContext.Provider value={{ state, loginUser, logout }}>
      {children}
    </LoginContext.Provider>
  );
}
