/*
 * component: Grid
 * author: Favour George
 * Date: April 15, 2020
 * Custom Grid element
 */

import Styled from "styled-components";

const Grid = styled('div')`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || "center"};
  align-items: ${({alignItems}) => alignItems || "center"};
  flex-wrap: ${({flexWrap}) => flexWrap || "wrap"};
  flex-direction: ${({flexDirection}) => flexDirection || "column"};
  height: ${({height}) => height || "auto"};
  
`;

export default Grid;
