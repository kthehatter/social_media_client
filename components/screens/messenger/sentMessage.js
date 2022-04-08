import React, { Fragment, useState, useRef } from "react";
import { format } from "timeago.js";
const like =
  "https://res.cloudinary.com/khalilay/image/upload/v1648668226/Social%20media/g/like_a1deyv.png";
const heart =
  "https://res.cloudinary.com/khalilay/image/upload/v1648668226/Social%20media/g/heart_s4rvlt.png";
const cry =
  "https://res.cloudinary.com/khalilay/image/upload/v1648668226/Social%20media/g/cry_gdtbzu.png";
const surprised =
  "https://res.cloudinary.com/khalilay/image/upload/v1648668226/Social%20media/g/surprised_onkbrw.png";
const laugh =
  "https://res.cloudinary.com/khalilay/image/upload/v1648668226/Social%20media/g/laugh_j86ypt.png";
const angry =
  "https://res.cloudinary.com/khalilay/image/upload/v1648668226/Social%20media/g/angry_rjepj8.png";
import useClickOutside from "../../utils/useClickOutside";
export default function SentMessage(props) {
  let [showReactionDropup, setShowReactionDropup] = useState(false);
  let reactionButtonRef = useRef();
  let openedEmojisRef = useClickOutside(() => {
    setShowReactionDropup(false);
  }, reactionButtonRef);
  const nextMessageIsSent =
    props.nextMessage && props.nextMessage.sender_id === props.userID
      ? true
      : false;
  if (props.message.message_type === "text") {
    return (
      <div>
        <div className="flex flex-row my-1 justify-end">
          <div className="messages text-sm text-white grid grid-flow-row gap-2">
            <div className="flex items-center flex-row-reverse group">
            <div>
            <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                {props.message.message}
              </p>
            </div>
              
              <div className="flex">
                <button
                  type="button"
                  className={
                    showReactionDropup
                      ? `flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2`
                      : `hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2`
                  }
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="w-full h-full fill-current"
                  >
                    <path
                      d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
     M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
    C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className={
                    showReactionDropup
                      ? `flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2`
                      : `hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2`
                  }
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="w-full h-full fill-current"
                  >
                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                  </svg>
                </button>
                <div className="dropup relative">
                  <button
                    onClick={() => {
                      setShowReactionDropup(!showReactionDropup);
                    }}
                    ref={reactionButtonRef}
                    type="button"
                    className={
                      showReactionDropup
                        ? `flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2`
                        : `hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2`
                    }
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full fill-current"
                    >
                      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </button>
                  {showReactionDropup === true && (
                    <div
                      ref={openedEmojisRef}
                      className="bg-gray-800 text-white rounded-lg shadow-lg absolute mt-2 right-0
                    min-w-max
                    flex
                    z-50
                    float-right
                    "
                    >
                      <div
                        className="mx-2 my-2 cursor-pointer"
                        onClick={() => {
                          props.addReaction(props.message.id, "heart");
                          setShowReactionDropup(false);
                        }}
                      >
                        <img
                          src={heart}
                          alt="heart"
                          className="w-6 h-6 md:w-8 md:h-8"
                        />
                      </div>
                      <div
                        className="mx-2 my-2 cursor-pointer"
                        onClick={() => {
                          props.addReaction(props.message.id, "laugh");
                          setShowReactionDropup(false);
                        }}
                      >
                        <img
                          src={laugh}
                          alt="laugh"
                          className="w-6 h-6 md:w-8 md:h-8"
                        />
                      </div>
                      <div
                        className="mx-2 my-2 cursor-pointer"
                        onClick={() => {
                          props.addReaction(props.message.id, "surprised");
                          setShowReactionDropup(false);
                        }}
                      >
                        <img
                          src={surprised}
                          alt="surprised"
                          className="w-6 h-6 md:w-8 md:h-8"
                        />
                      </div>
                      <div
                        className="mx-2 my-2 cursor-pointer"
                        onClick={() => {
                          props.addReaction(props.message.id, "cry");
                          setShowReactionDropup(false);
                        }}
                      >
                        <img
                          src={cry}
                          alt="cry"
                          className="w-6 h-6 md:w-8 md:h-8"
                        />
                      </div>
                      <div
                        className="mx-2 my-2 cursor-pointer"
                        onClick={() => {
                          props.addReaction(props.message.id, "angry");
                          setShowReactionDropup(false);
                        }}
                      >
                        <img
                          src={angry}
                          alt="angry"
                          className="w-6 h-6 md:w-8 md:h-8"
                        />
                      </div>
                      <div
                        className="mx-2 my-2 cursor-pointer"
                        onClick={() => {
                          props.addReaction(props.message.id, "like");
                          setShowReactionDropup(false);
                        }}
                      >
                        <img
                          src={like}
                          alt="like"
                          className="w-6 h-6 md:w-8 md:h-8"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {nextMessageIsSent === false && (
              <p className="text-right text-sm text-gray-500">
                {format(props.message.created_at)}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Fragment>
        <div className="flex flex-row justify-end">
          <div className="messages text-sm text-white grid grid-flow-row gap-2">
            <div className="flex items-center flex-row-reverse group">
              <a
                className="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md"
                href="#"
              >
                <img
                  className="absolute shadow-md w-full h-full rounded-l-lg object-cover"
                  src={props.message.message_image}
                  alt="hiking"
                />
              </a>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {!nextMessageIsSent && (
          <p className=" text-sm text-gray-500">
            {format(props.message.created_at)}
          </p>
        )}
      </Fragment>
    );
  }
}
