import { useRouter } from "next/router";
import { createContext, useState, useRef, useEffect } from "react";
import Peer from "simple-peer";
import { userTokenValidationApiCall } from "../screens/user/Auth";
const SocketContext = createContext();
import socket from "./Socket";
const ContextProvider = ({ children }) => {
  const router = useRouter();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);
  const [callerInfo, setCallerInfo] = useState(null);
  const [callerSignal, setCallerSignal] = useState(null);
  const [isReceivingCall, setIsReceivingCall] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [me, setMe] = useState(socket.id);
  
  const [notificationSound, setNotificationSound] = useState(null);
  const [ringtone, setRingtone] = useState(null);
  const sentVideo = useRef();
  const recievedVideo = useRef();
  const connectionRef = useRef();
  const verifyUser = async () => {
    try {
      await userTokenValidationApiCall()
        .then((res) => {
          if (res.status === 200) {
            if (router.pathname === "/u/login"||router.pathname === "/u/register") {
              router.push("/");
            }
          } else {
            if (router.pathname !== "/u/login"||router.pathname !== "/u/register") {
              router.push("/u/login");
            }
          }
        })
        .catch((err) => {
          console.log(err);
          if (router.pathname !== "/u/login"||router.pathname !== "/u/register") {
            router.push("/u/login");
          }
        });
    } catch (err) {
      console.log(err);
      if (router.pathname !== "/u/login"||router.pathname !== "/u/register") {
        router.push("/u/login");
      }
    }
  };
  useEffect(() => {
    
    verifyUser();
  }, []);
  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: callerInfo });
    });

    peer.on("stream", (currentStream) => {
      recievedVideo.current.srcObject = currentStream;
    });

    peer.signal(callerSignal);

    connectionRef.current = peer;
  };

  const callUser = async(callType, conversationId, callerInfo, recieverId) => {
   //getting user webcam connection
    await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    }).then((stream) => {
      setStream(stream);
      if (stream) {
        sentVideo.current.srcObject = stream;
      }
    }).catch((err) => {
      console.log(err);
    });
    
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        conversationId: conversationId,
        callType: callType,
        callerInfo: callerInfo,
        signalData: data,
        recieverId: recieverId,
      });
    });

    peer.on("stream", (currentStream) => {
      recievedVideo.current.srcObject = currentStream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        userIsLoggedIn,
        notificationSound,
        setRingtone,
        setNotificationSound,
        setCallerSignal,
        ringtone,
        callerInfo,
        setMe,
        setStream,setCallerSignal,setCallerInfo,
        isReceivingCall,
        setIsReceivingCall,
        call,
        callAccepted,
        sentVideo,
        recievedVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
