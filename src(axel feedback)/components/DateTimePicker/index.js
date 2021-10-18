import React, { useState, useEffect} from "react";
import { Wrapper } from "./styles";
import { AiOutlineCalendar as Calendar } from "react-icons/ai";
export const DateTimePicker = ({inputTypel}) => {
const inputType = "date"
  const [type, setType] = useState("time");
  const [date, setDate] = React.useState("");
  // useEffect(() =>{
  //   setType(!date || date === "Select Date" ? 'text' : 'date')
  // }, [date])
  const empty = React.useRef();
  console.log(date, 'date')
  return (
    <Wrapper>
      <input
        type={type}
        onChange={(event) => {
          console.log(event, 'event')
          setDate(event.target.value); 
        }}
        value={date}
      />
      <div className="icon-wrapper">
        <Calendar className="icon" />
      </div>
    </Wrapper>
  );
};
