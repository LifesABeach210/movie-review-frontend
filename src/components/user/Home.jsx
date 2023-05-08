import React, { useState, useEffect } from "react";
import { Container } from "./Container";
import FormContainer from "../form/FormContainer";
import { commonModalClass } from "../../context/utils/modelClass";
import FormInput from "../form/FormInput";
import Title from "../form/Title";
import { useSelector } from "react-redux";
import { submitReview, getPost } from "../../redux/inputReviewSlice";
import { useDispatch } from "react-redux";
import { ProductCard } from "../productCard/ProductCard";
import { editPost } from "../../redux/inputReviewSlice";
import { deletePost } from "../../redux/inputReviewSlice";
export default function Home() {
  const openPage = useSelector((state) => state.users.isVerified);
  const firstnamePost = useSelector((state) => state.users.firstname);
  const checkUser = useSelector((state) => state.post.hasSubmited);
  const currentPostData = useSelector((state) => state.post);
  var postData = useSelector((state) => state.post.userPost);
  const userId = useSelector((state) => state.users.user_Id);
  const Render = useSelector((state) => state.post.reRender);
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkUser && openPage === true) {
      dispatch(getPost(userId));
      console.log(postData, "POST DATA FROM HOME");
    }

    if (Render === true) {
      dispatch(getPost(userId));
      console.log(postData, "POST DATA FROM HOME");
    }
  }, [checkUser, openPage, firstnamePost, getPost, Render]);

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
      review.post !== ""
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
                <Title>Enter A New Post</Title>
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
                  Submit
                </button>
              </form>
            </Container>

            <Container className="flex-22"></Container>
            <Container className="flex-22"></Container>
          </FormContainer>
          {postData[1] !== undefined ? (
            postData.map((post, index) => {
              return (
                <ProductCard
                  key={index}
                  Bio={post.Bio}
                  firstname={post.firstname}
                  lastname={post.lastname}
                  post={post.post}
                  deleteProduct={(id) => dispatch(deletePost(post.ID))}
                  editProduct={(id) => dispatch(editPost(post.ID))}
                />
              );
            })
          ) : (
            <span></span>
          )}
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
