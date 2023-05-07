import React, { useState } from "react";
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../components/form/FormInput";
import Submit from "../components/form/Submit";
import Title from "../components/form/Title";
import { Container } from "../components/user/Container";
import CustomLink from "../components/user/CustomLink";
import { commonModalClass } from "../context/utils/modelClass";
import { loginUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
export const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = user;
  const userSignedIn = useSelector((state) => state.user);
  const handleChange = ({ target }) => {
    const { value, name } = target;

    setUser({ ...user, [name]: value });
    console.log(target.name);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser(user));
      console.log("LOGIN-RESULT-TOKEN:", result.payload.data);
      if (result.payload.data.isVerified === true) {
        navigate("/");
      } else {
        navigate("/auth/verify-email");
      }
    } catch (error) {
      console.error();
    }
  };
  return (
    <div className="fixed inset-0 dark:bg-primary bg-white -z-10 flex justify-center items-center">
      <Container>
        <form className={commonModalClass + " w-72"}>
          <Title>Sign-In</Title>
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
            name="password"
          />
          <button
            type="submit"
            className="w-full h-10 rounded dark:bg-white bg-secondary dark:text-secondary text-white hover:bg-opacity-90 transition font-semibold text-lg cursor-pointer p-1"
            onClick={handleSubmit}
          >
            Sign-In
          </button>
          <div className="flex justify-between">
            <CustomLink
              children="Forgot-Password"
              to="/auth/forgot-password"
            ></CustomLink>
            <CustomLink children="Sign-Up" to="/auth/signup"></CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};
