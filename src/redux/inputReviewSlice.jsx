import { createSlice } from "@reduxjs/toolkit";

import { data } from "autoprefixer";
import Axios from "../middleware/axios";
import { useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
export const submitReview = createAsyncThunk(
  "users/createPost",
  async (userData) => {
    console.log(userData, "SENDING POST");
    let response = await Axios.post("/users/createPost", userData);
    console.log(response, "SENDING POST RESPONSE");
    return response;
  }
);

export const editPost = createAsyncThunk("users/editPost", async (editPost) => {
  console.log("POST DATA TO BE EDIT:", editPost);
  let response = await Axios.put(`/users/edit-post/${editPost.uuid}`, editPost);
  console.log("EDIT POST RESPONSE:", response);
  return response;
});
export const deletePost = createAsyncThunk("users/deletepost", async (id) => {
  console.log("POST DATA TO BE DELETED:", id);
  let response = await Axios.delete(`/users/delete-post/posts/:id=${id}`, id);
  console.log("EDIT POST RESPONSE:", response);
  return response;
});

export const getPost = createAsyncThunk("users/getPost", async (userData) => {
  console.log(userData, "SENDING POST");
  let response = await Axios.get("/users/fetch-post", userData);
  console.log(response, "SENDING POST RESPONSE");
  return response;
});

export const inputReviewSlice = createSlice({
  name: "posts",
  initialState: {
    firstname: "",
    lastname: "",
    Bio: "",
    post: "",
    hasSubmited: true,
    user_Id: "",
    userPost: [],
    id: "",
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(submitReview.fulfilled, (state, action) => {
      console.log("state", state, "payload", action.payload);
      // state.username = action.payload.username;
      // state.email = action.payload.email;
      // state.password = action.payload.password;
      // state.user_Id = action.payload.user_Id;
      state.id = action.payload.data.data.id;
      state.uuid = action.payload.data.data.uuid;
      state.userPost = [action.payload.data.data, ...state.userPost];
      state.hasSubmited = action.payload.data.data.hasSubmited;

      console.log("REDUCER_PAYLOAD:", action.payload);
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      console.log("state", state, "payload", action.payload.data.data);
      state.userPost = [state.userPost, ...action.payload.data.data];
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      console.log("ACTION FROM BUILDER:", action.payload);
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      console.log("DELETE_POST_PAYLOAD", action.payload);
    });
  },
});

export const {} = inputReviewSlice.actions;

export default inputReviewSlice.reducer;
