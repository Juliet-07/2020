import React from "react";
import { AuthTabWrapper } from "./styled";
import { FlexibleDiv } from "../../DatePicker/datePicker.styles";
import { CheckIcon } from "../../../assets/svg/index";

export const AuthTab = ({
	icon = "",
	title = "",
	bodyText = "",
	onItemClicked = () => console.error("You passed no action to the component"),
	isActive = false,
}) => {
	return (
		<AuthTabWrapper>
			<FlexibleDiv
				onClick={onItemClicked}
				className={isActive ? "tabitem" : "tabitem tabitem--inactive"}
				flexDir="column"
			>
				{isActive && (
					<FlexibleDiv className="checked">
						<CheckIcon height="12px" width="12px" color="#6c006c" />
					</FlexibleDiv>
				)}
				<FlexibleDiv className="icon">{icon}</FlexibleDiv>
				<h5>{title}</h5>
				<p>{bodyText}</p>
			</FlexibleDiv>
		</AuthTabWrapper>
	);
};
