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
        localStorage.setItem("userInfo", JSON.stringify(userData));
      }
    } catch (error) {
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
