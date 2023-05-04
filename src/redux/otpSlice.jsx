import { createSlice } from "@reduxjs/toolkit";
import Axios from "../middleware/axios";
import { useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const verifyEmailOtp = createAsyncThunk(
  "users/verify-email-thunk",
  async (userData) => {
    console.log(userData, "userData");
    let response = await Axios.post("/users/verify-email", userData);
    console.log(
      response,
      userData,
      "first error more than likely line 9 userSlice"
    );
    return {
      user: response.user,
    };
  }
);

export const otpSlice = createSlice({
  name: "otp",
  initialState: {
    isValid: false,
    otp: "",
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
    });
  },
});

export const { verifyOtp } = otpSlice.actions;

export default otpSlice.reducer;
