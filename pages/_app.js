import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'
import dynamic from 'next/dynamic'
import "nprogress/nprogress.css";
import {Provider} from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/user';
import onlineUsersReducer from '../features/user/onlineUsers';
import notificationsReducer from '../features/user/notifications';
import postsReducer from '../features/posts/posts';
import profileReducer from '../features/profiles/profile';
import PageHandler from '../components/utils/pageHandler';
import conversationsReducer from '../features/messenger/conversations';
import { ContextProvider } from '../controllers/utils/socketContext';
const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    notifications: notificationsReducer,
    profile:profileReducer,
    conversations: conversationsReducer,
    onlineUsers: onlineUsersReducer
  },
});
const TopProgressBar = dynamic(
  () => {
    return import("../components/utils/TopProgressBar");
  },
  { ssr: false },
);
function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
  <TopProgressBar />
    <ContextProvider>
  <PageHandler Component={Component} {...pageProps} />
    </ContextProvider>
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
  </Provider>
  
}

export default MyApp
