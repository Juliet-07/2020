import styled from "styled-components";
import {variantMatch} from "../../lib/helper.lib";

const variantSize = (size) => size ? (
  size === "sm" ? "30px" :
  size === "md" ? "50px" :
  size === "lg" ? "90px" : '') : '60px';

const variantIconSize = (size) => size ? (
  size === "sm" ? "x-small" :
  size === "md" ? "medium" :
  size === "lg" ? "1.93rem" : '') : '1.25rem';

export const PillBox = styled.a`
  height: ${({size}) => variantSize(size)};;
  width: ${({size}) => variantSize(size)};;
  display: flex;
  line-height: 60px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({color, variant, theme}) => color ? color : variant ? theme.palette[variantMatch[variant]].contrastText : theme.palette.grey[200]};
  color: ${({bngColor, variant, theme}) => bngColor ? bngColor : variant ? theme.palette[variantMatch[variant]].main : theme.palette.primary.main};
  // background-color: ${({bngColor, variant, theme}) => bngColor ? bngColor : variant ? theme.palette[variantMatch[variant]].main : theme.palette.grey[200]};
  // color: ${({color, variant, theme}) => color ? color : variant ? theme.palette[variantMatch[variant]].contrastText : theme.palette.primary.main};
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  transition: all .15s ease;
  
  svg {
    font-size: ${({size}) => variantIconSize(size)};
  }
  
  &:disabled {
    background: ${({theme}) => theme.palette.grey[400]};
    cursor: not-allowed;
  }
  
  &.active {
    // background: red
  }
  
  &:active {
    color: ${({color, variant, theme}) => color ? color : variant ? theme.palette[variantMatch[variant]].contrastText : theme.palette.grey[200]};
    background: ${({bngColor, variant, theme}) => bngColor ? bngColor : variant ? theme.palette[variantMatch[variant]].main : theme.palette.primary.main};
    box-shadow: 0;
  }
`;
