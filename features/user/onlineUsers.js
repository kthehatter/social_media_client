import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
export const onlineUsersSlice = createSlice({
    name: 'onlineUsers',
    initialState: {
        onlineUsers: initialState,
    },
    reducers: {
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
        addOnlineUser: (state, action) => {
            state.onlineUsers.push(action.payload);
        },
        removeOnlineUser: (state, action) => {
            state.onlineUsers = state.onlineUsers.filter(user => user.socket_id !== action.payload);
        }
        
    }
});

export const {setOnlineUsers,addOnlineUser,removeOnlineUser} = onlineUsersSlice.actions;

export default onlineUsersSlice.reducer;