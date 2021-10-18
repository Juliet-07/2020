/*
 * component: Label
 * author: Favour George
 * Date: April 18, 2020
 * Embed label
 */

import React from 'react';
import {LabelBox} from "./label.styled";

const Label = ({text, ...props}) => {
  return (
    <LabelBox {...props}>
      {text}
    </LabelBox>
  );
};

export default Label;