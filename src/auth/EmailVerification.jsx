import React from "react";
import { Container } from "../components/user/Container";
import Title from "../components/form/Title";
import { useState, useEffect, useRef } from "react";
import Submit from "../components/form/Submit";
import FormContainer from "../components/form/FormContainer";
import { commonModalClass } from "../context/utils/modelClass";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../redux/otpSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { verifyEmailOtp } from "../redux/otpSlice";
const OTP_LENGTH = 6;

const isValidOTP = (otp) => {
  let valid = false;
  for (let val of otp) {
    valid = !isNaN(parseInt(val));
    if (!valid) break;
  }
  return valid;
};

export default function EmailVerification() {
  const dispatch = useDispatch();
  const usersName = useSelector((state) => state.users.username);
  const usersIsValid = useSelector((state) => state.otp.isVerified);
  const userId = useSelector((state) => state.users.user_Id);
  const [str1, setStr] = useState("");
  const navigate = useNavigate();

  const [otpIndex, setOtpIndex] = useState(0);
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const data = str1;
  const [verify, setVerify] = useState({});
  const inputRef = useRef();
  const focusNextInputField = (index) => {
    setOtpIndex(index + 1);
  };
  const focusPreviousInputField = (index) => {
    let nextIndex;
    const diff = index - 1;
    nextIndex = diff !== 0 ? diff : 0;

    setOtpIndex(nextIndex);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    let newOtp = [...otp];
    console.log(newOtp);
    console.log(newOtp.toString());
    newOtp[index] = value.toString().substring(value.length - 1, value.length);
    setOtp([...newOtp]);
    let str = "";
    console.log(e[index]);
    str = str += newOtp.toString();
    console.log(str);
    if (otp[index - 1] !== "") {
      setStr(str);
      console.log(verify, "allple");
      setVerify({ otp: str, userId: userId });
    }

    // setVerify({ userId: userId, OTP: otp.toString() });
    console.log(str);

    if (!value) {
      focusPreviousInputField(index);
    } else {
      focusNextInputField(index);

      // let str = "";
      // otp.forEach((e) => {
      //   if (e === " ") {
      //     console.log("1");
      //   } else {
      //     str = e += str;
      //     setVerify({ OTP: str, userId: userId });
      //     console.log(str);
      //     console.log(verify);
      //   }
      // });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidOTP(otp)) {
      dispatch(verifyEmailOtp(verify));

      if (usersIsValid === true) {
        console.log(usersIsValid, "line333333");
        navigate("/");
      }
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
    if (usersIsValid === true) {
      console.log(usersIsValid, "line333333");
      navigate("/");
    }
  }, [otpIndex, handleSubmit]);
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClass}>
          <Title>Please Enter OTP To Verify Your Account</Title>
          <p className="text-center dark:text-dark-subtle">
            OTP has been sent to your email
          </p>
          <div className="flex justify-center items-center space-x-4">
            {" "}
            {otp.map((_, index) => {
              return (
                <input
                  ref={otpIndex === index ? inputRef : null}
                  key={index}
                  value={otp[index] || ""}
                  type="number"
                  onChange={(e) => handleOtpChange(e, index)}
                  className="spin-button-none text-xl w-12 h-12 border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary  rounded bg-transparent outline-none text-center dark:text-white font-semibold"
                />
              );
            })}
          </div>
          <button
            type="submit"
            className="w-full h-10 rounded dark:bg-white bg-secondary dark:text-secondary text-white hover:bg-opacity-90 transition font-semibold text-lg cursor-pointer p-1"
            onClick={handleSubmit}
          >
            Sign-Up
          </button>
        </form>
      </Container>
    </FormContainer>
  );
}
