import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Flex } from "../../../../components/Flex";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

const validationSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  description: yup.string().required("This field is required"),
  contents: yup.string().required("This field is required"),
  file: yup.string().required("This field is required"),
});
const initialValues = {
  name: "",
  description: "",
  contents: "",
  file:""
};

const index = () => {
  return (
    <div className="leftSideContainer">
      <div className="title">
        <p className="caption">Add Journal</p>
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
                  name="name"
                  placeholder="Name of Journal"
                  onChange={handleChange}
                />
              </div>
              <div className="inputContainer">
                <Input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                />
              </div>
              <div className="inputContainer">
                <Input
                  type="text"
                  name="contents"
                  placeholder="Contents "
                  onChange={handleChange}
                />
              </div>
              <div className="inputContainer">
                <Input
                  type="file"
                  name="file"
                  placeholder="Attach File "
                  onChange={handleChange}
                />
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
