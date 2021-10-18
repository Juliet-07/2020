/*
 * component: GeneralLayout
 * author: Favour George
 * Date: April 15, 2020
 * General layout for unauthenticated views
 */

import React from 'react';
import Header from '../../Header';
import {LayoutMain} from './generalLayout.styled';
import Footer from "../../Footer";

const GeneralLayout = ({children}) => {
  return (
    <>
      <Header />
      <LayoutMain>{children}</LayoutMain>
      <Footer />
    </>
  );
};

export default GeneralLayout;
