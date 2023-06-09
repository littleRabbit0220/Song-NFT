import VerifyJWTExpire from "@/components/utils/functions/VerifyJWTExpire";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import React, { useEffect } from "react";
import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";

export const LoginContext = createContext();
export function LoginProvider({ children }) {
  const router = useRouter();
  const [state, setState] = useState({
    status: false,
    loading: true,
    user: null,
    error: null,
    message: null,
  });
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

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

  const loginUser = async ({ email, password }) => {
    setState({ status: false, loading: true, user: null, error: null });

    try {
      const response = await fetch(`${process.env.HOST_URL}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        console.log(userData)
        setState({
          status: true,
          loading: false,
          user: userData,
          error: null,
        });
        localStorage.setItem("userInfo", JSON.stringify(userData));
      }
    } catch (error) {
      console.log(error);
      setState({
        status: false,
        loading: false,
        user: null,
        error: "An error occurred while signing up. Please try again later.",
      });
    }
  };

  // forgot password
  const forgotPassword = async ({ email }) => {
    setState({ status: false, loading: true, user: null, error: null });
    try {
      const response = await fetch(`${process.env.HOST_URL}/reset-password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjU0NWUyNDZjNTEwNmExMGQ2MzFiMTA0M2E3MWJiNTllNWJhMGM5NGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbW9zaC1tYXJrZXRwbGFjZS03ZWNhNSIsImF1ZCI6Im1vc2gtbWFya2V0cGxhY2UtN2VjYTUiLCJhdXRoX3RpbWUiOjE2ODYwNDM4NTYsInVzZXJfaWQiOiJzN1VieW94WjJBZWhoc09JUmhaRUQ3Slk0YUMzIiwic3ViIjoiczdVYnlveFoyQWVoaHNPSVJoWkVEN0pZNGFDMyIsImlhdCI6MTY4NjA0Mzg1NiwiZXhwIjoxNjg2MDQ3NDU2LCJlbWFpbCI6InRhdm9sby50cmVudGlub0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0YXZvbG8udHJlbnRpbm9AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.vO83BYGKoilnEMKjNNye6p1-B79yo4g30LxfXwX6xakrFNqzS-b2sp9Qe1hAW4SB-VOsqsQTt_OZ3V7flJgHM3rkRrofSiWruVonQF7OLBZKcOK3fbu0VuI5aFxk0ZVFyW1jUyuA6uKHVSuLL0QOmhTDavyePPn-QG1RpuvuKem7CVbBOkKGBUIS_9O5AOtOZOzk6dm9GdujJjLULc7PRNKPPIVPKCZkJ6IKw5RZXqQbW3KBU9rozS867JNoFuFdDzxuNFIqW_fKSIqrXujsJAnX91MlHalY64cF0hNirxts_USrV81MndGcDMH59OieCGZvJaUsuHFXXx28c4LXng"
        },
        body: JSON.stringify({ email }),
      });
      const responseData = await response.json();
      console.log(responseData, "response");
      if (!response.ok) {
        setState({
          status: false,
          loading: false,
          user: null,
          error: responseData.error,
        });
      } else {
        if (
          typeof responseData === "string" ||
          responseData instanceof String
        ) {
          setState({
            status: false,
            loading: false,
            error: responseData.split("_").join(" ").toUpperCase(),
          });
        } else {
          setState({
            status: true,
            loading: false,
            message: "RESET PASSWORD LINK SENT TO YOUR MAIL",
            error: null
          });
        }
      }
    } catch (error) {
      setState({
        status: false,
        loading: false,
        user: null,
        error: error.message,
      });
    }
  };

  // reset password
  const resetPassword = async (actionCode,newPassword,auth) => {
    setState({ status: false, loading: true, user: null, error: null });
    try {
      const email = await verifyPasswordResetCode(auth, actionCode);
      if (email) {
      const response = await confirmPasswordReset(
        auth,
        actionCode,
        newPassword
      );
        setState({
          status: true,
          loading: false,
          message: "Password changed successfully",
          error: null
        });
      }
    } catch (error) {
      setState({
        status: false,
        loading: false,
        user: null,
        error: error.message,
      });
    }
  };

  // logout user
  const logout = () => {
    localStorage.removeItem("userInfo");
    setState({
      state: false,
      loading: false,
      user: null,
      error: null,
    });
    router.push("/login");
  };

  return (
    <LoginContext.Provider
      value={{
        state,
        setState,
        loginUser,
        forgotPassword,
        logout,
        resetPassword,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
