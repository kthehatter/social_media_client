import Link from "next/link";
export default function BottomNavigationBar() {
  return (
    <>
        <hr className="border-gray-800" />
        <div className="flex">
          
          <div className="flex-1 px-4 py-2 mx-2">
          <Link href='/'>
          <a
              href=""
              className=" p-1 text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8"><g><path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path><path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path></g></svg>
            </a>
          </Link>
            
          </div>
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
          <Link href='/'>
          <a
              href=""
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
          <Link href='/'>
          <a
              href=""
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
      </div>
    </>
  );
}
