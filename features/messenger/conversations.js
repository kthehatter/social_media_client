import { createSlice } from "@reduxjs/toolkit";

export const conversationsSlice = createSlice({
  name: "conversations",
  initialState: {
    conversations: [],
    conversationsOffset: 1,
    messagesOffset: 1,
  },
  reducers: {
    setConversationsOffset: (state, action) => {
      state.conversationsOffset = action.payload;
    },
    setMessagesOffset: (state, action) => {
      state.messagesOffset = action.payload;
    },
    setConversationMessages: (state, action) => {
      if (state.conversations.length === 0) {
        state.conversations = [{conversationDetails:{},messages:action.payload.messages}];
      }
      for (let index = 0; index < state.conversations.length; index++) {
        const conversation = state.conversations[index];
        if (
          conversation.conversationDetails.conversation_id == action.payload.conversationId
        ) {
          state.conversations[index].messages = action.payload.messages;
          break;
        }
      }
    },
    addConversationMessages: (state, action) => {
      for (let index = 0; index < state.conversations.length; index++) {
        const conversation = state.conversations[index];
        if (
          conversation.conversationDetails.conversation_id == action.payload.conversationId
        ) {
          state.conversations[index].messages = [
            ...conversation.messages,
            action.payload.messages,
          ];
          break;
        }
      }
    },
    setConversationDetails: (state, action) => {
      state.conversations[action.payload.index].conversationDetails =
        action.payload.conversationDetails;
    },
    setConversations: (state, action) => {
      state.conversations = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    addConversation: (state, action) => {
      state.conversations = [{ ...action.payload }, ...state.conversations];
    },
    addConversations: (state, action) => {
      state.conversations = [...state.conversations, ...action.payload];
    },
    deleteConversation: (state, action) => {
      state.conversations = state.conversations.filter(
        (conversation) =>
          conversation.conversationDetails.conversation_id !== action.payload
      );
    },
  },
});

export const {
  setMessagesOffset,
  setConversationsOffset,
  setConversationMessages,
  addConversationMessages,
  setConversationDetails,
  addConversation,
  deleteConversation,
  addConversations,
  setConversations,
  setPageNumber,
} = conversationsSlice.actions;

export default conversationsSlice.reducer;
