/*
* Component: Spacer
* Built by: Favour George
* Date: 3, Aug 2020
* Description: Spacer provides space between 2 JSX elements
* */

import React from 'react';
import {SpacerBox} from "./spacer.styles";

const Spacer = ({...props}) => (
  <SpacerBox {...props}>
    <div />
  </SpacerBox>
);

export default Spacer;
