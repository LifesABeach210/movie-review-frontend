import React from "react";
import { Container } from "../components/user/Container";
import Title from "../components/form/Title";
import FormInput from "../components/form/FormInput";
import CustomLink from "../components/user/CustomLink";
import Submit from "../components/form/Submit";
export default function ForgotPassword() {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-6">
          <Title>Please Enter Your Email</Title>
          <FormInput label="Email" placeholder="John@email.com" name="email" />

          <Submit value="Send Link" />
          <div className="flex justify-between">
            <CustomLink children="Sign-Up" to="/auth/signup"></CustomLink>
            <CustomLink children="Sign-In" to="/auth/signin"></CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
