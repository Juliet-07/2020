import React from 'react';
import PropTypes from 'prop-types';
import {useField} from "formik";
import {FormControl, InputPropsWrapper, InputWrapper} from "../../Box/styles";
import {Label} from "../input.styles";
import {__TextField, TextFieldWrapper} from "./textField.styles";
import {BiHide as HideIcon, BiShow as ShowIcon} from "react-icons/bi";


const getInputProps = (type, hidePassword, props, togglePasswordVisibility) => {
  if (type === 'password') {
    return hidePassword
      ? (
        <InputPropsWrapper
          onClick={togglePasswordVisibility}
          isPassword
          {...props}
        >
          <HideIcon />
        </InputPropsWrapper>
      )
      : (
        <InputPropsWrapper
          onClick={togglePasswordVisibility}
          isPassword
          {...props}
        >
          <ShowIcon />
        </InputPropsWrapper>
      )
  } else if (props.inputProps) {
    return (
      <InputPropsWrapper {...props}>
        {props.inputProps.icon}
      </InputPropsWrapper>
    )
  }
}

/**
 * TextField component interfaced directly with Formik
 * */
const TextFieldWithFormik = ({label, ...props}) => {
  let [field, meta] = useField(props);
  const [hidePassword, setShowPassword] = React.useState(false);
  field.type = props.type;

  const togglePasswordVisibility = () => setShowPassword(!hidePassword)

  const getType = inputType => {
    if (inputType === "password") {
      return hidePassword ? 'text' : 'password'
    }
    return inputType;
  }

  return (
    <FormControl
      flexDir={"column"}
      width={props.width}
      margin={"0.5rem auto"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      bngColor={props.bngColor || '#FFF'}
    >
      {label ? (
        <Label htmlFor={props.name}>{label}</Label>
      ) : null}

      <InputWrapper {...props}>
        <TextFieldWrapper {...props}>
          <__TextField
            {...props}
            {...field}
            type={getType(field.type)}
          />

          {getInputProps(props.type, hidePassword, props, togglePasswordVisibility)}

          {meta.touched && meta.error ? (
            <div className="invalid-feedback">{meta.error}</div>
          ) : null}
        </TextFieldWrapper>
      </InputWrapper>
    </FormControl>
  )
}

/**
 * TextField component natively implemented
 * */
const TextFieldComponent = ({
  name,
  type,
  value,
  label,
  errors,
  required,
  handleBlur,
  handleChange,
  ...props
}) => {
  const [hidePassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => setShowPassword(!hidePassword)

  const getType = type => {
    if (type === "password") {
      return hidePassword ? 'text' : 'password'
    }
    return type;
  }

  return (
    <FormControl
      flexDir={"column"}
      width={props.width}
      margin={"0.5rem auto"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      bngColor={props.bngColor || '#FFF'}
    >
      {label ? (
        <Label htmlFor={props.name}>{label}</Label>
      ) : null}

      <InputWrapper {...props}>
        <TextFieldWrapper {...props}>
          <__TextField
            name={name}
            value={value}
            required={required}
            onBlur={handleBlur}
            onChange={handleChange}
            type={getType(type)}
            {...props}
          />
          {getInputProps(type, hidePassword, props, togglePasswordVisibility)}
        </TextFieldWrapper>
      </InputWrapper>
    </FormControl>
  )
}

const TextField = ({withFormik, ...props}) => {
  return withFormik
    ? <TextFieldWithFormik {...props} />
    : <TextFieldComponent {...props} />
};

// =============================================
// Typechecking enforcement implementation
// =============================================

TextField.defaultProps = {
  name: 'textField',
  withFormik: false,
  handleBlur: () => {},
  handleChange: () => {}
}

TextField.propTypes = {
  label: PropTypes.string,
  withFormik: PropTypes.bool,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default TextField;
