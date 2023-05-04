import React from "react";
import { Container } from "../components/user/Container";
import Title from "../components/form/Title";
import FormInput from "../components/form/FormInput";
import CustomLink from "../components/user/CustomLink";
import Submit from "../components/form/Submit";
import FormContainer from "../components/form/FormContainer";
import { commonModalClass } from "../context/utils/modelClass";
export default function ForgotPassword() {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClass + " w-72"}>
          <Title>Please Enter Your Email</Title>
          <FormInput label="Email" placeholder="John@email.com" name="email" />

          <Submit value="Send Link" />
          <div className="flex justify-between">
            <CustomLink children="Sign-Up" to="/auth/signup"></CustomLink>
            <CustomLink children="Sign-In" to="/auth/signin"></CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
}
