import { createSlice } from "@reduxjs/toolkit";

import { data } from "autoprefixer";
import Axios from "../middleware/axios";
import { useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const submitReview = createAsyncThunk(
  "users/createPost",
  async (userData) => {
    console.log(userData, "SENDING POST");
    let response = await Axios.post("/users/createPost", userData);
    console.log(response, "SENDING POST RESPONSE");
    return response;
  }
);

export const getPost = createAsyncThunk("users/getPost", async (userData) => {
  console.log(userData, "SENDING POST");
  let response = await Axios.post("/users/fetch-post", userData);
  console.log(response, "SENDING POST RESPONSE");
  return response;
});

export const inputReviewSlice = createSlice({
  name: "post",
  initialState: {
    firstname: "",
    lastname: "",
    Bio: "",
    post: "",
    hasSubmited: true,
    user_Id: "",
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(submitReview.fulfilled, (state, action) => {
      console.log("state", state, "payload", action.payload);
      // state.username = action.payload.username;
      // state.email = action.payload.email;
      // state.password = action.payload.password;
      // state.user_Id = action.payload.user_Id;
      state.hasSubmited = action.payload.data.hasSubmited;
      console.log("REDUCER_PAYLOAD:", action.payload);
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      console.log("state", state, "payload", action.payload);
    });
  },
});

export const {} = inputReviewSlice.actions;

export default inputReviewSlice.reducer;
