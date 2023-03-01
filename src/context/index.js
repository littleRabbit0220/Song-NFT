import { withRouter } from 'next/router';
import React from 'react';
import { LoginProvider } from './LoginContext';
import { SignupProvider } from './SignupContext';

function AppContext({ children }) {
  return (
    <LoginProvider>
      <SignupProvider>{children}</SignupProvider>
    </LoginProvider>
  );
}
export default withRouter(AppContext);
