import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format} from 'timeago.js';
export default function SelectedConversation(props) {
  const onlineUsers = useSelector((state) => state.onlineUsers.onlineUsers);
  const chatMessages = props.chatMessages;
  const recieverID = props.conversation.members[0]===props.userID?props.conversation.members[1]:props.conversation.members[0];
   const recieverName = props.conversation.members[0]===props.userID?props.conversation.members_name[1]:props.conversation.members_name[0];
   const [isOnline, setIsOnline] = useState(false);
  //check if user is online
  
  useEffect(() => {
    const checkIfUserIsOnline = () => {
        if (onlineUsers?.length>0) {
        for (let index = 0; index < onlineUsers.length; index++) {
    const onlineUser = onlineUsers[index];
        if (onlineUser[0]&&onlineUser[0].user_id == recieverID) {
        setIsOnline(true);
      break;
    }
  }
}
};
    checkIfUserIsOnline();
  }, [onlineUsers, recieverID]);
   return(
    <Fragment >
    <div className="flex justify-between items-center p-1 md:p-3 my-2 bg-gray-800 rounded-lg relative">
                        <div className="w-14 h-14 md:w-16 md:h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src={props.conversation.other_member_image}
                                 alt=""
                            />
                            <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                <div className={isOnline?`bg-green-500 rounded-full w-3 h-3`:`bg-gray-500 rounded-full w-3 h-3`}></div>
                            </div>
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p >{recieverName}</p>
                            <div className="flex justify-between text-sm text-gray-600">
                                <div className="w-20">
                                    <p className="truncate">{chatMessages.length>0?chatMessages[chatMessages.length-1].message:'Chat now...'}</p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">{chatMessages.length>0?format(chatMessages[chatMessages.length-1].created_at):''}</p>
                            </div>
                        </div>
                    </div>

    </Fragment>
)
}