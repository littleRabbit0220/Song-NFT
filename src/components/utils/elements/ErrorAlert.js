import React, { useContext } from "react";
import classnames from 'classnames';
import { UserContext } from "@/context/UserContext";

export default function ErrorAlert({ errorAlertVisible,  message}) {
  const { setErrorStatus } = useContext(UserContext);
  return (
    <>
      <div
        className={classnames("justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none backdrop-blur-sm ", { '-z-10 opacity-0 ': !errorAlertVisible, 'fade-in z-20': errorAlertVisible })}
      >
        <div className={classnames("relative w-auto my-6 mx-auto max-w-3xl ", { "z-10 fade-in": errorAlertVisible })}>
          <div className="border-2 border-red-700  relative flex flex-col w-full  outline-none focus:outline-none  bg-red-400 rounded-xl overflow-hidden">
            <div className="flex items-start justify-between  pb-0 ">
              <h2 className="text-xl font-semibold text-black 0 m-2 pl-2">
                Error
              </h2>
              <button
                className=" absolute right-0 ml-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => {
                  setErrorStatus(false, "");
                }}
              >
                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none hover:text-white  flex justify-center items-center rounded">
                  ×
                </span>
              </button> 
            </div>
            <div className="text-black bg-red-400 p-3 pt-0">
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 -z-10 bg-black"></div>
    </>
  );
}