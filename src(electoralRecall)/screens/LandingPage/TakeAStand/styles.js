import styled from "styled-components";
import ParallaxImage from '../../../assets/images/bng/take-stand.jpeg'

export const TakeAStandWrap = styled('div')`
  height: 100vh;
  background: url(${ParallaxImage}) center no-repeat fixed;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .overlay {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.58);
  }
  
  .take-stand {
    z-index: 1000;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    .title {
      background-color: #F9F9F9B8;
      padding: 1rem 0.5rem;
      border-radius: 4px;
      color: #0f8080;
      font-size: 3rem;
      text-align: center;
    }
    
    .take-stand__content {
      margin-top: 2.5rem;
      text-align: center;
      
      h4, p {
        color: #F9F9F9;
      }
      
      h4 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      
      p {
        line-height: 2;
      }
      
    }
    
    @media screen and (max-width: 824px) {
      .title {
        font-size: 2rem;
      }
      
      .take-stand__content {
        h4 {
          font-size: 1.55rem;
        }
      }
    }
  }
`;