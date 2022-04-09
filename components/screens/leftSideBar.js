import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import AddTweet from "./addTweet";
export default function LeftSideBar(props) {
  const router = useRouter();
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  let isThereNotifications = useSelector((state) => state.notifications.unread);
  const userInfo = useSelector((state) => state.user.value);
  const profileImage = useSelector((state) => state.user.profile_image);

  return (
    <>
      <div className="hidden md:block h-screen sticky top-0 border-r z-40 border-gray-800 w-32 overflow-hidden lg:w-1/4 xl:w-2/6">
        <div className=" flex justify-end">
          <nav className="w-72 text-white space-y-3 hidden lg:block mt-5 px-2">
            <div className=" pb-3 ">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white ml-3"
                fill="currentColor"
              >
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
              </svg>
            </div>
            <Link href="/">
              <a className={props.page==="home"?"block md:flex items-center px-2 py-2 text-xl leading-6 font-semibold rounded-full bg-gray-800 text-blue-300":"block md:flex items-center px-2 py-2 text-xl leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-blue-300"}>
                <svg
                  className="mr-4 h-8 w-8 "
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                  ></path>
                </svg>
                <span className="hidden xl:block">Home</span>
              </a>
            </Link>
            <Link href="/stories">
              <a 
              className={props.page==="stories"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
              <svg className="mr-4 h-8 w-8"  width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  <line x1="13" y1="8" x2="15" y2="8" />  <line x1="13" y1="12" x2="15" y2="12" /></svg>
             
                <span className="hidden md:block">Stories</span>
              </a>
            </Link>
            <Link href="/u/notifications">
              <a 
              className={props.page==="notifications"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
                {isThereNotifications?.length < 1?<svg
                  className="mr-4 h-8 w-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>:<span className="mr-4 relative inline-flex">
                <svg
                  className=" h-8 w-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                </span>}
                <span className="hidden md:block">Notifications</span>
              </a>
            </Link>
            <Link href="/m">
              <a 
              className={props.page==="messages"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
              
                <svg
                  className="mr-4 h-8 w-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="hidden md:block">Messages</span>
              </a>
            </Link>
            <Link href="/u/todos">
              <a 
              className={props.page==="todos"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
              
                <svg
                  className="mr-4 h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>

                <span className="hidden md:block">TODOS</span>
              </a>
            </Link>
            <Link href="/games">
              <a 
              className={props.page==="games"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
              
                <svg
                  className="mr-4 h-8 w-8"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <rect x="2" y="6" width="20" height="12" rx="2" />{" "}
                  <path d="M6 12h4m-2 -2v4" />{" "}
                  <line x1="15" y1="11" x2="15" y2="11.01" />{" "}
                  <line x1="18" y1="13" x2="18" y2="13.01" />
                </svg>
                <span className="hidden md:block">Games</span>
              </a>
            </Link>
            <Link href="/u/[username]" as={`/u/${userInfo.username}`}>
            <a
              className={props.page==="profile"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
              <svg
                className="mr-4 h-8 w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span className="hidden md:block">Profile</span>
            </a>
            </Link>

           
            <button
              className="mt-1 w-full group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"
            >
              <svg
                className="mr-4 h-8 w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="hidden md:block">More</span>
            </button>
            <AddTweet />
          </nav>
          <nav className="text-white space-y-3 lg:hidden mt-5 px-2">
            <div className=" pb-3 ">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white ml-3"
                fill="currentColor"
              >
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
              </svg>
            </div>
            <Link
              href="/"
            >
              <a className={props.page==="home"?"block md:flex items-center px-2 py-2 text-xl leading-6 font-semibold rounded-full bg-gray-800 text-blue-300":"block md:flex items-center px-2 py-2 text-xl leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-blue-300"}>
              <svg
                className=" h-8 w-8 "
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                ></path>
              </svg>
            </a>
            </Link>
            <Link href="/stories">
            
            <a
              className={props.page==="stories"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
            <svg className="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  <line x1="13" y1="8" x2="15" y2="8" />  <line x1="13" y1="12" x2="15" y2="12" /></svg>
             
          
            </a>
            </Link>
            <Link href="/u/notifications">
            <a
              
              className={props.page==="notifications"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
              {isThereNotifications?.length < 1?<svg
                  className=" h-8 w-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>:<span className="relative inline-flex">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                </span>}
            </a>
            </Link>
            
            <Link href="/m">
            <a
              className={props.page==="messages"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
              <svg
                className=" h-8 w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
            </Link>
            <Link href="/u/todos">
            <a
              href="#"
              className={props.page==="todos"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
              <svg
                className=" h-8 w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
            </a>
            </Link>
            <Link href="/games">
              <a 
              className={props.page==="games"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
              <svg
                  className="h-8 w-8"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <rect x="2" y="6" width="20" height="12" rx="2" />{" "}
                  <path d="M6 12h4m-2 -2v4" />{" "}
                  <line x1="15" y1="11" x2="15" y2="11.01" />{" "}
                  <line x1="18" y1="13" x2="18" y2="13.01" />
                </svg>
              
            </a>
            </Link>
            <Link href="/u/[username]" as={`/u/${userInfo.username}`}>
            <a
              className={props.page==="profile"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
              <svg
                className="h-8 w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </a>
            </Link>
            <button
              className="flex justify-center px-3 py-3 rounded-full hover:bg-gray-800 hover:text-blue-300"
            >
              <svg
                className=" h-8 w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>

            <div className="flex cursor-pointer bg-blue-400 rounded-full hover:bg-blue-500 p-4  text-white  rounded-full">
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
            </div>
          </nav>
          {isLoggedIn && (
            <div className="w-72 hidden xl:block absolute bottom-4 cursor-pointer">
              <div className=" flex justify-between hover:bg-gray-800 rounded-full  py-3  ">
                <div className=" group block">
                  <div className="flex items-center px-4">
                    <div>
                      <img
                        className="inline-block h-12 w-12 rounded-full"
                        src={profileImage}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base leading-6 font-medium text-white">
                        {userInfo.firstName + " " + userInfo.lastName}
                      </p>
                      <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @{userInfo.username}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex px-2 flex-col text-white justify-center">
                  <svg
                    className=" h-6 w-6 "
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g>
                      <circle cx="5" cy="12" r="2"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                      <circle cx="19" cy="12" r="2"></circle>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          )}
          {isLoggedIn && (
            <div className=" flex py-3 px-3 cursor-pointer justify-center rounded-full xl:hidden absolute bottom-8 hover:bg-gray-700">
              <img
                className="inline-block h-12 w-12 rounded-full"
                src={profileImage}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
