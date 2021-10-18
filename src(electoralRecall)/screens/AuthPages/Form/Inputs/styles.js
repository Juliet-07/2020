/*
 * component: FormStylesWrapper
 * author: George Favour
 * Date: April 16th, 2020
 * EmBED FormStylesWrapper component
 */

import styled from "styled-components";

const FormStylesWrapper = styled('div')`
	width: ${({ width }) => width || "100%"};
	.field {
		/* width: 80%; */
		color: #222;
		position: relative;

		box-sizing: border-box;
		border-radius: 1px;
		margin-bottom: 1em;
		margin-top: 5px;
		transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out;
	}

	.field:hover {
		/* background-color: rgba(246, 217, 255, 0.288);
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.295); */
		/* border-bottom: 1px solid #22222295; */
	}

	.field.active {
		background-color: #ffffff;
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
	}

	label {
		color: #222;
		font-family: Rubik;
		font-style: normal;
		/* font-weight: 500; */
		font-size: 10px;
		line-height: 14px;
		letter-spacing: 1.125px;
		text-transform: uppercase;
	}
	/* .field.active input {
    padding: 24px 16px 8px 16px;
  } */

	.field.active input + label {
		top: 10px;
		opacity: 0.8;
		color: #4e1980;
	}

	.field.locked {
		pointer-events: none;
	}

	.field input {
		width: 100%;
		position: relative;
		padding: 7px 5px;
		border: none;
		border-bottom: 1px solid #22222265;
		font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
		font-size: 12px;
		font-weight: normal;
		line-height: normal;
		background-color: transparent;
		color: #222;

		outline: none;
		box-shadow: 0 4px 20px 0 transparent;
		transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
			0.1s padding ease-in-out;
		-webkit-appearance: none;
	}

	.field input::-webkit-input-placeholder {
		color: #444;
	}

	.field textarea::-webkit-input-placeholder {
		color: #444;
	}
	.field input:-moz-placeholder {
		color: #444;
	}

	.field.active input::-moz-placeholder {
		color: #444;
	}

	.field.active textarea::-moz-placeholder {
		color: #444;
	}

	.field input:-ms-input-placeholder {
		color: #444;
	}
	.field input::-moz-placeholder {
		color: #444;
	}

	.field input + label {
		position: absolute;
		top: 0;
		left: 16px;
		font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
		font-size: 12px;
		font-weight: 600;
		line-height: 24px;
		color: #333333;
		opacity: 0;
		pointer-events: none;
		transition: 0.1s all ease-in-out;
	}

	.field p.predicted {
		position: absolute;
		top: 8px;
		left: 16px;
		font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		color: #e0e0e0;
		opacity: 1;
		pointer-events: none;
	}
`;

export { FormStylesWrapper };
