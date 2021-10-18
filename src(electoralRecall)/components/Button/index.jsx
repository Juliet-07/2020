import React from "react";
import {ButtonStyled} from "./button.styled";
import propTypes from 'prop-types';
import Loader from "../Loaders";


const Button = React.forwardRef(({type, text, loading, disabled, click, icon, ...otherProps}, ref) => {
  const renderText = (
    <span className={'text__icon'}>
      <span>{text}</span>
      <span className={"icon"}>{icon}</span>
    </span>
  );


  return (
    <ButtonStyled
      ref={ref}
      type={type}
      onClick={click}
      hasIcon={!!icon}
      disabled={disabled}
      {...otherProps}
    >
      {loading ? <Loader size={"sm"} {...otherProps} className={"loader"} /> : (
        !icon ? text : renderText
      )}
    </ButtonStyled>
  );
});

Button.propTypes = {
  type: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  variant: propTypes.string,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  size: propTypes.string,
  click: propTypes.func,
  icon: propTypes.any
};

export default Button;
