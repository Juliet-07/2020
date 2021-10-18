import React from "react";
import propTypes from 'prop-types';
import {FloatButtonBox} from "./floatButton.styled";


const FloatButton = ({icon, type, click, disabled, ...otherProps}) => {
  return (
    <FloatButtonBox
      type={type}
      onClick={click}
      disabled={disabled}
      {...otherProps}
    >
      {icon}
    </FloatButtonBox>
  );
};

FloatButton.propTypes = {
  type: propTypes.string.isRequired,
  click: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  icon: propTypes.any,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  variant: propTypes.string,
  size: propTypes.string
};

export default FloatButton;
