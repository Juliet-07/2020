import React from "react";
import { InputContainer, InputIconStyles } from "./styles";
import { Field, ErrorMessage } from "formik";

const index = ({
  handleChange,
  label,
  required,
  type,
  name,
  placeholder,
  Icon,
  setVisible,
  visible,
}) => (
  <InputContainer className="inputs">
    {label ? (
      <label htmlFor={name || ""} className="label">
        {label}
        {required ? <span className="asteriks">*</span> : null}
      </label>
    ) : null}

    <InputIconStyles>
      <Field
        type={type || "text"}
        name={name || "name"}
        className="lightText"
        placeholder={placeholder || ""}
        handlechange={handleChange}
        accept={type === "file" ? "image/*" : null}
      />
      <div onClick={() => setVisible(!visible)} className="icon-wrapper">
        {Icon ? <Icon className="icon" /> : null}
      </div>
    </InputIconStyles>
    <ErrorMessage name={name || "name"} component="div" className="error" />
  </InputContainer>
);

export default index;
