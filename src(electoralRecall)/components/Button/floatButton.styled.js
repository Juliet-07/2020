import styled from "styled-components";
import { variantMatch } from "../../lib/helper.lib";
import { shadeColor } from "../../lib/factory.lib";

const variantSize = size =>
  size
    ? size === "sm"
      ? "30px"
      : size === "md"
      ? "50px"
      : size === "lg"
      ? "90px"
      : ""
    : "60px";

const variantIconSize = size =>
  size
    ? size === "sm"
      ? "x-small"
      : size === "md"
      ? "medium"
      : size === "lg"
      ? "1.93rem"
      : ""
    : "1.25rem";

export const FloatButtonBox = styled.button`
  height: ${({ size }) => variantSize(size)};
  width: ${({ size }) => variantSize(size)};
  min-height: ${({ size }) => variantSize(size)};
  min-width: ${({ size }) => variantSize(size)};
  display: flex;
  line-height: 60px;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: none;
  outline: 0;
  background-color: ${({ bngColor, variant, theme }) =>
    bngColor
      ? bngColor
      : variant
      ? theme.palette[variantMatch[variant]].main
      : theme.palette.grey[200]};
  color: ${({ color, variant, theme }) =>
    color
      ? color
      : variant
      ? theme.palette[variantMatch[variant]].contrastText
      : theme.palette.primary.main};
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  transition: all .1s ease-in-out;
  
  svg {
    font-size: ${({ size }) => variantIconSize(size)};
  }
  
  &:disabled {
    background: ${({ theme }) => theme.palette.grey[400]};
    cursor: not-allowed;
  }
  
  &::-moz-focus-inner {
    border: 0;
  }


  &:hover {
    position: relative;
    bottom: 0.2rem;
    background: ${({ bngColor, variant, theme }) =>
      bngColor
        ? shadeColor(bngColor, -15)
        : variant
        ? shadeColor(theme.palette[variantMatch[variant]].dark, 30)
        : shadeColor(theme.palette.primary.dark, 25)};
  }
`;
