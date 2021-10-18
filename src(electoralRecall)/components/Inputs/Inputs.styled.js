/*
 * component: FormStylesWrapper
 * author: George Favour
 * Date: April 16th, 2020
 * EmBED FormStylesWrapper component
 */



import styled from 'styled-components';

const FormStylesWrapper = styled('div')`
.field {
  width: 100%;
  height: 56px;
  border-radius: 4px;
  position: relative;
  /* border: 1px solid #44444445; */
  background-color: rgb(255, 255, 255);
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out;
}

.field:hover {
  background-color: rgba(246, 217, 255, 0.288);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.295);
}

.field.active {
  background-color: #ffffff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
}

.field.active input {
  padding: 24px 16px 8px 16px;
}

.field.active input + label {
  top: 2px;
  opacity: 0.8;
  color: #4e1980;
}

.field.locked {
  pointer-events: none;
}

.field input {
  width: 100%;
  height: 56px;
  position: relative;
  padding: 0px 16px;
  border: none;
  border-radius: 4px;
  font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  color: #282828;
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
    0.1s padding ease-in-out;
  -webkit-appearance: none;
}

.field input::-webkit-input-placeholder {
  color: rgba(90, 90, 90, 0.8);
}
.field input::-moz-placeholder {
  color: rgba(56, 56, 56, 0.8);
}

.field.active input::-moz-placeholder {
  color: rgba(255, 255, 255, 0.8);
}

.field input:-ms-input-placeholder {
  color: rgba(112, 100, 100, 0.8);
}
.field input:-moz-placeholder {
  color: rgba(114, 111, 111, 0.8);
}

.field input + label {
  position: absolute;
  top: 24px;
  left: 16px;
  font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  color: #333333;
  opacity: 0;
  pointer-events: none;
  transition: 0.1s all ease-in-out;
}

.field input + label.error {
  color: #ec392f;
}

.field p.predicted {
  position: absolute;
  top: 8px;
  left: 16px;
  font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #e0e0e0;
  opacity: 1;
  pointer-events: none;
}


`;


export { FormStylesWrapper };