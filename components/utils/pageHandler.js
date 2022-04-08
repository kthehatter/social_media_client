import { useContext, useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import Notify from "../../controllers/utils/notifier";
import ReceivingCallModal from "../../components/screens/messenger/receivingCallModal";
import CallModal from "../../components/screens/messenger/callModal";
import {
  addUnreadNotification,
  addUnreadNotifications,
  setUnreadOffset,
} from "../../features/user/notifications";
import socket from "../../controllers/utils/Socket";
import { fetchUnreadNotificationsApiCall } from "../../controllers/screens/user/notifications";
import { addOnlineUser, setOnlineUsers } from "../../features/user/onlineUsers";
import {
  setUserInfo,
  setUserLoggedIn,
  setUserProfilePicture,
} from "../../features/user/user";
import { userTokenValidationApiCall } from "../../controllers/screens/user/Auth";
import { addConversationMessages } from "../../features/messenger/conversations";
import { handleRecievedCall } from "../../controllers/utils/handleCall";
import { SocketContext } from "../../controllers/utils/socketContext";
function PageHandler({ Component, pageProps }) {
  const dispatch = useDispatch();
  const {
    callerInfo,
    setNotificationSound,
    setRingtone,
    setMe,
    setStream,
    setCallerSignal,
    setCallerInfo,
    notificationSound,
    ringtone,
    isReceivingCall,
    setIsReceivingCall,
    setCallAccepted,
    callAccepted,
    sentVideo,
    recievedVideo,
    callEnded,
    call,
  } = useContext(SocketContext);
  const conversationsOffset = useSelector(
    (state) => state.conversations.conversationsOffset
  );

  let unreadOffset = useSelector((state) => state.notifications.unreadOffset);
  const fetchUnreadNotifications = async () => {
    try {
      await fetchUnreadNotificationsApiCall(unreadOffset)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.unreadNotifications?.length > 0) {
              dispatch(addUnreadNotifications(res.data.unreadNotifications));
              dispatch(setUnreadOffset(unreadOffset + 1));
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    setNotificationSound(
      new Audio(
        "https://res.cloudinary.com/khalilay/video/upload/v1648836410/Social%20media/g/notification_li84sh.mp3"
      )
    );
    setRingtone(
      new Audio(
        "https://res.cloudinary.com/khalilay/video/upload/v1649078821/Social%20media/g/mixkit-marimba-ringtone-1359_wmlvk2.mp3"
      )
    );
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const accessToken = localStorage.getItem("accessToken");
      socket.emit("addUser", { accessToken: accessToken });
      if (unreadOffset === 1) {
        fetchUnreadNotifications();
      }
      socket.on("getUsers", (onlineUsers) => {
        dispatch(addOnlineUser(onlineUsers));
      });
      socket.on("recieveMessage", (data) => {
        if (data.message) {
          dispatch(
            addConversationMessages({
              messages: data.message,
              conversationId: data.conversation_id,
            })
          );
          if (document.visibilityState === "hidden") {
            notificationSound.play();
          }
        }
      });

      if (socket?.id) {
        setMe(socket.id);
      }
      socket.on("callReceiving", async (data) => {
        ringtone.play();
        setCallerInfo(data.callerInfo);
        setIsReceivingCall(true);
        setCallerSignal(data.signalData);
        if (data.callType === "video") {
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
        } else {
          await navigator.mediaDevices.getUserMedia({
            audio: true,
          }).then((stream) => {
            setStream(stream);
            sentVideo.current.srcObject = stream;
          }).catch((err) => {
            console.log(err);
          });
        }
        
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    socket.on("notificationRecieved", (notificationInfo) => {
      dispatch(addUnreadNotification(notificationInfo));

      Notify(notificationInfo);
    });
  }, []);
  useEffect(() => {
    socket.on("notificationRecieved", (notificationInfo) => {
      dispatch(addUnreadNotification(notificationInfo));

      Notify(notificationInfo);
    });
  }, []);
  const verifyUser = async () => {
    try {
      await userTokenValidationApiCall()
        .then((res) => {
          if (res.status === 200) {
            dispatch(setUserLoggedIn(true));
            dispatch(setUserInfo(res.data.user));
            dispatch(setUserProfilePicture(res.data.profile_picture));
            return true;
          } else {
            dispatch(setUserLoggedIn(false));
            return false;
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(setUserLoggedIn(false));
          return false;
        });
    } catch (err) {
      console.log(err);
      dispatch(setUserLoggedIn(false));
      return false;
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      console.log("logged in");
    } else {
      verifyUser();
    }
  }, []);
  return (
    <>
      {isReceivingCall && (
        <ReceivingCallModal
          callerInfo={callerInfo}
        />
      )}
      {callAccepted && (
        <CallModal
          callerInfo={callerInfo}
        />
      )}
      <Component {...pageProps} />
    </>
  );
}
export default PageHandler;
