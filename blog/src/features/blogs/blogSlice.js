import { createSlice } from "@reduxjs/toolkit";
const saveBlogs = (blogs) => {
  localStorage.setItem("localStorageBlogs", JSON.stringify(blogs));
};

const initialState = {
  list: localStorage.getItem("localStorageBlogs")
    ? JSON.parse(localStorage.getItem("localStorageBlogs"))
    : [],
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.list.push(action.payload);
      saveBlogs(state.list);
    },

    updateBlog: (state, action) => {
      const index = state.list.findIndex(
        (blog) => blog.id === action.payload.id,
      );
      if (index !== -1) {
        state.list[index] = action.payload;
        saveBlogs(state.list);
      }
    },

    deleteBlog: (state, action) => {
      state.list = state.list.filter((blog) => blog.id !== action.payload);
      saveBlogs(state.list);
    },

    toggleLike: (state, action) => {
      const blog = state.list.find((b) => b.id === action.payload);
      if (blog) {
        blog.liked = !blog.liked;
        saveBlogs(state.list);
      }
    },
  },
});
export const { addBlog, updateBlog, deleteBlog, toggleLike } =
  blogSlice.actions;
export default blogSlice.reducer;
