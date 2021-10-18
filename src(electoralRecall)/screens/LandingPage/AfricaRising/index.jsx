/*
 * section: Turn your dreams into reality
 * author: Bernardine May Eze
 * Date: May 14, 2020
 * EmBED Turn your dreams into reality
 */

import React from "react";
import {AfricaRisingWrap} from "./styled";
import {FlexibleDiv} from "../../../components/Box/styles";
import {FaQuoteRight} from "react-icons/fa";

const AfricaRising = () => {
  return (
    <AfricaRisingWrap>
      <FlexibleDiv alignItems="stretch" className="main">
        <FlexibleDiv className="part part1">
          <div className="part1Sub">
            <div className="overlay">
              <div className="icon">
                <FaQuoteRight/>
              </div>
            </div>

            <div className="partInner">
              <p>
                The imperative for good leadership in Nigeria
              </p>
              <h3>Africa Rising</h3>
            </div>
          </div>
        </FlexibleDiv>

        <div className="part part2">
          <div className="part2Sub">
            <h1>Africa Rising</h1>

            <p>
              We must be the change we seek; the change we wish to see in the world
            </p>

            <h4>Mahatma Ghandi</h4>
          </div>
        </div>
      </FlexibleDiv>
    </AfricaRisingWrap>
  );
};

export default AfricaRising;
