import React from 'react';
import propTypes from 'prop-types';
import {FlexibleDiv} from "../Box/styles";
import {NoDataMain} from "./noData.styles";

const NoData = ({message}) => {
  return (
    <FlexibleDiv
      justifyContent={"center"}
      alignItems={"center"}
    >
      <NoDataMain>
        <p>{message}</p>
      </NoDataMain>
    </FlexibleDiv>
  );
};

NoData.propTypes = {
  message: propTypes.string.isRequired
}

export default NoData;