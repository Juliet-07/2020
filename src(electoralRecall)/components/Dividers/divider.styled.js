import styled from "styled-components"

export const DividerLine = styled('div')`
  width: ${({width}) => width ? width : "100%"};
  height: ${({height}) => height ? height : "1px"};
  background: ${({background}) => background ? background : "#BDBDBD"};
  margin: ${({margin})=> margin ? margin: "5px auto"};
  background-image: linear-gradient(left , #f5f5f5 2%, #BDBDBD 50%, #f5f5f5 98%);
  background-image: -webkit-gradient(linear, left bottom, right bottom, color-stop(0.02, #f5f5f5), color-stop(0.5, #BDBDBD), color-stop(0.98, #f5f5f5));
  background-image: -ms-linear-gradient(left , #f5f5f5 2%, #BDBDBD 50%, #f5f5f5 98%);
  background-image: -webkit-linear-gradient(left , #f5f5f5 2%, #BDBDBD 50%, #f5f5f5 98%);
  background-image: -o-linear-gradient(left , #f5f5f5 2%, #BDBDBD 50%, #f5f5f5 98%);
   background-image: -moz-linear-gradient(left , #f5f5f5 2%, #BDBDBD 50%, #f5f5f5 98%);
`;