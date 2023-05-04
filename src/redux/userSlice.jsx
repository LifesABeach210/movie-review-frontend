import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import Axios from "../middleware/axios";
import { useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { useSelector } from "react-redux";
export const registerUser = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    let response = await Axios.post("/users/create", userData);
    console.log(
      response.data.user,
      "first error more than likely line 9 userSlice"
    );
    return {
      user: response.data.user,
    };
  }
);

export const loginUser = createAsyncThunk("users/signin", async (userData) => {
  let response = await Axios.post("/users/sign-in", userData);
  console.log(
    "RESPONSE:",
    response,
    "first error more than likely line 9 userSlice"
  );
  //const data = await response.json();
  return {
    data: response.data.user,
  };
});

export const userSlice = createSlice({
  name: "users",
  initialState: {
    username: "",
    email: "",
    password: "",
    isValid: false,
    user_Id: "",
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log("state", state, "payload", action.payload.user);
      state.username = action.payload.user.username;
      state.email = action.payload.user.email;
      state.user_Id = action.payload.user.id;
      console.log(state.user_Id);
      state.isValid = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.username = action.payload.data.username;
      state.email = action.payload.data.email;
      state.password = action.payload.data.password;
      state.user_Id = action.payload.data.user_Id;
      console.log(state.email);
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
