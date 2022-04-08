import {createSlice} from '@reduxjs/toolkit';

const initialState = {user_id: '',username: '',firstName: '',lastName: '',email: '',gender: ''};
const isLoggedInState = false;
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialState,
        profile_image: 'https://res.cloudinary.com/khalilay/image/upload/v1647365570/Social%20media/g/640px-Unknown_person_h810y8.jpg',
        isLoggedIn: isLoggedInState,
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.value = action.payload;
        },
        setUserProfilePicture: (state, action) => {
            state.profile_image = action.payload;
        },
        setUserLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        userLogout: (state) => {
            state.value = initialState;
            state.isLoggedIn = isLoggedInState;
        },
    }
});

export const {setUserInfo,userLogout,setUserLoggedIn,setUserProfilePicture} = userSlice.actions;

export default userSlice.reducer;