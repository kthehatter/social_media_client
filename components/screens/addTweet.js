import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostPublisher from "./postPublisher";
export default function AddTweet() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
        <button
        onClick={() => setShowModal(true)}
         className="flex w-40 cursor-pointer bg-blue-400 hover:bg-blue-500 w-full mt-5 text-white font-bold py-2 px-4 rounded-full">
                <svg
                  className=" h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
                  </g>
                </svg>
                <span className="hidden lg:block pl-4">Tweet</span>
              </button>
              {showModal ? (
              <>
                <div className="cursor-default flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative  my-6 mx-auto w-full md:max-w-5xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-dark_blue_logo outline-none focus:outline-none">
                      <div className="flex items-start justify-between pt-4 px-4 rounded-t ">
                        <button
                          className="bg-transparent border-0 text-black float-right"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 rounded-full">
                            x
                          </span>
                        </button>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <PostPublisher setShowModal={setShowModal} />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </>
            ) : null}
    </>
  );
}