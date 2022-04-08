import axios from "axios";
const authBaseURL = "http://localhost:3306/api/web/messenger/conversations/";
export const fetchConversationsApiCall = async (conversationsOffset,selectedConversationId) => {
const accessToken = localStorage.getItem("accessToken");
const accessPoint = authBaseURL + conversationsOffset+"/"+selectedConversationId;
  return await axios
    .get(
      accessPoint,
      {
        headers: {
          "Content-Type": "application/json",
          accessToken: accessToken,
        },
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export const fetchChatMessagesApiCall = async (conversationID,pageNumber) => {
const accessToken = localStorage.getItem("accessToken");
const accessPoint = authBaseURL + "messages/"+conversationID+"/"+pageNumber;
  return await axios
    .get(
      accessPoint,
      {
        headers: {
          "Content-Type": "application/json",
          accessToken: accessToken,
        },
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export const sendChatMessageApiCall = async (conversationID,message,messageType) => {
const accessToken = localStorage.getItem("accessToken");
const accessPoint = authBaseURL + "addmessage";
  return await axios
    .post(
      accessPoint,
      {
        conversationID: conversationID,
        message: message,
        messageType: messageType,
      },
      {
        headers: {
          "Content-Type": "application/json",
          accessToken: accessToken,
        },
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export const startConversationWithUserApiCall = async (userToConverseWith) => {
const accessToken = localStorage.getItem("accessToken");
const accessPoint = authBaseURL + "conversation/"+userToConverseWith.user_id;
  return await axios
    .post(
      accessPoint,
      {
        userToConverseWith: userToConverseWith,
      },
      {
        headers: {
          "Content-Type": "application/json",
          accessToken: accessToken,
        },
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}