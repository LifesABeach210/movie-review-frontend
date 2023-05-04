import React, { useState } from "react";
import { Container } from "./Container";
import FormContainer from "../form/FormContainer";
import { commonModalClass } from "../../context/utils/modelClass";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";

export default function Home() {
  const [review, setReviews] = useState({
    firstname: "",
    lastname: "",
    Bio: "",
    image: "",
    reviewPost: "",
  });
  const { firstname, lastname, Bio, image, reviewPost } = review;
  const handleChange = ({ target }) => {
    const { value, name } = target;

    setReviews({ ...review, [name]: value });
    console.log(target.name);
  };
  return (
    <>
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
            <FormInput
              onChange={handleChange}
              value={image}
              label="image"
              name="image"
            ></FormInput>
            <FormInput
              onChange={handleChange}
              value={reviewPost}
              label="review"
              name="reviewPost"
            ></FormInput>
            <Submit value="Submit"></Submit>
          </form>
        </Container>

        <Container className="flex-22">
          <p>helllo world</p>//design/logos/divs/differentColor
        </Container>
        <Container className="flex-22">
          <p>helloo</p>
        </Container>
      </FormContainer>
      <Container
        className=" w-100 inset-0 dark:bg-primary bg-white my-12 px-12P
      "
      >
        {}
        hello world
      </Container>
    </>
  );
}
