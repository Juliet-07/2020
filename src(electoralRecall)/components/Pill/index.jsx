import React from "react";
import {PillBox} from "./pill.styled";


const Pill = ({icon, role, to, disabled, ...otherProps}) => {
  return (
    <PillBox
      className="active"
      href={to}
      role={role}
      disabled={disabled}
      {...otherProps}
    >
      {icon}
    </PillBox>
  );
};

export default Pill;
