/*
 * style: Search
 * author: Favour George
 * Date: April 15, 2020
 * Custom search input styles
 */

import styled from "styled-components";


export const SearchBox = styled('div')`
  width: ${({fullWidth}) => fullWidth ? "100%" : "max-content"};
  height: ${({height, xl}) => height ? height : xl ? "4rem" : "3rem"};
  display: flex;
  align-items: center;
  background: #FFF;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  
  svg {
    color: ${({color, theme}) => color ? color : theme.palette.primary.light};
    font-size: ${({xl}) => xl ? "2.5rem" : "1.5rem" };
    margin: 0 0.5rem;
    cursor: pointer;
  }
  
  input {
    border: none;
    color: ${({color, theme}) => color ? color : theme.palette.primary.light};
    font-size: ${({xl}) => xl ? "1.3rem" : "1rem" };
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    padding-left: 0;
    font-weight: 300;
    outline: 0;
    
    ::placeholder {
      color: ${({color, theme}) => color ? color : theme.palette.primary.main};
      font-weight: 300;
      font-size: ${({xl}) => xl ? "1.3rem" : "0.875rem" };
    }
  }
`;
