import React, { useContext } from "react";
import classnames from 'classnames';
import { UserContext } from "@/context/UserContext";

export default function Modal({ modalVisible, modalTitle, modalContent}) {

  const { setModalStatus } = useContext(UserContext);
  return (
    <>
      <div
        className={classnames("justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none backdrop-blur-sm ", { '-z-10 opacity-0 ': !modalVisible, 'fade-in z-20': modalVisible })}
      >
        <div className={classnames("relative w-auto my-6 mx-auto max-w-3xl ", { "z-10 fade-in": modalVisible })}>
          <div className="border-0 rounded-lg  relative flex flex-col w-full  outline-none focus:outline-none shadow shadow-slate-500 bg-slate-900 rounded-xl overflow-hidden">
            <div className="flex items-start justify-between p-5 pb-0 ">
              <h2 className="text-xl font-semibold text-slate-300 m-2">
                {modalTitle}
              </h2>
              <button
                className=" -mt-4 -mr-3 ml-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => {
                  setModalStatus(false, "", <></>);
                }}
              >
                <span className="bg-transparent text-slate-500  h-6 w-6 text-2xl block outline-none hover:text-green-900 hover:bg-slate-300 flex justify-center items-center rounded">
                  ×
                </span>
              </button> 
            </div>
            <div className="text-black bg-slate-600">{modalContent}</div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 -z-10 bg-black"></div>
    </>
  );
}