import styled from "styled-components";
import BG1 from "../../assets/images/bng/take-stand.jpeg";
import BG2 from "../../assets/images/bng/take-stand-2.jpeg";
import BG3 from "../../assets/images/bng/purple-bng.jpg";
import BG4 from "../../assets/images/bng/green-bng.jpg";

let random = Math.floor(Math.random() * 4);
let bigSize = [BG1, BG2, BG3, BG4];

export const AuthWrapper = styled('div')`
	background-image: linear-gradient(
			0deg,
			rgba(87, 167, 137, 0.8),
			rgba(0, 83, 108, 0.8)
		),
		url(${() => bigSize[random]});
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	height: auto;
	width: 100%;
	display: flex;
	min-height: 100vh;
	align-items: center;
	justify-content: flex-end;
	position: relative;
	
	.form-section {
		width: 30%;
		padding: 2rem 0;
		min-height: 33rem;
		background: white;
		position: absolute;
		left: 8rem;
		top: 0;
		border-radius: 0 0 10px 10px;
		
		img {
			width: 100.54px;
		}
		
		.text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding-top: 3em;
			h4 {
				font-style: normal;
				font-weight: normal;
				font-size: 18.6154px;
				line-height: 36px;
				color: #4f4f4f;
				display: flex;
				align-items: center;
				text-align: center;
				text-transform: ${({capitalized}) =>
	capitalized ? "capitalize" : "uppercase"};
			}
			p {
				font-style: normal;
				font-weight: normal;
				font-size: 10px;
				line-height: 12px;
				text-align: center;

				color: #8798ad;
			}
		}
		
		.tab {
			margin-top: 1em;
		}
		
		.content {
			margin-top: 1.5em;
		}
	}
	
	.text-section {
		width: 50%;
		position: fixed;
		//position: relative;
		
		h1 {
			font-style: normal;
			font-weight: 300;
			font-size: 20px;
			line-height: 53px;
			text-transform: uppercase;
			letter-spacing: 0.873727px;

			color: #fafafa;
		}
		p {
			font-style: normal;
			font-weight: normal;
			font-size: 18px;
			line-height: 26px;
			position: relative;
			/* left: -1.5em; */
			color: #f2f2f2;
			opacity: 0.9;
		}
	}
	
	.form-links {
		position: absolute;
		top: 20rem;
		width: 90%;
		
		ul {
			display: flex;
			justify-content: flex-start;
			list-style-type: none;
			width: 100%;
		}
		ul li {
			padding: 0 2em;
		}
		ul li a {
			position: relative;
			font-weight: 500;
			display: block;
			text-decoration: none;
			font-size: 15px;
			cursor: pointer;
			color: #ecf0f1;
			text-transform: uppercase;
			padding: 4px 0;
			transition: 0.5s;
		}
		ul li a::after {
			position: absolute;
			content: "";
			width: 100%;
			height: 2px;
			top: 100%;
			left: 0;
			background: #ff7000;
			transition: transform 0.5s;
			transform: scaleX(0);
			transform-origin: right;
		}
		ul li a:hover {
			color: #075c5c;
		}
		ul li a:hover::after {
			transform: scaleX(1);
			transform-origin: left;
		}
	}
	
	@media (max-width: 923px) {
		padding: 0.5em 1em;
		
		.text-section {
			display: none;
		}
		
		.form-section {
			width: 100%;
			margin: 1em;
			height: auto;
			padding-bottom: 2em;
			top: 0;
			left: 0;
			position: initial;
			border-radius: 4px;
			.tab {
				width: 100%;
			}
		}
	}
`;
