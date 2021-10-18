/*
 * component: CustomForm
 * author: George Favour
 * Date: April 16th, 2020
 * EmBED CustomForm component
 */

import React from "react";
let yup = require("yup");
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CustomFormWrapper } from "./styles";
import { FlexibleDiv, GridableDiv } from "../../components/CustomDiv/styles";
import CustomFormInput from "../Inputs/Inputs.component";
import { generateID } from "../../lib/generateID";

const CustomForm = () => {
  let schema = yup.object().shape({
    firstName: yup.string().required("Your first name is required"),
    lastName: yup.string().required("Your last name is required"),
    email: yup.string().email().required("Email address is required"),
    phone: yup.string().required("Please provide your phone number"),
    status: yup.string().required(),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Seems a bit short...")
      .max(20, "We prefer insecure system, try a shorter password."),
  });

  const formData = [
    {
      name: "firstName",
      label: "First Name",
      inputType: "text",
      initialValue: "aa",
    },
    {
      name: "lastName",
      label: "Last Name",
      inputType: "text",
      initialValue: "bbbb",
    },
    {
      name: "email",
      label: "Address",
      inputType: "email",
      initialValue: "",
    },
    {
      name: "phone",
      label: "Phone Number",
      inputType: "text",
      initialValue: "",
    },
    {
      name: "status",
      label: "Marital Status",
      inputType: "text",
      initialValue: "",
    },
    {
      name: "password",
      label: "Enter Password ",
      inputType: "password",
      initialValue: "",
    },
  ];

  const inputName = formData.map((item) => item.name);
  let initialValue = inputName.reduce((a, b) => ({ ...a, [b]: "" }), {});

  return (
    <CustomFormWrapper>
      <div className="form">
        <Formik
          initialValues={{
            ...initialValue,
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={schema}>
          {({
            values,
            errors,
            touched,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          }) => (
            <form onSubmit={handleSubmit}>
              <h1 className="title">
                Ensure you input correct details for easy identification and
                process
              </h1>

              {/* {console.log(values, "VALUES==>")} */}
              <div className="formMain">
                <FlexibleDiv flexDir="column" alignItems="stretch">
                  {formData.map((item) => (
                    <div key={generateID(20)} className="inputWrappr">
                      <CustomFormInput
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                        inputType={item.inputType}
                        inputName={item.name}
                        value={values.name}
                        label={item.label}
                        handleChange={handleChange}
                      />
                      <div>
                        <ErrorMessage
                          name={item.name}
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="btnWrapper">
                    <button className="button" type="submit">
                      Create and account
                    </button>
                  </div>
                </FlexibleDiv>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </CustomFormWrapper>
  );
};

export default CustomForm;
