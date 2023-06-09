import { createContext, useState } from 'react';

export const SignupContext = createContext();

export function SignupProvider({ children }) {
  const [state, setState] = useState({
    status: false,
    loading: false,
    user: null,
  });
  const signupUser = async ({ email, password }) => {
    setState({ status: false, loading: true, user: null, error: null });

    try {
      const response = await fetch(`${process.env.HOST_URL}/signUp/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
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
      }
    } catch (error) {
      console.log(error);
      setState({
        status: false,
        loading: false,
        user: null,
        error: 'An error occurred while signing up. Please try again later.',
      });
    }
  };
  const clearSignupState = () => {
    setState({ status: false, loading: false, user: null });
  };
  return (
    <SignupContext.Provider value={{ state, signupUser, clearSignupState }}>
      {children}
    </SignupContext.Provider>
  );
}
