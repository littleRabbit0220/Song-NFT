import React from "react";

export default function Loading() {
    return (
        <div className="fixed w-screen h-screen bg-transparent backdrop-blur left-0 top-0 z-40 flex flex-row justify-center items-center">
            <div className="flex flex-row justify-center items-center">
                <div className="w-8 h-8 border-4 border-gray-200 loader mr-8"></div>
            </div>
        </div>
    );
}
