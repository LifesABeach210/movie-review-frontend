import React, { useState, useEffect } from "react";
import { Container } from "./Container";
import FormContainer from "../form/FormContainer";
import { commonModalClass } from "../../context/utils/modelClass";
import FormInput from "../form/FormInput";

import Title from "../form/Title";
import { useSelector } from "react-redux";
import { submitReview, getPost } from "../../redux/inputReviewSlice";
import { useDispatch } from "react-redux";
export default function Home() {
  const openPage = useSelector((state) => state.users.isVerified);
  const checkUser = useSelector((state) => state.post.hasSubmited);
  const checkForPost = useSelector((state) => state.post.post);
  const userId = useSelector((state) => state.users.user_Id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkUser && openPage === true) {
      dispatch(getPost(userId));
    }
  }, []);

  const [review, setReviews] = useState({
    firstname: "",
    lastname: "",
    Bio: "",
    userId: userId,
    post: "",
  });
  const { firstname, lastname, Bio, post } = review;
  const handleChange = ({ target }) => {
    const { value, name } = target;

    setReviews({ ...review, [name]: value });
    console.log(target.name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      review.firstname !== "" ||
      review.lastname !== "" ||
      review.Bio !== "" ||
      review.reviewPost !== ""
    ) {
      dispatch(submitReview(review));
    }
  };
  return (
    <>
      {openPage === true ? (
        <>
          {" "}
          <FormContainer className=" flex gap-4">
            <Container className=" ">
              <form className={commonModalClass + " w-72" + "left-0 right-0"}>
                <Title>Enter A New Comidian</Title>
                <FormInput
                  onChange={handleChange}
                  value={firstname}
                  label="Firstname"
                  name="firstname"
                ></FormInput>

                <FormInput
                  onChange={handleChange}
                  value={lastname}
                  label="Lastname"
                  name="lastname"
                ></FormInput>
                <FormInput
                  onChange={handleChange}
                  value={Bio}
                  label="Bio"
                  name="Bio"
                ></FormInput>
                {/* <FormInput
                  onChange={handleChange}
                  value={image}
                  label="image"
                  name="image"
                ></FormInput> */}
                <FormInput
                  onChange={handleChange}
                  value={post}
                  label="post"
                  name="post"
                ></FormInput>
                <button
                  type="submit"
                  className="w-full h-10 rounded dark:bg-white bg-secondary dark:text-secondary text-white hover:bg-opacity-90 transition font-semibold text-lg cursor-pointer p-1"
                  onClick={handleSubmit}
                >
                  Sign-Up
                </button>
              </form>
            </Container>

            <Container className="flex-22">
              <p>helllo world</p>
            </Container>
            <Container className="flex-22">
              <p>helloo</p>
            </Container>
          </FormContainer>
          <Container className=" w-100 inset-0 dark:bg-primary bg-white my-12 px-12P"></Container>
        </>
      ) : (
        <>
          <FormContainer className={commonModalClass}>
            <Container className=" flex justify-center  max-h-lg content-center">
              <h1
                className={
                  commonModalClass +
                  "dark:text-dark-subtle font-semibold dark:peer-focus:text-white self-start"
                }
              >
                Please Verify Your Acct
              </h1>
            </Container>
            <Container className=" flex"></Container>
          </FormContainer>
        </>
      )}
    </>
  );
}
