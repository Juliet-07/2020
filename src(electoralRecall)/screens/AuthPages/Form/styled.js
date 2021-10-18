import styled from "styled-components";
// import HelpImage from "../../../assets/images/helpBG.png";

export const LoginFormWrapper = styled('div')`
	width: 100%;
	animation: enter 1s forwards;

	.main_form {
		form {
			width: 60%;
			display: flex;
			flex-direction: column;
			button {
				align-self: center;
				border-radius: 0;
				text-align: center;
				margin-top: 2em;
				transition: 0.3s ease-in-out;
				:hover {
					background: #ff6600;
					color: white;
				}
			}

			span {
				color: purple;
				font-size: 9px;
				cursor: pointer;
				text-align: right;
				font-weight: 400;
				font-style: italic;
				transition: 0.3s ease-in-out;
				:hover {
					opacity: 0.7;
				}
			}
			
			//@media (max-width: 1199px) {
			//  button {
			//    padding: 0.8rem 1rem;
			//  }
			//}
			
			@media (min-width: 924px) and (max-width: 1034px) {
			  button {
			    padding: 0.8rem 1rem;
			  }
			}
			
			@media (min-width: 924px) and (max-width: 1206px) {
        width: 80%;
      }
      
      @media (max-width: 550px) {
        width: 80%;
        
        button {
			    padding: 0.8rem 1rem;
			  }
      }
		}
	}
	.invalid-feedback {
		position: absolute;
		color: #f94146;
		right: 0;
		font-size: 9px;
		text-align: right;
	}

	p {
		font-size: 9px;
		margin-top: 2em;
		span {
			font-size: 9px;
			font-weight: 800;
			color: purple;
			cursor: pointer;
			opacity: 0.6;
			padding-left: 3px;
			transition: 0.3s ease-in-out;
			:hover {
				opacity: 1;
			}
		}
	}
	@media (max-width: 820px) {
		.main {
			flex-direction: column;

			.main_form {
				width: 100%;
				height: 700px;
				p,
				h2 {
					padding: 0 10px;
				}
				h2 {
					font-size: 22px;
				}
				form {
					.top_inputs {
						div {
							width: 100%;
						}
					}
				}
			}
			.main_image {
				display: none;
			}
		}
	}
	@keyframes enter {
		0% {
			transform: translateY(30px);
			display: block;
			opacity: 0.6;
		}
		100% {
			transform: translateY(0px);
			display: block;
			opacity: 1;
		}
	}
`;
