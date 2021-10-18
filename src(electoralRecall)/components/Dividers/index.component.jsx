import React from "react"
import {DividerLine} from "./divider.styled"

const Divider = ({...otherProps}) => {
  return (
    <DividerLine {...otherProps}/>
  )
};

export default Divider;