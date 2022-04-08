import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConversationsApiCall } from "../../../controllers/screens/messenger/conversations";
import {
  addConversations,
  setConversations,
  setConversationsOffset,
} from "../../../features/messenger/conversations";
import AvailableConversations from "./availableConversations";
import SelectedConversation from "./selectedConversation";
import { useRouter } from "next/router";
export default function MessengerSideBar(props) {
  const conversationId = props.conversationId;
  const dispatch = useDispatch();
  const conversations = useSelector(
    (state) => state.conversations.conversations
  );
  const user = useSelector((state) => state.user.value);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  let [usersToSearch, setUsersToSearch] = useState([]);
  let [filteredUsers, setFilteredUsers] = useState([]);
  const conversationsOffset = useSelector(
    (state) => state.conversations.conversationsOffset
  );
  const fetchConversations = async () => {
    try {
      await fetchConversationsApiCall(conversationsOffset,conversationId?conversationId:null)
        .then((res) => {
          if (res.status === 200) {
            dispatch(setConversationsOffset(conversationsOffset + 1));
            if (conversationsOffset === 1) {
              dispatch(setConversations(res.data.conversations));
            } else {
              dispatch(addConversations(res.data.conversations));
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
  }, []);
  return (
    <section className="flex flex-col flex-none overflow-auto w-24 hover:w-64 md:hover:w-2/5 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
      <div className="header p-4 flex flex-row justify-between items-center flex-none">
        <div className="w-16 h-16 relative flex flex-shrink-0">
          <img
            className="rounded-full w-full h-full object-cover"
            alt="ravisankarchinnam"
            src="https://res.cloudinary.com/khalilay/image/upload/v1646914523/Social%20media/g/logo_v8ouux.png"
          />
        </div>
        <p className="text-md font-bold hidden md:block group-hover:block">
          Messenger
        </p>
        <button
          type="button"
          onClick={() => {
            setShowAddUserModal(true);
            fetchUsersList();
          }}
          className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block"
        >
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
          </svg>
        </button>
      </div>
      {showAddUserModal ? (
        <>
          <div className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal md:h-full md:inset-0">
            <div
              ref={openedUserModelRef}
              className="relative pr-4 w-full max-w-md h-full md:h-auto"
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <p className="text-md py-1 font-semibold">To:</p>
                  <input
                    type="text"
                    className="appearance-none bg-transparent border-none w-full font-semibold text-gray-500 mr-3 py-2 px-2 leading-tight focus:outline-none"
                    placeholder=""
                    aria-label="Type user name"
                    onChange={(e) => {
                      setFilteredUsers(
                        usersToSearch.filter(
                          (filtterUser) =>
                            filtterUser.user_id !== user.id &&
                            (filtterUser.first_name
                              .toLowerCase()
                              .includes(e.target.value.toLowerCase()) ||
                              filtterUser.last_name
                                .toLowerCase()
                                .includes(e.target.value.toLowerCase()) ||
                              filtterUser.email
                                .toLowerCase()
                                .includes(e.target.value.toLowerCase()))
                        )
                      );
                    }}
                  />
                  <button
                    className=" ml-auto bg-transparent border-0 text-gray-100 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowAddUserModal(false)}
                  >
                    <span className=" text-gray-300 h-6 w-6 text-xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {filteredUsers.length > 0 ? (
                    <div className="overflow-y-auto h-64">
                      {filteredUsers.map((filtterUser, index) => (
                        <div
                          className="flex items-center p-2 border-b border-solid border-gray-800 cursor-pointer"
                          key={index}
                          onClick={() => {
                            startConversationWithUser(filtterUser);
                          }}
                        >
                          <div className="w-10 h-10 rounded-full mr-4">
                            <img
                              src={`http://localhost:3306/api/authentication/users/${filtterUser.user_id}/avatar`}
                              alt="Avatar"
                              className="shadow-md rounded-full w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-md font-semibold">
                              {filtterUser.first_name} {filtterUser.last_name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      No results found.
                    </p>
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end py-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowAddUserModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => {
              setShowAddUserModal(false);
            }}
          ></div>
        </>
      ) : null}
      <div className="search-box p-4 flex-none">
        <form>
          <div className="relative">
            <label>
              <input
                className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                type="text"
                placeholder="Search Messenger"
              />
              <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    fill="#bbb"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </span>
            </label>
          </div>
        </form>
      </div>
      <div className="active-users flex flex-row p-2 overflow-auto w-0 min-w-full">
        <div className="text-sm text-center mr-4">
          <button
            className="flex flex-shrink-0 focus:outline-none block bg-gray-800 text-gray-600 rounded-full w-20 h-20"
            type="button"
          >
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
              <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" />
            </svg>
          </button>
          <p>Your Story</p>
        </div>
        <div className="text-sm text-center mr-4">
          <div className="p-1 border-4 border-blue-600 rounded-full">
            <div className="w-16 h-16 relative flex flex-shrink-0">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt=""
              />
            </div>
          </div>
          <p>Anna</p>
        </div>
        <div className="text-sm text-center mr-4">
          <div className="p-1 border-4 border-transparent rounded-full">
            <div className="w-16 h-16 relative flex flex-shrink-0">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt=""
              />
              <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                <div className="bg-green-500 rounded-full w-3 h-3"></div>
              </div>
            </div>
          </div>
          <p>Jeff</p>
        </div>
        <div className="text-sm text-center mr-4">
          <div className="p-1 border-4 border-blue-600 rounded-full">
            <div className="w-16 h-16 relative flex flex-shrink-0">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/women/42.jpg"
                alt=""
              />
            </div>
          </div>
          <p>Cathy</p>
        </div>
        <div className="text-sm text-center mr-4">
          <div className="p-1 border-4 border-transparent rounded-full">
            <div className="w-16 h-16 relative flex flex-shrink-0">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/women/87.jpg"
                alt=""
              />
              <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                <div className="bg-green-500 rounded-full w-3 h-3"></div>
              </div>
            </div>
          </div>
          <p>Madona</p>
        </div>
        <div className="text-sm text-center mr-4">
          <div className="p-1 border-4 border-transparent rounded-full">
            <div className="w-16 h-16 relative flex flex-shrink-0">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/women/23.jpg"
                alt=""
              />
              <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                <div className="bg-green-500 rounded-full w-3 h-3"></div>
              </div>
            </div>
          </div>
          <p>Emma</p>
        </div>
        <div className="text-sm text-center mr-4">
          <div className="p-1 border-4 border-blue-600 rounded-full">
            <div className="w-16 h-16 relative flex flex-shrink-0">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt=""
              />
            </div>
          </div>
          <p>Mark</p>
        </div>
        <div className="text-sm text-center mr-4">
          <div className="p-1 border-4 border-blue-600 rounded-full">
            <div className="w-16 h-16 relative flex flex-shrink-0">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt=""
              />
            </div>
          </div>
          <p>Eva</p>
        </div>
        <div className="text-sm text-center mr-4">
          <div className="p-1 border-4 border-transparent rounded-full">
            <div className="w-16 h-16 relative flex flex-shrink-0">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/men/31.jpg"
                alt=""
              />
              <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                <div className="bg-green-500 rounded-full w-3 h-3"></div>
              </div>
            </div>
          </div>
          <p>Max</p>
        </div>
        <div className="text-sm text-center mr-4">
          <div className="p-1 border-4 border-blue-600 rounded-full">
            <div className="w-16 h-16 relative flex flex-shrink-0">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/men/81.jpg"
                alt=""
              />
            </div>
          </div>
          <p>Adam</p>
        </div>
      </div>
      <div className="contacts p-2 flex-1 overflow-y-scroll">
        {conversations &&
          conversations.length > 0 &&
          conversations.map((conversation, index) => {
            const url = `/m/${conversation.conversationDetails.conversation_id}`;

            return conversationId &&
              conversationId ==
                conversation.conversationDetails.conversation_id ? (
              <div key={`conversation`+index} className="cursor-pointer">
                <SelectedConversation
                  chatMessages={
                    conversation.chatMessages ? conversation.chatMessages : []
                  }
                  userID={user.user_id}
                  conversation={conversation.conversationDetails}
                />
              </div>
            ) : (
              <Link key={`conversation` + index} href={url}>
                <a className="cursor-pointer">
                  {" "}
                  <AvailableConversations
                    userID={user.user_id}
                    conversation={conversation.conversationDetails}
                  />
                </a>
              </Link>
            );
          })}
      </div>
    </section>
  );
}
