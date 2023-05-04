import React from "react";
import { Container } from "../components/user/Container";
import Title from "../components/form/Title";
import FormInput from "../components/form/FormInput";
import Submit from "../components/form/Submit";
import FormContainer from "../components/form/FormContainer";
import { commonModalClass } from "../context/utils/modelClass";
export default function ConfirmPassword() {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClass + " w-96"}>
          <Title>Please Enter Your New Password</Title>
          <FormInput label="Password" placeholder="********" name="Password" />
          <FormInput
            label="Password"
            placeholder="Confirm Your New Password"
            name="Password"
          />
          <Submit value="Send Link" />
        </form>
      </Container>
    </FormContainer>
  );
}
