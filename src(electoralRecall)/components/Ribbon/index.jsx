/*
 * component: Ribbon
 * author: George Favour 
 * Date: April 15, 2020
 * Embed Ribbon Component
 */

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RibbonWrap } from './ribbon.styles'

const Ribbon = () => {
  return (
    <RibbonWrap>
      <div className="container">
        Under build
      </div>
    </RibbonWrap>)
};

export default Ribbon;
