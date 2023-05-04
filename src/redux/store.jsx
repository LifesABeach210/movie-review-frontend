import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import otpReducer from "./otpSlice";
export default configureStore({
  reducer: {
    users: userReducer,
    otp: otpReducer,
  },
});
