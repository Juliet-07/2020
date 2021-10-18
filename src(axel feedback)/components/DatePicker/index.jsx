
import React from "react";
import { DatePickerWrapV1 } from "./styles";
import {Flex} from '../Flex';
import { IoIosCalendar } from "react-icons/io";
import { GrClose } from "react-icons/gr";

export const DatePickerV1 = ({ label }) => {
  const [date, setDate] = React.useState(
    new Date().toJSON().slice(0, 10).replace(/-/g, "-")
  );

  const empty = React.useRef();
  console.log(date, 'date')
  return (
    <DatePickerWrapV1 length={date.length}>
      <div id="datePicker-main">
        {label ? (
          <label htmlFor="input" for="input" id="datePicker-label">
            {label}
          </label>
        ) : null}

        <div id="datePicker-inputMain">
          <Flex
            id="datePicker-inputShowMain"
            justifyContent="flex-start"
            flexWrap="nowrap"
          >
            <input
              type="text"
              id="datePicker-inputShow"
              value={
                empty.current && empty.current.value.length === 0
                  ? "Pick a date"
                  : date
              }
              contentEditable={false}
              disabled="disabled"
            />

            {date.length === 0 && (
              <span id="datePicker-inputShowIcon">
                <IoIosCalendar />
              </span>
            )}
          </Flex>
          <input
            type="date"
            ref={empty}
            value={date}
            id="datePicker-inputHide"
            onChange={(event) => {
              setDate(event.target.value);
              console.log(date);
            }}
          />

          {date.length === 0 ? null : (
            <Flex id="datePicker-cancel">
              <GrClose />
            </Flex>
          )}
        </div>
      </div>
    </DatePickerWrapV1>
  );
};

 
