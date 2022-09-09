

import Link from "next/link";
import { useSelector } from "react-redux";
export default function ShowMoreModal(props) {
  const userInfo = useSelector((state) => state.user.value);
  return(
    <div className="relative mx-auto w-full ">
      <div className="border-0 top-0 h-screen relative flex flex-col w-full bg-dark_blue_logo outline-none focus:outline-none">
        <div className="flex items-start justify-start py-4 px-4 rounded-t ">
          <button
            className="bg-transparent border-0 text-black float-right"
          >
            <span 
          onClick={props.setShowMoreModal(false)}
            className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 rounded-full">
              x
            </span>
          </button>
         
        </div>
       
        <nav className="w-72 text-white space-y-3 px-2 pt-20">
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
            <Link href="/stories">
            
            <a
              className={props.page==="stories"?"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full bg-gray-800 text-blue-300":"mt-1 group flex items-center px-2 py-2 text-xl  leading-6  rounded-full hover:bg-gray-800 hover:text-blue-300"}>
            <svg className="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  <line x1="13" y1="8" x2="15" y2="8" />  <line x1="13" y1="12" x2="15" y2="12" /></svg>
             
          
              <span className='px-4'>Stories</span>
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
              <span className='px-4'>Todos</span>
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
                <span className='px-4'>Games</span>
              
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
              <span className='px-4'>Profile</span>
            </a>
            </Link>
          </nav>
      </div>
    </div>
)}