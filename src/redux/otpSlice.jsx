import { createSlice } from "@reduxjs/toolkit";
import Axios from "../middleware/axios";
import { useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
export const verifyEmailOtp = createAsyncThunk(
  "users/verify-email-thunk",
  async (userData) => {
    const { otp, userId } = userData;
    // let a = otp.split(",");
    // let b = otp.join("");
    // console.log(b);
    console.log(userData, "userData");
    let response = await Axios.post("/users/verify-email", userData);
    console.log(
      response,
      userData,
      "first error more than likely line 9 userSlice"
    );
    return response;
  }
);

export const otpSlice = createSlice({
  name: "otp",
  initialState: {
    isVerified: false,
    otp: "",
    username: "",
  },
  reducers: {
    verifyOtp: (state, action) => {
      console.log("ACTION_OTP:", action, "STATE:", state);
      const isOtpValid = (otp) => {
        let valid = false;
        for (let val of otp) {
          valid = !isNaN(parseInt(val));
          if (!valid) break;
          console.log(val);
        }
      };

      // verifyOtp(OTP);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(verifyEmailOtp.fulfilled, (state, action) => {
      console.log("ACTION:", action, "STATE:", state);
      state.isVerified = action.payload.data.user.isVerified;
      state.username = action.payload.data.user.userName;
    });
  },
});

export const { verifyOtp } = otpSlice.actions;

export default otpSlice.reducer;
