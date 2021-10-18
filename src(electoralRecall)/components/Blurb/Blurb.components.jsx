import React from "react";
import { BlurbWrapper } from "./Blurb.styled";

export const Blurb = ({ icon, headingText, bodyText, ...otherProps }) => (
  <BlurbWrapper {...otherProps}>
    <span>{icon}</span>
    <h3>{headingText}</h3>
    <p>{bodyText}</p>
  </BlurbWrapper>
);
