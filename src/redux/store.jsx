import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import otpReducer from "./otpSlice";
import inputReviewSlice from "./inputReviewSlice";
export default configureStore({
  reducer: {
    users: userReducer,
    otp: otpReducer,
    post: inputReviewSlice,
  },
});
