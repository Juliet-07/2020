import React, {useState, useEffect} from 'react';
import {NumberStatBox} from "./stats.style"

const NumberStat = ({content, ...otherProps}) => {

  return (
    <NumberStatBox {...otherProps} >
      <div className="InnerContainer">
        {content.map(item =>
          <div key={item.id} className="StatBox">
            <div className="NumberSection">
              {item.number}
            </div>
            <div className="LabelSection">
              {item.label}
            </div>
          </div>
        )}
      </div>
    </NumberStatBox>
  )
};

export default NumberStat;