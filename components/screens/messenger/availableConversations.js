import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
export default function AvailableConversations(props) {
  const onlineUsers = useSelector((state) => state.onlineUsers.onlineUsers);
  const latestMessage = props.conversation.latest_message
    ? props.conversation.latest_message
    : "Click to start conversation";
  const numberOfUnreadMessages = props.conversation.unread_messages
    ? props.conversation.unread_messages
    : 0;
  const recieverID =
    props.conversation.members[0] === props.userID
      ? props.conversation.members[1]
      : props.conversation.members[0];
  const recieverName =
    props.conversation.members[0] === props.userID
      ? props.conversation.members_name[1]
      : props.conversation.members_name[0];
  const [isOnline, setIsOnline] = useState(false);
  //check if user is online
  const checkIfUserIsOnline = () => {
    if (onlineUsers) {
      for (let index = 0; index < onlineUsers.length; index++) {
        const onlineUser = onlineUsers[index];
        if (onlineUser.user_id === recieverID) {
          setIsOnline(true);
          break;
        }
      }
    }
  };
  useEffect(() => {
    checkIfUserIsOnline();
  }, [onlineUsers]);

  return (
    <Fragment>
      <div className="flex justify-between items-center my-2 p-1 md:p-3 hover:bg-gray-800 rounded-lg relative">
        <div className="w-14 h-14 md:w-16 md:h-16 relative flex flex-shrink-0">
          <img
            className="shadow-md rounded-full w-full h-full object-cover"
            src={props.conversation.other_member_image}
            alt=""
          />
          <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
            <div
              className={
                isOnline
                  ? `bg-green-500 rounded-full w-3 h-3`
                  : `bg-gray-500 rounded-full w-3 h-3`
              }
            ></div>
          </div>
        </div>
        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
          <p className={numberOfUnreadMessages > 0 ? `font-bold` : ``}>
            {recieverName}
          </p>
          <div
            className={
              numberOfUnreadMessages > 0
                ? `flex justify-between text-sm font-bold`
                : `flex justify-between text-sm text-gray-600`
            }
          >
            <div className="w-20">
              <p className="truncate">{latestMessage}</p>
            </div>
            <p className="ml-2 whitespace-no-wrap">
              {format(props.conversation.latest_message_date)}
            </p>
          </div>
        </div>
        {numberOfUnreadMessages > 0 && (
          <div className="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"></div>
        )}
      </div>
    </Fragment>
  );
}
