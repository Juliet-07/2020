import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 200px;
  height: 48px;
  margin: 0 auto;
  /* background-color: pink; */
  padding: 0;
  border-bottom: 1px solid red;
  .icon-wrapper {
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
  }
  .icon {
    color: red;
  }
  input[type="date"] {
    /* background-color: red; */
    border: none;
    width: 70%;
    color: #555;
    height: 100%;
    padding: 7px 0;
    font-size: 14px;
    box-shadow: none;
    /* background-color: transparent; */
    outline: none;
    box-shadow: none;

    &::-webkit-datetime-edit-month-field {
      color: red;
    }
    &::-webkit-datetime-edit-day-field {
      color: white;
    }
    &::-webkit-datetime-edit-year-field {
      color: blue;
    }

    &::-webkit-clear-button {
      font-size: 18px;
      height: 30px;
      position: relative;
      right: 5px;
      margin-right: 4px;
      color: red;
      visibility: hidden
    }
    &::-webkit-inner-spin-button {
      height: 30px;
    }
    &::-webkit-calendar-picker-indicator {
      font-size: 18px;

      &:hover {
        background-color: lighten(#2f2f2f, 40%);
        color: darken(#fff, 10%);
        cursor: pointer;
      }
      &:active {
        color: blue;
      }
    }
  }
`;
