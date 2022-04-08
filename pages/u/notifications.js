import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.min.css";

import { useSelector, useDispatch } from "react-redux";
import BottomNavigationBar from "../../components/screens/bottomNavigationBar";
import RightSideBar from "../../components/screens/rightSideBar";
import LeftSideBar from "../../components/screens/leftSideBar";
import Link from "next/link";
import {
  fetchAllNotificationsApiCall,
  fetchUnreadNotificationsApiCall,
} from "../../controllers/screens/user/notifications";
import {
  addAllNotifications,
  addUnreadNotifications,
  setAllOffset,
  setUnreadOffset,
} from "../../features/user/notifications";
import NotificationTemplate from "../../components/notifications/notificationTemplate";
export default function Notifications() {
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);
  const [noMoreUnreadNotifications, setNoMoreUnreadNotifications] =
    useState(false);
  const [noMoreAllNotifications, setNoMoreAllNotifications] = useState(false);
  let unreadOffset = useSelector((state) => state.notifications.unreadOffset);
  let allOffset = useSelector((state) => state.notifications.allOffset);
  let unreadNotifications = useSelector((state) => state.notifications.unread);
  let allNotifications = useSelector((state) => state.notifications.all);
  const fetchAllNotifications = async (allOffset) => {
    setShowAll(true);
    if (!noMoreUnreadNotifications) {
      try {
        await fetchAllNotificationsApiCall(allOffset)
          .then((res) => {
            if (res.status === 200) {
              if (res.data.notifications?.length > 0) {
                dispatch(addAllNotifications(res.data.notifications));
                dispatch(setAllOffset(allOffset + 1));
              } else {
                setNoMoreAllNotifications(true);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const fetchUnreadNotifications = async (unreadOffset) => {
    setShowAll(false);
    if (!noMoreAllNotifications) {
      try {
        await fetchUnreadNotificationsApiCall(unreadOffset)
          .then((res) => {
            if (res.status === 200) {
                if (res.data.unreadNotifications?.length > 0) {
                dispatch(addUnreadNotifications(res.data.unreadNotifications));
              } else {
                setNoMoreUnreadNotifications(true);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {}
    }
  };
  const handleLoadMore = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop ===
      e.target.scrollingElement.scrollHeight
    ) {
      if (showAll && noMoreAllNotifications === false) {
        fetchAllNotifications(allOffset + 1);
        dispatch(setAllOffset(allOffset + 1));
      } else if (!showAll && noMoreUnreadNotifications === false) {
        fetchUnreadNotifications(unreadOffset + 1);
        dispatch(setUnreadOffset(unreadOffset + 1));
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleLoadMore);
    return () => {
      window.removeEventListener("scroll", handleLoadMore);
    };
  })
  return (
    <div className="relative bg-dark_one">
      <div className=" flex justify-center   w-full">
        <LeftSideBar page="notifications" />

        <div className="relative w-full  lg:w-3/4 xl:w-3/6">
          <div className="sticky top-0 z-30">
            <div className="  bg-dark_one backdrop-brightness-50  flex">
              <div className=" flex-1 mx-2">
                <h2 className="px-4 py-2 text-xl font-semibold text-white">
                  Notifications
                </h2>
              </div>
              <div className="flex-1 px-4 py-2 mx-2">
                  <button className=" text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                  <svg className="h-8 w-8"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>

                  </button>
              </div>
            </div>
            <div className="bg-dark_one border-b border-gray-700 backdrop-brightness-50 flex cursor-pointer">
              <div
                onClick={() => fetchUnreadNotifications()}
                className="  pt-2 w-1/2 flex justify-center hover:bg-gray-800 "
              >
                <h2
                  className={
                    showAll
                      ? "px-4 py-2 text-base font-semibold text-white"
                      : "px-4 py-2 text-base border-b-4 border-light_blue_logo font-semibold text-white"
                  }
                >
                  Unread
                </h2>
              </div>
              <div
                onClick={() => fetchAllNotifications(true)}
                className="  pt-2 w-1/2 flex justify-center hover:bg-gray-800 "
              >
                <h2
                  className={
                    showAll
                      ? "px-4 py-2 text-base border-b-4 border-light_blue_logo font-semibold text-white"
                      : "px-4 py-2 text-base  font-semibold text-white"
                  }
                >
                  All
                </h2>
              </div>
            </div>
           
          </div>
          {/* Notifications list */}
          {!showAll&&unreadNotifications?.map((notificationDetails, index) => (
            <div key={index}>
              <NotificationTemplate notificationDetails={notificationDetails} />
            </div>
          ))}
          {showAll&&allNotifications?.map((notificationDetails, index) => (
            <div key={index}>
              <NotificationTemplate showAll={showAll} notificationDetails={notificationDetails} />
            </div>
          ))}
        </div>

        <RightSideBar />
      </div>
      {/* bottom sheet */}
      <div className="md:hidden absolute w-full  bottom-0 z-50 bg-dark_one backdrop-brightness-50 ">
        <BottomNavigationBar />
      </div>

      {/* <div className="absolute bottom-0 h-20 w-full bg-dark_three sm:flex sm:items-center sm:justify-center">
        
      </div> */}
    </div>
  );
}
