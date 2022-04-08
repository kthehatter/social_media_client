import { useContext,useRef,useEffect } from 'react';
import {SocketContext} from '../../../controllers/utils/socketContext'

export default function MessengerVideoPlayer() {
    const videoRef = useRef(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    };
    getUserMedia();
  }, []);
  return (
      <div>
    {videoRef&&<video playsInline ref={videoRef} className="w-full " autoPlay />}
      </div>
  );
}
