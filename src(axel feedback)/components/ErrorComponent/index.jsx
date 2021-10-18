

import React from 'react';
import propTypes from 'prop-types';
import {Flex} from "../../components/Flex";
import {ErrorStyles} from "./styles";

function genMessage(message = '') {
  if (!message || !message.length) {
    return 'Invalid message prop received'
  }

  if (message.toLowerCase().includes("network error")) {
    return 'Network error while processing request, please try again.'
  }

  if (message.toLowerCase().includes("login")) {
    return 'Oppsss! Your session is likely expired. Login to continue'
  }

  return message;
}

const ErrorDisplay = ({message}) => {
  return (
    <Flex>
      <ErrorStyles>
        <p>{genMessage(message)}</p>
      </ErrorStyles>
    </Flex>
  );
};

ErrorDisplay.propTypes = {
  message: propTypes.string.isRequired,
}

export default ErrorDisplay;
