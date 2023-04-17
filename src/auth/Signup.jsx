import React from "react";
import FormInput from "../components/form/FormInput";
import Submit from "../components/form/Submit";
import Title from "../components/form/Title";
import { Container } from "../components/user/Container";
import CustomLink from "../components/user/CustomLink";
export const Signup = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-6">
          <Title>Sign-Up</Title>
          <FormInput label="username" placeholder="dudeboy42" name="username" />
          <FormInput label="Email" placeholder="John@email.com" name="email" />
          <FormInput label="Password" placeholder="********" name="password" />
          <Submit value="Sign-Up" />
          <div className="flex justify-between">
            <CustomLink
              children="Forgot-Password"
              to="/auth/forgot-password"
            ></CustomLink>
            <CustomLink children="Sign-In" to="/auth/signin"></CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};
