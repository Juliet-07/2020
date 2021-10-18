const primary_org = "#FF6600";
const light = "#F4F5F7";

import styled from "styled-components";
import bckImg from "../../../assets/images/africanmap-721x654.png";

export const AfricaRisingWrap = styled('div')`
  background-color: ${({theme}) => theme.palette.secondary.main};

  .main {
    height: 400px;
    @media (max-width: 800px) {
      height: auto;
      flex-direction: column;
    }
  }
  .part{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-width: 300px; */
    @media (max-width: 800px) {
      padding: 5rem 1rem;
    }
  }
  .part1{
    background-image: url('${bckImg}');
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 630px) {
      padding: 0.5rem 0;
    }

    .part1Sub {
      position: relative;
      width: 50%;
      padding: 70px 50px 30px;
      @media (max-width: 1000px) {
        width: 70%
      }
      @media (max-width: 800px) {
        margin: 70px 0;
      }
      @media (max-width: 400px) {
        width: 90%;
      }
      
      .overlay {
        background: #1C1C1B;
        position: absolute;
        bottom: 0;
        top: 0;
        right: 0;
        left: 0;
        opacity: .8;
        .icon{
          padding: 20px;
          border: 2px solid ${primary_org};
          max-width: max-content;
          position: absolute;
          top: -40px;
          right:0;
          left:0;
          margin: auto;
          border-radius: 50%;
          svg {
            fill: ${primary_org};
            font-size: 2rem;
          }
        }
      };
      .partInner{
        position: relative;
        z-index: 2;
        p{
          color: ${light};
          text-align: center;
          font-weight: bolder;
          font-size: 16px;
        }
        h3 {
          color: ${light};
          text-align: center;
          font-size: 14px;
          padding: 10px;
          margin: 20px auto;
          background-repeat: no-repeat;
          background-position: top, 50%;
          background-size: 50% 3px;
          background-image: linear-gradient(#FF6600, #FF6600);
          transition: 300ms ease-in-out;
          width: max-content;
          font-weight: 300;
        }
      }
    }
    &:hover .partInner h3 {
      background-size: 80% 3px;
    }
  }

  .part2 {
    .part2Sub {
      width: 65%;
      //margin: 50px auto;
      @media (max-width: 400px) {
        width: 90%;
        text-align: center;
      }
      
      h4 {
        color: ${light};
        font-size: 1rem;
        font-weight: bold;
        margin-top: 1rem;
      }
      
      h1 {
        color: ${light};
        font-size: 2.3rem;
        margin: 5px 0 20px 0;
      }
      p{
        color: ${light};
        font-size: 14px;
        text-align: justify;
      }
  }
}
`;
