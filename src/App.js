import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/user/Navbar";
import { Signin } from "./auth/Signin";
import { Signup } from "./auth/Signup";
import EmailVerification from "./auth/EmailVerification";
import ForgotPassword from "./auth/ForgotPassword";
import ConfirmPassword from "./auth/ConfirmPassword";
import Home from "./components/user/Home";
import { ThemeContext } from "./context/ThemeProvider";
export default function App() {
  const theme = useContext(ThemeContext);
  return (
    <>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth/signin" element={<Signin />}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
        <Route
          path="/auth/verify-email"
          element={<EmailVerification />}
        ></Route>

        <Route
          path="/auth/forgot-password"
          element={<ForgotPassword />}
        ></Route>
        <Route
          path="/auth/confirm-password"
          element={<ConfirmPassword />}
        ></Route>
      </Routes>
      {/* <Signup /> */}
    </>
  );
}
