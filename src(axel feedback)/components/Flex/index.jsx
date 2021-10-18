import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  margin: ${({ margin }) => margin || "auto"};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "transparent"}
`;