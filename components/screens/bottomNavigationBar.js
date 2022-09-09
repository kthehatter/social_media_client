import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function BottomNavigationBar() {
  let isThereNotifications = useSelector((state) => state.notifications.unread);
  const [showMoreModal,setShowMoreModal] = useState(false);
  return (
    <>
        <hr className="border-gray-800" />
        <div className="flex">
          <div className="flex-1 px-4 py-2 mx-2">
          <Link href='/'>
          <a
              className=" p-1 text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right"
            >
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
            
          </div>
          <div className="flex-1 px-4 py-2 mx-2">
          <Link href='/m'>
          <a
              className=" p-1 text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right"
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
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            </a>
          </Link>
            
          </div>
          <div className="flex-1 px-4 py-2 mx-2">
          <Link href='/u/notifications'>
          <a
              className=" p-1 text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right"
            >
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
                </svg>:<span className="m relative inline-flex">
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
            </a>
          </Link>
            
          </div>
          <div className="flex-1 px-4 py-2 mx-2">
          <button
             onClick={()=>setShowMoreModal(true)}
              className=" p-1 text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right"
            >
            <svg className=" h-8 w-8 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="19" cy="12" r="1" />  <circle cx="5" cy="12" r="1" /></svg>
              
            </button>
          
            
          </div>
      </div>
    </>
  );
}
