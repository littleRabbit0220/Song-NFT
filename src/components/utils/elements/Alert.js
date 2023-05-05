import React, {useContext} from "react";
import classnames from "classnames";
import { UserContext } from "@/context/UserContext";

export default function Alert(props) {
  const {setAlertHidden} = useContext(UserContext);
  return (
    <div className={classnames("mb-3  items-center rounded-lg bg-orange-400 px-6 py-2 text-base text-warning-800  fixed top-5 right-5 z-50 flex justify-center opacity-90 ",{"hidden":props.hidden})}>
      
      <strong className="mr-1">{props.title}! </strong> {props.description}
      <button
        type="button"
        className="ml-auto box-content rounded-none border-none p-1 text-white-400 opacity-50 hover:text-warning-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
        onClick={() => setAlertHidden(true)}
      >
        <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
