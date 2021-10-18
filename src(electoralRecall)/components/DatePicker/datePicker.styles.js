import styled from "styled-components";

export const DatePickerWrap = styled('div')`
	.main {
		width: 250px;
		.inptLabel {
			cursor: pointer;
			color: rgba(0, 0, 0, 0.26);
			display: inline-flex;
			font-size: 14px;
			transition: 0.3s ease all;
			font-weight: 400;
			line-height: 1.428571429;
			padding-left: 0;
		}
		@keyframes shrink {
			0% {
				background-size: 50% 2px;
			}

			100% {
				background-size: 100% 2px;
			}
		}
		.inptMain {
			position: relative;
			.inpt {
				border: none;
				width: 100%;
				color: #555;
				height: 36px;
				padding: 7px 0;
				font-size: 14px;
				box-shadow: none;
				background-color: transparent;
				outline: none;
				background-repeat: no-repeat;
				background-position: bottom, 50%;
				background-color: transparent;
				background-size: 100% 1px;
				background-image: linear-gradient(#ccc8c5, #ccc8c5);
				box-shadow: none;

				&:focus {
					background-image: linear-gradient(#f60, #f60);
					animation: shrink 300ms ease-in-out forwards;
				}
			}
		}
	}
`;

export const DatePickerMain = styled('div')`
	position: absolute;
	border-radius: 0.125rem;
	box-shadow: 0 7px 33px 0 rgba(0, 0, 0, 0.2);
	z-index: 99999 !important;
	background: #fff;
	max-width: 325px;
	min-width: 310px;
	min-height: 305px;
	padding: 4px;
	background-clip: padding-box;
	.datePickerSub {
	}
	.title {
		font-size: 21px;
		font-weight: bold;
		span {
			font-size: 2.5rem;
		}
	}
	.month {
		width: 36px;
		height: 36px;
		margin: 0 2px;
		min-width: max-content;
		button {
			all: unset;
			height: 100%;
			width: 100%;
			text-align: center;
			font-size: 12px;
			color: rgba(0, 0, 0, 0.38);
		}
	}
	.num {
		all: unset;
		width: 36px;
		height: 36px;
		margin: 0 2px;
		padding: 0;
		font-weight: 500;
		background: pink;
		border-radius: 5px;
		span {
			text-align: center;
			color: rgba(0, 0, 0, 0.87);
			font-size: 0.95rem;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&:focus {
			background: red;
		}
	}
`;

export const FlexibleDiv = styled('div')`
	display: flex;
	justify-content: ${(props) => props.justifyContent || "center"};
	align-items: ${(props) => props.alignItems || "center"};
	flex-wrap: ${(props) => props.flexWrap || "wrap"};
	flex-direction: ${(props) => props.flexDir || "row"};
	width: ${({ width }) => width || "100%"};
`;

export const GridableDiv = styled('div')`
	display: grid;
	grid-template-columns: ${(props) => props.gridTemCol || "1fr"};
	grid-template-rows: ${(props) => props.gridTemRow || "auto"};
	grid-gap: ${(props) => props.gridGap || "10px"};
`;

export const DatePickerWrapV1 = styled('div')`
	.main {
		width: 250px;

		.label {
			cursor: pointer;
			color: rgba(0, 0, 0, 0.26);
			display: inline-flex;
			font-size: 14px;
			transition: 0.3s ease all;
			font-weight: 400;
			line-height: 1.428571429;
			padding-left: 0;
		}
		@keyframes shrink {
			0% {
				background-size: 50% 2px;
			}

			100% {
				background-size: 100% 2px;
			}
		}

		.inputMain {
			position: relative;
			height: 36px;

			.inputShowMain {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				left: 0;
				left: 0;
				background-color: transparent;
				background-repeat: no-repeat;
				background-position: bottom, 50%;
				background-color: transparent;
				background-size: 100% 1px;
				background-image: linear-gradient(#ccc8c5, #ccc8c5);

				&:focus {
					background-image: linear-gradient(#f60, #f60);
					animation: shrink 300ms ease-in-out forwards;
				}
				/* /////////////////// */
				input {
					min-width: ${(props) =>
						props.length !== 0 ? " calc(100% - 16px)" : " calc(100% - 34px)"};
					max-width: 90%;
					position: relative;
					z-index: 100;
					cursor: default;
				}

				span {
					width: 34px;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-weight: bold;
					font-size: 2rem;
					position: relative;
					z-index: 9;
				}
			}
		}
		input {
			border: none;
			color: #555;
			height: 100%;
			padding: 7px 0;
			font-size: 14px;
			box-shadow: none;
			background-color: transparent;
			outline: none;
			box-shadow: none;
			/* background-repeat: no-repeat;
      background-position: bottom, 50%;
      background-color: transparent;
      background-size: 100% 1px;
      background-image: linear-gradient(#ccc8c5, #ccc8c5); */

			/* &:focus {
        background-image: linear-gradient(#f60, #f60);
        animation: shrink 300ms ease-in-out forwards;
      } */
		}
		.inputHide {
			z-index: 10;
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			cursor: pointer;
			left: 0;
			opacity: ${(props) => (props.length === 0 ? "0" : "1")};
			color: transparent;
			width: ${(props) =>
				props.length !== 0 ? "16px !important" : "34px !important"};
			min-width: ${(props) =>
				props.length !== 0 ? "16px  !important" : "34px  !important"};
			margin: 0 0 0 auto;
			float: right;
		}
	}
`;
