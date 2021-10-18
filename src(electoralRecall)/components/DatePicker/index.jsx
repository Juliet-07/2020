/*
 * component: date_picker
 * audivor: George Favour 
 * Date: May 12div, 2020
 * EmBED date_picker component
 */

import React from "react";
import {
  DatePickerWrap,
  DatePickerMain,
  FlexibleDiv,
  DatePickerWrapV1
} from "./datePicker.styles";
import { IoIosCalendar } from "react-icons/io";

export const DatePickerV1 = () => {
  const [date, setDate] = React.useState(
    new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "-")
  );

  const empty = React.useRef();
  return (
    <DatePickerWrapV1 length={date.length}>
      <div className="main">
        <label htmlFor="inpt" for="input" className="label">
          Date Picker
        </label>

        <div className="inputMain">
          <FlexibleDiv className="inputShowMain" justifyContent="flex-start">
            <input
              type="test"
              className="inputShow"
              value={
                empty.current && empty.current.value.length === 0
                  ? "Pick a date"
                  : date
              }
              contentEditable={false}
            />
            {date.length === 0 && (
              <span className="inputShowIcon">
                <IoIosCalendar />
              </span>
            )}

          </FlexibleDiv>
          <input
            type="date"
            ref={empty}
            value={date}
            className="inputHide"
            id="input"
            onChange={event => {
              setDate(event.target.value);
              console.log(date.length);
              console.log(empty.current.value, "empty");
            }}
          />
        </div>
      </div>
    </DatePickerWrapV1>
  );
};

export const DatePickerV2 = () => {
  return (
    <DatePickerWrap>
      <div className="main">
        <label htmlFor="inpt" for="inpt" className="inptLabel">
          Date Picker
        </label>
        <div className="inptMain">
          <input type="test" className="inpt" id="inpt" />
        </div>

        <DatePickerMain className="datePicker">
          <div className="datePickerSub">
            <div>
              <div>
                <header className="title">
                  <FlexibleDiv justifyContent="space-between">
                    <div className="left dir">
                      <span>‹</span>
                    </div>
                    <div className="month"> May 2020</div>
                    <div className="right dir">
                      <span>›</span>
                    </div>
                  </FlexibleDiv>
                </header>

                <FlexibleDiv>
                  <span className="month">
                    <button>SU</button>
                  </span>
                  <span className="month">
                    <button>MO</button>
                  </span>
                  <span className="month">
                    <button>TU</button>
                  </span>
                  <span className="month">
                    <button>WE</button>
                  </span>
                  <span className="month">
                    <button>TH</button>
                  </span>
                  <span className="month">
                    <button>FR</button>
                  </span>
                  <span className="month">
                    <button>SA</button>
                  </span>
                </FlexibleDiv>

                <FlexibleDiv>
                  <FlexibleDiv>
                    <button className="num">
                      <span className="txt">1</span>
                    </button>
                  </FlexibleDiv>
                  <FlexibleDiv>
                    <button className="num">
                      <span className="txt">2</span>
                    </button>
                  </FlexibleDiv>
                  <FlexibleDiv>
                    <button className="num">
                      <span className="txt">2</span>
                    </button>
                  </FlexibleDiv>
                  <FlexibleDiv>
                    <button className="num">
                      <span className="txt">2</span>
                    </button>
                  </FlexibleDiv>
                  <FlexibleDiv>
                    <button className="num">
                      <span className="txt">2</span>
                    </button>
                  </FlexibleDiv>
                  <FlexibleDiv>
                    <button className="num">
                      <span className="txt">2</span>
                    </button>
                  </FlexibleDiv>
                  <FlexibleDiv>
                    <button className="num">
                      <span className="txt">2</span>
                    </button>
                  </FlexibleDiv>
                </FlexibleDiv>
              </div>
            </div>
          </div>
        </DatePickerMain>
      </div>
    </DatePickerWrap>
  );
};
