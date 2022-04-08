import {createSlice} from '@reduxjs/toolkit';
export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        all: [],
        unread: [],
        unreadOffset: 1,
        allOffset: 1,
    },
    reducers: {
        setUnreadOffset: (state, action) => {
            state.unreadOffset = action.payload;
        },
        setAllOffset: (state, action) => {
            state.allOffset = action.payload;
        },
        setAllNotifications: (state, action) => {
            state.all = action.payload;
        },
        addAllNotification: (state, action) => {
            state.all = [{...action.payload}, ...state.all];
            console.log(state.posts);
        },
        addAllNotifications: (state, action) => {
            state.all = [...state.all, ...action.payload];
        },
        deleteAllNotification: (state, action) => {
            state.all = state.all.filter(all => all.notification_id !== action.payload);
        },
        setUnreadNotifications: (state, action) => {
            state.unread = action.payload;
        },
        addUnreadNotification: (state, action) => {
            state.unread = [{...action.payload}, ...state.unread];
            console.log(state.unread);
        },
        addUnreadNotifications: (state, action) => {
            state.unread = [...state.unread, ...action.payload];
        },
        deleteUnreadNotification: (state, action) => {
            state.unread = state.unread.filter(unread => unread.notification_id !== action.payload);
        }
    }
});

export const {setUnreadOffset,setAllOffset,deleteAllNotification,addAllNotifications,addAllNotification,setAllNotifications,deleteUnreadNotification,addUnreadNotifications,addUnreadNotification,setUnreadNotifications} = notificationsSlice.actions;

export default notificationsSlice.reducer;