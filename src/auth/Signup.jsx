import React, { useState } from "react";
import FormInput from "../components/form/FormInput";
import Submit from "../components/form/Submit";
import Title from "../components/form/Title";
import { Container } from "../components/user/Container";
import CustomLink from "../components/user/CustomLink";
import { commonModalClass } from "../context/utils/modelClass";
import FormContainer from "../components/form/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/userSlice";
import Validate from "../middleware/Validate";
export const Signup = () => {
  const navigate = useNavigate();
  const stateUserName = useSelector((state) => state.users.username);
  const stateUserPassword = useSelector((state) => state.users.password);
  const stateUserEmail = useSelector((state) => state.users.email);
  const stateUserisValid = useSelector((state) => state.users.isValid);
  if (stateUserisValid === true) {
    navigate("/", {
      state: {
        username: stateUserName,
        email: stateUserEmail,
        isValid: stateUserisValid,
      },
      replace: true,
    });
  }
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = newUser;

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setNewUser({ ...newUser, [name]: value });
    console.log(target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("newUser::", newUser);
    const validResp = Validate(newUser);
    console.log(validResp);
    if (validResp.isValid) {
      dispatch(registerUser(newUser));
      navigate("/auth/verify-email");
    } else {
      alert("");
    }
    console.log("validResp::", validResp);
  };

  return (
    <FormContainer className=" justify-center items-center">
      <Container>
        <form className={commonModalClass + "  w-72"}>
          <Title>Sign-Up</Title>
          <FormInput
            onChange={handleChange}
            value={username}
            label="username"
            placeholder="dudeboy42"
            name="username"
          />
          <FormInput
            onChange={handleChange}
            value={email}
            label="Email"
            placeholder="John@email.com"
            name="email"
          />
          <FormInput
            onChange={handleChange}
            value={password}
            label="Password"
            placeholder="********"
            type="password"
            name="password"
          />
          <button
            type="submit"
            className="w-full h-10 rounded dark:bg-white bg-secondary dark:text-secondary text-white hover:bg-opacity-90 transition font-semibold text-lg cursor-pointer p-1"
            onClick={handleSubmit}
          >
            Sign-Up
          </button>
          <div className="flex justify-between">
            <CustomLink
              children="Forgot-Password"
              to="/auth/forgot-password"
            ></CustomLink>
            <CustomLink children="Sign-In" to="/auth/signin"></CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};
