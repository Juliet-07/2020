import React from "react";
import {Form, Formik} from "formik";
import {LoginFormWrapper} from "./styled";
import CustomInput from "./Inputs/Inputs";
import Button from "../../../components/Button";
import {FlexibleDiv} from "../../../components/Box/styles";
import {useRouter} from "next/router";

const Forms = ({
  type,
  meta,
  schema,
  loading,
  onSubmit,
  handleToggle,
  inputs = [],
  initialValues
}) => {
  const router = useRouter();

  return (
    <LoginFormWrapper>
      <FlexibleDiv className="main_form" flexDir="column">
        <Formik
          initialValues={
            {
              ...initialValues
            }
          }
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          <Form> {
            inputs.map(({
              name,
              type,
              placeholder,
              initialValue
            }, idx) => (
              <CustomInput
                type={type}
                name={name}
                width="100%"
                key={`${name}-${idx}`}
                placeholder={placeholder}
                handleToggle={handleToggle}
                initialValue={initialValue}
              />
            ))
          }
            {type === "login" && (
              <span
                onClick={() => meta === "admin" ?
                  router.push("/admin/forgot-password") :
                  router.push("/forgot-password")
                }
              >
                Forgot password?
              </span>
            )}
            <Button
              bngColor="purple" color="#fff" type="submit"
              text={
                type === "signup" ? "Create an account" : type === "forgotpassword"
                  ? "RECOVER PASSWORD"
                  : type === "reset-password" ? "Reset Password" : "login"
              }
              click={
                () => []
              }
              fullwidth
              loading={loading}
            />
          </Form>
        </Formik>
        {type === "signup" ? (
          <p>You already have an account? <span onClick={() => router.push("/login")}>Sign in</span></p>
        ) : type === "forgotpassword" ? (
          <p><span onClick={() => router.push("/")}>Try another way</span></p>
        ) : type === "admin" ? null : (
          <p>Don't have an account?<span onClick={() => router.push("/sign-up")}>Sign up</span></p>
        )}
      </FlexibleDiv>
    </LoginFormWrapper>
  );
};

export default Forms;
