/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useRef } from "react";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { sharePostApiCall } from "../../controllers/screens/posts/sharePost";
import PostPublisher from "./postPublisher";
import QuotingModal from "./quotingModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ReShareDropDown(props) {
  let [isQuoting, setIsQuoting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const cancelButtonRef = useRef(null);
  const postId = props.postDetails.post_id;
  const sharePost = async (PostIsShared) => {
    const body = { postId, PostIsShared };
    await sharePostApiCall(body)
      .then((res) => {
        if (res.status === 200) {
          // do something
          PostIsShared
            ? props.setSharesNumber(props.sharesNumber - 1)
            : props.setSharesNumber(props.sharesNumber + 1);
          PostIsShared ? props.setIsShared(false) : props.setIsShared(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
<Menu
      as="div"
      className={
        props.isShared
          ? "relative focus:outline-none  inline-block flex-1 flex items-center text-white text-xs text-green-400 transition duration-350 ease-in-out"
          : "relative focus:outline-none inline-block flex-1 flex items-center text-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out"
      }
    >
      <div>
        <Menu.Button className="relative flex">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
            <g>
              <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
            </g>
          </svg>
          {props.sharesNumber}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={props.isLast ? " origin-top-right z-50 absolute -top-20 right-0 mt-2 w-30 rounded-md shadow-lg border border-gray-500 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none" : " origin-top-right z-50 absolute top-0 right-0 mt-2 w-30 rounded-md shadow-lg border border-gray-500 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"}>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => sharePost(props.isShared)}
                  className="flex px-4 py-2 w-full border-b border-gray-500 hover:bg-gray-700 text-gray-300 hover:text-green-400"
                >
                  <svg
                    className="h-6 w-6 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7" />
                  </svg>
                  <span className="block px-4 text-base	  ">
                    {props.isShared ? `Undo Share` : `share`}
                  </span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
              className="flex px-4 py-2 hover:bg-gray-700 w-full text-gray-300 hover:text-green-400"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <svg
                className="h-6 w-6 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />{" "}
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
              <span className="block px-4 text-base	  ">Quote</span>
            </button>
              )}
            </Menu.Item>
            
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
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
                        <QuotingModal postDetails={props.postDetails} setShowModal={setShowModal} />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </>
            ) : null}
    </>
    
  );
}
