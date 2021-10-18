import styled from "styled-components";

export const BlurbWrapper = styled('div')`
  width: ${({ width }) => width || "40%"};
  margin: 1em 1em;
  h3 {
    font-size: ${({ headerFontSize }) => headerFontSize || "16px"};
    margin: 0.5em 0;
  }
  p {
    font-size: ${({ fontSize }) => fontSize || "12px"};
  }
`;
