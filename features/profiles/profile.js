import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  first_name: "",
  last_name: "",
  profile_bio: "",
  profile_website: "",
  postsNumber: 0,
  profile_birthday: "",
  created_at: "",
  profile_cover:
    "https://res.cloudinary.com/khalilay/image/upload/v1648390148/Social%20media/g/default-cover_acz4hs.gif",
  profile_picture:
    "https://res.cloudinary.com/khalilay/image/upload/v1647365570/Social%20media/g/640px-Unknown_person_h810y8.jpg",
};
export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    value: initialState,
    profilePosts: [],
    pageNumber: 1,
  },
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setProfileInfo: (state, action) => {
      state.value = action.payload;
    },
    setProfilePosts: (state, action) => {
      state.profilePosts = action.payload;
    },
    addProfilePost: (state, action) => {
      state.profilePosts = [{ ...action.payload }, ...state.profilePosts];
    },
    addProfilePosts: (state, action) => {
      state.profilePosts = [...state.profilePosts, ...action.payload];
    },
    deleteProfilePost: (state, action) => {
      state.profilePosts = state.profilePosts.filter(
        (post) => post.post_id !== action.payload
      );
    },
  },
});

export const {
  setProfileInfo,
  setProfilePosts,
  addProfilePost,
  addProfilePosts,
  deleteProfilePost,
  setPageNumber,
} = profileSlice.actions;

export default profileSlice.reducer;
