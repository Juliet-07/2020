import React from "react";
import * as Yup from "yup";
import Forms from "../Form/index";
import { useMutation } from "@apollo/client";
import {LOGIN_ADMIN, LOGIN_USER} from "../../../lib/queries/auth.gql";
import { MODE } from "../../../lib/constants";
// import { matchDomain, matchRoutes } from "../../../lib/helper.lib";
import { ToastMessage, type as __type } from "../../../components/ToastMessage";
import {useRouter} from "next/router";

const inputValues = {
  1: [
    {
      name: "emailOrPhone",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ],
  2: [
    {
      name: "emailOrPhone",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ],
};

const initialInputValues = {
  1: {
    emailOrPhone: "",
    password: "",
  },
  2: {
    emailOrPhone: "",
    password: "",
  },
};

const schemaValues = {
  1: Yup.object().shape({
    emailOrPhone: Yup.string()
      .email("Enter a valid email address")
      .required("Your Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - minimum is 4 char"),
  }),
  2: Yup.object().shape({
    emailOrPhone: Yup.string()
      .email("Enter a valid email address")
      .required("Your Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - minimum is 4 char"),
  }),
};

const LoginForm = ({ type, user, meta }) => {
  const router = useRouter();
  const inputs = inputValues[type];
  const schemaValidation = schemaValues[type];
  const initialValues = initialInputValues[type];

  const [onUserLogin, { loading: userLoading }] = useMutation(LOGIN_USER);
  const [onAdminLogin, { loading: adminLoading }] = useMutation(LOGIN_ADMIN);
  const loading = userLoading || adminLoading;

  const onSubmit = async (values, {setSubmitting}) => {
    try {
      if (user === 'admin') {
        await onAdminLogin({
          variables: {...values}
        })

        await router.push('/ad/dashboard')
      } else {
        await onUserLogin({
          variables: { ...values },
        });

        await router.push('/')
      }
    } catch (e) {
      setSubmitting(false)
    }
  };

  return (
    <Forms
      initialValues={initialValues}
      schema={schemaValidation}
      onSubmit={onSubmit}
      loading={loading}
      inputs={inputs}
      type="login"
      meta={meta}
    />
  );
};

export default LoginForm;
