/*
 * lib: GlobalStylesNormalizr
 * author: Favour George
 * Date: April 9, 2020
 * Normalize client to defaults
 */

import { createGlobalStyle } from "styled-components";

export const GlobalStylesNormalizr = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  button::-moz-focus-inner {
    border: 0;
  }


  body {
    background: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize};
    transition: all 0.25s linear;
    font-weight: 300;
  }
  
  p {
    line-height: ${({ theme }) => theme.lineHeights.p};
    color: ${({ theme }) => theme.palette.text.secondary};
    letter-spacing: 0.00938em;
    font-size: 1rem;
    font-family: 'Rubik', sans-serif;
  }
  
  span {
    line-height: ${({ theme }) => theme.lineHeights.span};
    color: ${({ theme }) => theme.palette.text.secondary};
    letter-spacing: 0.01071em;
    font-size: 0.875rem;
    font-family: 'Rubik', sans-serif;
  }
  
  a {
    color: ${({ theme }) => theme.palette.primary.link};
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.palette.text.primary}; 
    font-family: 'Montserrat', sans-serif;
  }
  
  h1, h2 {
    font-weight: 300;
  }
  
  h3, h4, h5 {
    font-weight: 400;
  }
  
  h1 {
    line-height: 1.167;
    font-size: 6rem;
    letter-spacing: -0.01562em;
  }
  
  h2 {
    line-height: 1.2;
    font-size: 3.75rem;
    letter-spacing: -0.00833em;
  }
  
  h3 {
    line-height: 1.167;
    font-size: 3rem;
    letter-spacing: 0;
  }
  
  h4 {
    line-height: 1.235;
    font-size: 2.125rem;
    letter-spacing: 0.00735em;
  }
  
  h5 {
    line-height: 1.334;
    font-size: 1.5rem;
    letter-spacing: 0;
  }
  
  h6 {
    font-weight: 500;
    line-height: 1.6;
    font-size: 1.25rem;
    letter-spacing: 0.0075em;
  }
  
  ul {
    margin: 0;
    padding: 0;
  }
 `;
