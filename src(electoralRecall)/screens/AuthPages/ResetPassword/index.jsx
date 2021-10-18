import React from "react";
import * as Yup from "yup";
import Forms from "../Form/index";
import {useMutation} from "@apollo/client";
import {
  ADMIN_RESET_PASSWORD,
  RESET_PASSWORD
} from "../../../lib/queries/auth.gql";
import {ToastMessage, type} from "../../../components/ToastMessage";
import {useRouter} from "next/router";

const inputs = [
  {
    name: "password",
    type: "password",
    placeholder: "Enter password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm password",
  },
];

const schema = Yup.object().shape({
  password: Yup.string()
    .min(4)
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const initialValues = {
  password: "",
  confirmPassword: ""
};

const ResetPasswordForm = ({meta}) => {
  const [onResetPassword, {loading: resetLoading}] = useMutation(RESET_PASSWORD);
  const [onAdminResetPassword, {loading: adminResetLoading}] = useMutation(ADMIN_RESET_PASSWORD);
  const loading = resetLoading || adminResetLoading;
  const router = useRouter();
  const {token} = router.query;

  const onSubmit = async ({password}, {resetForm}) => {
    if (meta === "admin") {
      await onAdminResetPassword({
        variables: {password, token}
      });

      resetForm();
      ToastMessage(type.SUCCESS, "Password reset successful");
      await router.push('/admin')
    } else {
      await onResetPassword({
        variables: {password, token}
      });

      resetForm();
      ToastMessage(type.SUCCESS, "Password reset successful");
      await router.push('/login')
    }
  };

  return (
    <Forms
      initialValues={initialValues}
      type="reset-password"
      onSubmit={onSubmit}
      loading={loading}
      schema={schema}
      inputs={inputs}
    />
  );
}

export default ResetPasswordForm;
