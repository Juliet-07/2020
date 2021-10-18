import React from "react";
import AuthComponent from "../../components/Auth";
import SignUpForm from "../../screens/AuthPages/SignUp/index";

const SignUp = () => {
	return (
		<div>
			<AuthComponent
				capitalized
				title="Get started for free"
				form={<SignUpForm />}
			/>
		</div>
	);
};

export default SignUp;
