import {  useState, useRef } from "react";

import MessengerSideBar from "../../components/screens/messenger/messengerSideBar";
import Link from "next/link";
export default function MessengerApp(props) {
  let [message, setMessage] = useState("");

  return (
    <div className="h-screen w-full flex antialiased text-gray-200 bg-dark_one overflow-hidden">
      <div className="h-screen w-full flex antialiased text-gray-200 bg-dark_one overflow-hidden">
        <div className="flex-1 flex flex-col">
        <div className="p-2 z-20 border-b-2 border-gray-800 flex justify-between">
            <Link href="/">
              <a className=" text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                <svg
                  className="m-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </a>
            </Link>
            <div className="flex flex-row z-20 my-auto">
              <div className="bg-red-600 w-3 h-3 rounded-full mr-2"></div>
              <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
              <div className="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
            </div>
          </div>
          <div className="flex-grow flex flex-row min-h-0">
            <MessengerSideBar />
            <section className="flex flex-col flex-auto border-l border-gray-800">
              <div className="relative p-4 flex-1 flex justify-center ">
              <div className="flex flex-col my-auto">
              <span className="text-gray-300 text-5xl py-4 max-w-md">
                  You don’t have a message selected
                </span>
                <span className="text-gray-300 text-xl max-w-lg">
                  Choose one from your existing messages, or start a new one.
                </span>
              </div>
               
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
