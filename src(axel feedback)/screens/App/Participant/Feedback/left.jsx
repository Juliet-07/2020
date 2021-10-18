import React from "react";
import { Formik, Form } from "formik";
import Rating from "react-rating";
import * as yup from "yup";
import { Flex } from "../../../../components/Flex";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import ratingIcon from "./images/rate.png";
import emptyIcon from "./images/empty.png";
const validationSchema = yup.object().shape({
  experience: yup.string().required("This field is required"),
  areas: yup.string().required("This field is required"),
  comments: yup.string().required("This field is required"),
});
const initialValues = {
  experience: "",
  areas: "",
  comments: "",
};
const ratings = [
  {
    text: "Care during the entire placement",
  },
  {
    text: "Tasks meets my expectations",
  },
  {
    text: "Was able to wok independently",
  },
  {
    text: "Station was educational",
  },
];
const index = () => {
  return (
    <div className="leftSideContainer">
      <div className="title">
        <p className="caption">Give Feedback About your Supervisor</p>
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        // onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Flex flexDir="column" alignItems="flex-start">
              <div className="inputContainer">
                <Input
                  type="text"
                  name="experience"
                  placeholder="What was your experience like with the supervisor?"
                  onChange={handleChange}
                />
              </div>
              <div className="inputContainer">
                <Input
                  type="text"
                  name="areas"
                  placeholder="Areas that should be improved"
                  onChange={handleChange}
                />
              </div>
              <div className="inputContainer">
                <Input
                  type="text"
                  name="comments"
                  placeholder="Comments/Feedback "
                  onChange={handleChange}
                />
              </div>
              <div className="aboutPlacement">
                <Flex>
                  
                    <p className="placement">About Placement</p>
                  

                  <div className="numberContainer">
                    <span className="number">1</span>
                    <span className="number">2</span>
                    <span className="number">3</span>
                    <span className="number">4</span>
                    <span className="number">5</span>
                  </div>
                </Flex>
              </div>
              <div className="ratings">
                {ratings.map((data, index) => (
                  <div className="ratingData">
                    <Flex key={index} justifyContent="space-between">
                      <p className="ratingText">{data.text}</p>
                      <div className="rates">
                        <Rating
                          initialRating={5}
                          emptySymbol={
                            <img
                              src={emptyIcon}
                              className="rating"
                              alt="empty"
                            />
                          }
                          fullSymbol={
                            <img
                              src={ratingIcon}
                              className="rating"
                              alt="full"
                            />
                          }
                        />
                      </div>
                    </Flex>
                  </div>
                ))}
              </div>
              <div className="feedbackButton">
                <Button height="60px" text="Submit" />
              </div>
            </Flex>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default index;
