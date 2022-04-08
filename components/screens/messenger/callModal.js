import { useState, useEffect,useRef, useContext } from "react";
import { SocketContext } from "../../../controllers/utils/socketContext";
import MessengerVideoPlayer from "./videoPlayer";

export default function CallModal(props) {
  const {recievedVideo,sentVideo } = useContext(SocketContext);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
        if (seconds===59) {
            setSeconds(0);
            setMinutes(minutes+1);
        } else {
      setSeconds((seconds) => seconds + 1);}
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="overflow-x-hidden overflow-y-auto fixed w-full h-screen top-0 left-0 z-50 outline-none focus:outline-none">
      <div className="relative  mx-auto w-full h-screen  ">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-screen  bg-dark_one outline-none focus:outline-none">
          <div className="flex items-start justify-between pt-4 px-4 rounded-t ">
            <button
              onClick={() => {
                props.setShowCallModal(false);
              }}
              className="bg-transparent border-0 text-black float-right"
            >
              <span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 rounded-full">
                x
              </span>
            </button>
          </div>
          <div className="flex h-full rounded-lg">
            <div className="group relative w-4/6 rounded-lg m-12 ">
              <div className="absolute top-0 left-0 overflow-hidden w-full pb-3/5 aspect-h-16 aspect-w-9 md:aspect-w-16 md:aspect-h-9  bg-gray-700 shadow border-4 border-gray-700 rounded-xl  ">
              {recievedVideo&&<video playsInline ref={recievedVideo}  className="object-cover" autoPlay />}
              </div>
              <div className="hidden group-hover:flex mx-auto transform -translate-x-1/2 justify-center bg-gray-800/[0.25] w-24 py-3 rounded-xl absolute top-8 left-1/2 ">
                <div className="flex justify-center  my-auto w-4 h-4 rounded-full bg-white">
                  <div className="w-2 h-2 my-auto animate-ping-slow rounded-full bg-red-special"></div>
                </div>
                <span className="my-auto px-2">
                {minutes<10?`0${minutes}`:minutes}:{seconds<10?`0${seconds}`:seconds}
                </span>
              </div>
            </div>
            <div className="relative p-6 flex-auto w-2/6 bg-gray-400"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
