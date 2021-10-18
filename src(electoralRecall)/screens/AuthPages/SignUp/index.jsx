import React, { useState } from "react";
import * as Yup from "yup";
import Forms from "../Form/index";
import withApollo from "../../../lib/apollo/withApollo";
import { useMutation } from "@apollo/client";
import { SIGN_UP_USER } from "../../../lib/queries/auth.gql";
import { ToastMessage, type as __type } from "../../../components/ToastMessage";
import { MODE } from "../../../lib/constants";
import {useRouter} from "next/router";

const inputValues = {
  1: [
    {
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Phone number",
    },
    {
      name: "state",
      type: "text",
      placeholder: "State Of Origin",
    },
    {
      name: "district",
      type: "text",
      placeholder: "Senatorial District",
    },
    {
      name: "constituency",
      type: "text",
      placeholder: "Legislative-Constituency",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
    },
    {
      name: "registered",
      type: "switch",
      placeholder: "Are You A Registered Voter ",
      initialValue: false,
    },
    {
      name: "informed",
      type: "switch",
      placeholder: "Do You Want To Be Kept informed ",
      initialValue: true,
    },
  ],
  2: [
    {
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Phone number",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
    },
  ],
};

const schema = Yup.object().shape({
  phone: Yup.string().required("Phone is required"),
  fullName: Yup.string().required("Full name is required"),
  state: Yup.string().required("State of origin is required"),
  district: Yup.string().required("Senatorial District is required"),
  constituency: Yup.string().required("Legislative Constituency is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Your Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - minimum is 4 char"),
  confirmPassword: Yup.string()
    .required()
    .label("Confirm password")
    .test("passwords-match", "Passwords do not match ", function (value) {
      return this.parent.password === value;
    }),
});

const initialValues = {
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ type, user, meta }) => {
  const router = useRouter();
  const [registeredVoter, setRegisteredVoter] = useState(false);
  const [keepInformed, setKeepInformed] = useState(true);

  const handleToggle = (value, toggleName) => {
    if (toggleName === "registered") {
      setRegisteredVoter(value);
    }
    if (toggleName === "informed") {
      setKeepInformed(value);
    }
  };

  const inputs = inputValues[type];

  const [onCreateUser, { loading }] = useMutation(SIGN_UP_USER);

  const onSubmit = async (values, { resetForm }) => {
    await onCreateUser({
      variables: {
        ...values,
        canVote: registeredVoter,
        beInformed: keepInformed,
        accountType: "user",
      },
    });

    ToastMessage(__type.SUCCESS, "Account creation was successful");
    resetForm();
    await router.push('/login');
  };

  return (
    <Forms
      initialValues={initialValues}
      onSubmit={onSubmit}
      handleToggle={handleToggle}
      loading={loading}
      inputs={inputs}
      schema={schema}
      type="signup"
    />
  );
};

export default withApollo(SignUpForm);
