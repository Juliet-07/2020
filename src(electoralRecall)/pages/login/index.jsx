import React from "react";
import AuthComponent from "../../components/Auth";
import { CurrentIcon, ChatIcon } from "../../assets/svg";
import LoginForm from '../../screens/AuthPages/Login';
import withApollo from "../../lib/apollo/withApollo";

const Login = () => {
	const tab = [
		{
			id: 1,
			icon: <CurrentIcon height="12px" width="12px" color="#6c006c" />,
			title: "User",
			bodyText: "Login to start making our leaders accountable",
			content: <LoginForm type={1} user={"user"} />,
		},
	];

	return (
		<div>
			<AuthComponent tab={tab} />
		</div>
	);
};

export default withApollo(Login);
