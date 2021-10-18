/*
 * style: Label
 * author: Favour George
 * Date: April 18, 2020
 * Embed label styles
 */

import styled from 'styled-components';
import { variantMatch } from "../../lib/helper.lib";

const variantSize = (size) =>
  size
    ? size === "sm"
    ? "0.567rem"
    : size === "md"
      ? "0.675rem"
      : size === "lg"
        ? "1rem"
        : ""
    : "0.775rem";

const variantIconSize = (size) =>
  size
    ? size === "sm"
    ? "small"
    : size === "md"
      ? "medium"
      : size === "lg"
        ? "large"
        : ""
    : "medium";

const variantPadding = (size, hasIcon) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.8rem 1rem";
  } else {
    return size === "sm"
      ? "0.1rem 0.5rem"
      : size === "md"
        ? "0.1rem 0.6rem"
        : size === "lg"
          ? "0.5rem 1.5rem"
          : "0.5rem 0.8rem";
  }
};

const variantHeight = size => {
  return size === "sm"
    ? "20px"
    : size === "md"
      ? "25px" : ""
};

export const LabelBox = styled.button`
  width: max-content;
  border: none;
  text-transform: uppercase;
  background-color: ${({ bngColor, variant, theme }) =>
  bngColor
    ? bngColor
    : variant
    ? theme.palette[variantMatch[variant]].main
    : theme.palette.primary.main};
  color: ${({color, theme}) => color ? color
    : theme.palette.common.white};
  box-shadow: 0 4px 6px rgba(50,50,93,.11)  , 0 1px 3px rgba(0,0,0,.08);
  padding: ${({ size, hasIcon }) => variantPadding(size, hasIcon)};
  border-radius: 3rem;
  font-size: ${({ size }) => variantSize(size)};
  font-weight: 500;
  outline: 0;
  height: ${({size}) => variantHeight(size)};
  
  &:active,
  &:focus {
    outline: 0;
    border: none;
  }
  
  &::-moz-focus-inner {
    border: 0;
  }
`;