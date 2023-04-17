import React from "react";
import { Container } from "../components/user/Container";
import Title from "../components/form/Title";
import { useState, useEffect, useRef } from "react";
import Submit from "../components/form/Submit";

const OTP_LENGTH = 6;
export default function EmailVerification() {
  const [otpIndex, setOtpIndex] = useState(0);
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
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
    newOtp[index] = value.toString().substring(value.length - 1, value.length);
    setOtp([...newOtp]);

    if (!value) {
      focusPreviousInputField(index);
    } else {
      focusNextInputField(index);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [otpIndex]);
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 space-y-6">
          <Title>Please Enter OTP To Verify Your Account</Title>
          <p className="text-center text-dark-subtle">
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
                  className="spin-button-none text-xl w-12 h-12 border-2 border-dark-subtle focus:border-white rounded bg-transparent outline-none text-center text-white font-semibold"
                />
              );
            })}
          </div>

          <Submit value="Send Link" />
          <div className="flex justify-between"></div>
        </form>
      </Container>
    </div>
  );
}
