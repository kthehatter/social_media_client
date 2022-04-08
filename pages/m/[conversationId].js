import { useState, useEffect, useRef } from "react";
RecievedMessage;
import Link from "next/link";
import RecievedMessage from "../../components/screens/messenger/recievedMessage";
import { useRouter } from "next/router";
import MessengerSideBar from "../../components/screens/messenger/messengerSideBar";
import MessagesBody from "../../components/screens/messenger/messagesBody";
import { useDispatch, useSelector } from "react-redux";
import {
  addConversations,
  setConversationMessages,
  setConversations,
  setConversationsOffset,
  setMessagesOffset,
} from "../../features/messenger/conversations";
import {
  fetchChatMessagesApiCall,
  fetchConversationsApiCall,
} from "../../controllers/screens/messenger/conversations";

export default function ChatPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { conversationId } = router.query;
  let scrollRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const conversations = useSelector(
    (state) => state.conversations.conversations
  );
  const messagesOffset = useSelector(
    (state) => state.conversations.messagesOffset
  );
  let currentChat = useSelector((state) =>
    state.conversations.conversations.find(
      (conversation) =>
        conversation.conversationDetails.conversation_id == conversationId
    )
  );
  const fetchChatMessages = async (messagesOffset) => {
    try {
      await fetchChatMessagesApiCall(conversationId, messagesOffset)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.conversationMessage) {
              dispatch(
                setConversationMessages({
                  messages: res.data.conversationMessage,
                  conversationId: conversationId,
                })
              );
              dispatch(setMessagesOffset(messagesOffset + 1));
              scrollRef.current?.scrollIntoView();
            }
          } else {
            console.log("response error", res);
            router.push("/m");
          }
        })
        .catch((err) => {
          console.log(err);
          router.push("/m");
        });
    } catch (error) {
      console.log(error);
      router.push("/m");
    }
  };
  const conversationsOffset = useSelector(
    (state) => state.conversations.conversationsOffset
  );
  const fetchConversations = async () => {
    try {
      await fetchConversationsApiCall(
        conversationsOffset,
        conversationId ? conversationId : null
      )
        .then((res) => {
          if (res.status === 200) {
            dispatch(setConversationsOffset(conversationsOffset + 1));
            if (conversationsOffset === 1) {
              dispatch(setConversations(res.data.conversations));
              fetchChatMessages(messagesOffset);
            } else {
              dispatch(addConversations(res.data.conversations));
              fetchChatMessages(messagesOffset);
            }
          } else {
            console.log(res.data.message);
          }
          //setConversationsLength(res.data.total);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchConversations();
  }, [conversationId]);
  
  return (
    <div className="h-screen w-full flex antialiased text-gray-200 bg-dark_one overflow-hidden">
      <div className="h-screen w-full flex antialiased text-gray-200 bg-dark_one overflow-hidden">
        <div className="flex-1 flex flex-col ">
          <div className="p-2 z-20 border-b-2 border-gray-800 flex justify-between">
            <Link href="/">
              <a className=" text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                <svg
                  className="m-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </a>
            </Link>
            <div className="flex flex-row z-20 my-auto">
              <div className="bg-red-600 w-3 h-3 rounded-full mr-2"></div>
              <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
              <div className="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
            </div>
          </div>

          <div className="flex-grow flex flex-row min-h-0">
            <MessengerSideBar conversationId={conversationId} />
            {currentChat&&<MessagesBody
              scrollRef={scrollRef}
              conversationId={conversationId}
              currentChat={currentChat}
            />}
          </div>
        </div>
      </div>
    </div>
  );
}
