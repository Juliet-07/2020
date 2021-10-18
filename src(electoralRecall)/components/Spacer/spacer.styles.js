/*
* Styles: Spacer
* Built by: Favour George
* Date: 3, Aug 2020
* Description: Spacer provides space between 2 JSX elements
* */

import styled from "styled-components";
import propTypes from 'prop-types';

export const SpacerBox = styled('div')`
  width: 100%;
  margin: ${({mx}) => `${mx} auto` || '2rem auto'};
`;

SpacerBox.propTypes = {
  mx: propTypes.string
}