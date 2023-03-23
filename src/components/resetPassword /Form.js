import { LoginContext } from "@/context/LoginContext";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const Form = () => {
  const router = useRouter();

  const { state, resetPassword } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [obCode, setObCode] = useState("");
  const [matchError, setMatchError] = useState("");

  console.log(process.env.FIREBASE_API_KEY)
  const getAuthConfigs = () => {
    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
    };
    const app = initializeApp(config);
    const auth = getAuth(app);
    return auth;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePassword()) {
      const auth = getAuthConfigs();
      if (password && obCode && auth) {
        const data = { actionCode: obCode, newPassword: password, auth: auth };
        await resetPassword(data);
        if (state.status && !state.error) {
          setTimeout(() => {
            router.push("/login");
          }, [2000]);
        }
      }
    }
  };

  useEffect(() => {
    if (router?.query) {
      const oobCode = router?.query?.oobCode;
      setObCode(oobCode);
    }
  }, [router]);

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (password) {
      if (passwordRegex.test(password)) {
        if (confirmPassword) {
          if (password == confirmPassword) {
            setMatchError("");
            return true;
          } else {
            setMatchError("password and confirm password does't match");
          }
        } else {
          setMatchError("please enter confirm Password");
        }
      } else {
        setMatchError(
          "Minimum eight characters, at least one letter, one number and one special character"
        );
      }
    } else {
      setMatchError("please enter Password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div>
        <input
          className="w-full h-12 px-4 rounded-md bg-MoshLight-1 focus:bg-MoshLight-2 focus:outline-none text-sweetDark placeholder:text-sweetDark"
          type="password"
          name="Password"
          id="Password"
          placeholder="new password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="my-4">
        <input
          className="w-full h-12 px-4 rounded-md bg-MoshLight-1 focus:bg-MoshLight-2 focus:outline-none text-sweetDark placeholder:text-sweetDark"
          type="password"
          name="cofirmPassword"
          id="cofirmPassword"
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="block w-full h-12 px-4 font-semibold capitalize rounded-md bg-sweetTurquoise hover:bg-opacity-90 text-MoshDark-7"
      >
        {state.loading ? (
          <span className="loader block !text-[5px] mx-auto"></span>
        ) : (
          "Reset Password"
        )}
      </button>
      {matchError && (
        <span
          className={`block p-3 mt-4 text-xs bg-red-500
            } rounded text-MoshLight-2 bg-opacity-40 font-open-sans`}
        >
          {matchError}
        </span>
      )}
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
      <div className="mb-4 text-center">
        <span className="px-5 bg-sweetDark">or</span>
        <div className="bg-MoshLight-1 h-[1px] mt-[-15px]"></div>
      </div>
      <div className="pt-4">
        <Link href="/forget-password" className="text-primary">
          <button className="block w-full h-12 px-4 text-center border rounded-md bg-MoshDark-6 border-MoshDark-6 focus:outline-none ">
            Back
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Form;
