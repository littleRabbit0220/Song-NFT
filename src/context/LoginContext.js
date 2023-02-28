import { createContext } from 'react';

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  return (
    <LoginContext.Provider
      value={{ status: false, loading: false, user: null }}
    >
      {children}
    </LoginContext.Provider>
  );
}
