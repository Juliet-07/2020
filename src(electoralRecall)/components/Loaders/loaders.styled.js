import styled from "styled-components";


const variantSize = (size, defSize) => size ? (
  size === "sm" ? "18px" :
  size === "md" ? "25px" :
  size === "lg" ? "45px" : "") : defSize;

const variantBorderSize = (size) => size ? (
  size === "sm" ? "1.5px solid #FFF" :
  size === "md" ? "2px solid #FFF" :
  size === "lg" ? "4px solid #FFF" : "") : "3px solid #FFF";

const variantBorderTopSize = (size, color) => size ? (
  size === "sm" ? `1.5px solid ${color ? color : "#3498DB"}` :
  size === "md" ? `2px solid ${color ? color : "#3498DB"}` :
  size === "lg" ? `4px solid ${color ? color : "#3498DB"}` : "") : `3px solid ${color ? color : "#3498DB"}`;

export const LoaderBox = styled('div')`
  width: max-content;
  
  .spinner {
    border: ${({size}) => variantBorderSize(size)};
    border-top: ${({size, color}) => variantBorderTopSize(size, color)};
    border-radius: 50%;
    width: ${({size}) => variantSize(size, "30px")};
    height: ${({size}) => variantSize(size, "30px")};
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const PageLoaderBox = styled('div')`
  .ripple {
    display: inline-block;
    position: relative;
    width: ${({size}) => variantSize(size, "80px")};
    height: ${({size}) => variantSize(size, "80px")};
  }
  .ripple div {
    position: absolute;
    border: ${({theme, color}) => `4px solid ${color ? color : theme.palette.primary.main}`};
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;
