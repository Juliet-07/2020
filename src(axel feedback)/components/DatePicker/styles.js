import styled from "styled-components";
export const DatePickerWrapV1 = styled("div")`
  #datePicker-main {
    width: 100%;
    border-bottom: 1px solid black;
    background-color: transparent;
    #datePicker-label {
      /* cursor: pointer; */
      color: #828282;
      display: inline-flex;
      font-size: 13px;
      transition: 0.3s ease all;
      font-weight: 500;
      line-height: 1.428571429;
      padding-left: 0;
      width: 100%;
      padding-left: 15px;
    }
    @keyframes shrink {
      0% {
        background-size: 50% 2px;
      }

      100% {
        background-size: 100% 2px;
      }
    }

    #datePicker-inputMain {
      position: relative;
      height: 36px;
      background: transparent;
      box-shadow: 0 2px 2px rgba(50, 50, 93, 0.11),
        0 1px 1px rgba(0, 0, 0, 0.08);
      border-radius: 4px;
      padding: 22px 0;
      /* &:hover {
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.12);
      } */

      #datePicker-inputShowMain {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        left: 0;
        background-color: transparent;
        padding: 0 15px;
        #datePicker-inputShow {
          min-width: ${(props) =>
            props.length !== 0 ? " calc(100% - 16px)" : " calc(100% - 34px)"};
          max-width: 90%;
          position: relative;
          z-index: 100;
          cursor: default;
        }

        #datePicker-inputShowIcon {
          width: 34px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 2rem;
          position: relative;
          z-index: 9;
          & > svg {
            fill: rgba(81, 78, 78, 0.54);
          }
        }
      }
    }
    input {
      border: none;
      color: #555;
      height: 100%;
      padding: 7px 0;
      font-size: 14px;
      box-shadow: none;
      background-color: transparent;
      outline: none;
      box-shadow: none;
    }
    #datePicker-inputHide {
      z-index: 10;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 15px;
      left: 0;
      cursor: pointer;
      left: 0;
      opacity: ${(props) => (props.length === 0 ? "0" : "1")};
      color: transparent;
      width: ${(props) =>
        props.length !== 0 ? "16px !important" : "34px !important"};
      min-width: ${(props) =>
        props.length !== 0 ? "16px  !important" : "34px  !important"};
      margin: 0 0 0 auto;
      float: right;
    }
    #datePicker-cancel {
      position: absolute;
      right: 15px;
      top: 0;
      bottom: 0;
      width: 16px;
      z-index: ${(props) => (props.length === 0 ? "11" : "5")};
    }
  }
`;