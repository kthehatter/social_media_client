import {createSlice} from '@reduxjs/toolkit';


export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [

        ],
        pageNumber: 1,
        loading: false,
        error: null,

    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
        addPost: (state, action) => {
            state.posts = [{...action.payload}, ...state.posts];
        },
        addPosts: (state, action) => {
            state.posts = [...state.posts, ...action.payload];
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.post_id !== action.payload);
        }
       
        
    }
});

export const {addPost,deletePost,addPosts,setPosts,setPageNumber} = postsSlice.actions;

export default postsSlice.reducer;