/*
 * component: Landing Header Styles
 * author: Favour George
 * Date: April 14, 2020
 */

import styled from 'styled-components';
import LHBNG from '../../../assets/images/bng/green-bng.jpg';

export const LandingHeaderBox = styled('div')`
  background: url(${LHBNG}) center no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  position: relative;
  
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(0,51,51);
    background: -moz-linear-gradient(65deg, rgba(0, 51, 51, 0.88) 5%, rgba(16, 119, 119, 0.91) 33%, rgba(251, 251, 251, 0) 100%);
    background: -webkit-linear-gradient(65deg, rgba(0, 51, 51, 0.88) 5%, rgba(16, 119, 119, 0.91) 33%, rgba(251, 251, 251, 0) 100%);
    background: linear-gradient(65deg, rgba(0, 51, 51, 0.88) 5%, rgba(16, 119, 119, 0.91) 33%, rgba(251, 251, 251, 0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#003333",endColorstr="#fbfbfb",GradientType=1);
  }
  
  section {
    width: 100%;
    z-index: 1000;
    
    .info {
      width: 60%;
      
      h3 {
        color: ${({ color, theme }) => color ? color : theme.palette.grey[200]};
        font-weight: 700;
        line-height: 1.2;
      }
      
      h6 {
        padding-bottom: 1rem;
        color: ${({ color, theme }) => color ? color : theme.palette.grey[300]};
      }
      
      p {
        color: ${({ color, theme }) => color ? color : theme.palette.grey[300]};
        padding-bottom: 2rem;
        font-size: 0.859rem;
        text-align: justify;
      }
      
      @media (min-width: 830px) and (max-width: 1210px) {
        width: 80%;
      }
      
      @media (min-width: 650px) and (max-width: 829px) {
        width: 90%;
        
        h3 {
          line-height: 1;
        }
      }
      
      @media (max-width: 649px) {
        width: 100%;
        
        h3 {
          line-height: 1;
        }
      }
      
      @media (max-width: 480px) {
        text-align: center;
        
        h3 {
          font-size: 2rem;
          font-weight: 600;
        }
      }
    }
    
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      button {
        margin: 0 auto;
      }
    }
  }
  
  @media (max-width: 649px) {
    padding: 0 3rem; 
  }
`;