import { withRouter } from "next/router";
import React from "react";
import { LoginProvider } from "./LoginContext";
import { SignupProvider } from "./SignupContext";
import { UserProvider } from "./UserContext";

function AppContext({ children }) {
  return (
    <>
      <LoginProvider>
        <SignupProvider>
          <UserProvider>{children}</UserProvider>
        </SignupProvider>
      </LoginProvider>
    </>
  );
}
export default withRouter(AppContext);
