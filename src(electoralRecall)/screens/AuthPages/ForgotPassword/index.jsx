import React from "react";
import * as Yup from "yup";
import Forms from "../Form/index";
import {useMutation} from "@apollo/client";
import {ADMIN_FORGOT_PASSWORD, FORGOT_PASSWORD} from "../../../lib/queries/auth.gql";
import {ToastMessage, type} from "../../../components/ToastMessage";

const inputs = [
	{
		name: "email",
		type: "email",
		placeholder: "Please enter your email",
	},
];

const schema = Yup.object().shape({
	email: Yup.string()
		.email("Enter a valid email address")
		.required("Your Email is required"),
});

const initialValues = {
	email: "",
};

const ForgotPassword = ({meta}) => {
	const [onForgotPassword, {loading: forgotLoading}] = useMutation(FORGOT_PASSWORD);
	const [onAdminForgotPassword, {loading: adminForgotLoading}] = useMutation(ADMIN_FORGOT_PASSWORD);
	const loading = forgotLoading || adminForgotLoading;

	const onSubmit = async (values, {resetForm}) => {
		if (meta === "admin") {
			const {data: {adminForgotPassword}} = await onAdminForgotPassword({
				variables: values
			});

			resetForm();
			ToastMessage(type.SUCCESS, adminForgotPassword)
		} else {
			const {data: {userForgotPassword}} = await onForgotPassword({
				variables: values
			});

			resetForm();
			ToastMessage(type.SUCCESS, userForgotPassword)
		}
	};

	return (
		<Forms
			initialValues={initialValues}
			type="forgotpassword"
			onSubmit={onSubmit}
			loading={loading}
			schema={schema}
			inputs={inputs}
		/>
	);
}

export default ForgotPassword;
