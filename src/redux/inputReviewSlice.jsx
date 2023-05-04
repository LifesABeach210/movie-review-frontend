import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import Axios from "../middleware/axios";
import { useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const submitReview = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    let response = Axios.get("/users/reviews", userData);
    console.log(response, "first error more than likely line 9 userSlice");
    return {
      user: response.data,
    };
  }
);

export const comedeinSlice = createSlice({
  name: "reviews",
  initialState: {
    firstname: "",
    lastname: "",
    Bio: "",
    image: "",
    review: "",
    hasSubmited: false,
    user_Id: "",
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log("state", state, "payload", action.payload);
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.user_Id = action.payload.user_Id;
      state.isValid = true;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
