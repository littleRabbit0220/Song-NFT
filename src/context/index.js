import React from 'react';
import { LoginProvider } from './LoginContext';
import { SignupProvider } from './SignupContext';

export default function AppContext({ children }) {
  return (
    <LoginProvider>
      <SignupProvider>{children}</SignupProvider>
    </LoginProvider>
  );
}
