import styled from "styled-components";

export const LeadersQuoteWrapper = styled('div')`
  .main {
    height: 450px;
  }
  .section {
    width: 50%;
    height: 100%;
  }
  
  .image__wrap {
    width: 10rem;
    height: 10rem;
    
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  
  .left {
    background: #fff;
  }
  
  .green {
    h3 {
      font-style: normal;
      text-align: center;
      font-weight: 800;
      font-size: 25px;
      font-family: "Poppins", sans-serif !important;
      color: #003333;
      span {
        color: #003333;
        font-weight: 100;
        font-size: 30px;
      }
    }
    p {
      color: #003333;
      text-align: center;
      font-size: 12px;
      padding-top: 0.5rem;
      line-height: 25px;
    }
    button {
      align-self: flex-start;
      margin-top: 2rem;
      transition: all 500ms ease-in-out;
      border: 1px solid #0033334d;
      
      :hover {
        background: #eee;
        box-shadow: 1px 10px 12px -12px #000;
        span {
          color: #003333;
        }
        svg {
          animation: enter 500ms forwards;
        }
      }
    }
    
    .content {
      margin-top: 1.5rem;
    }

    @keyframes enter {
      0% {
        transform: translateX(-50px);
        opacity: 0;
        font-size: 10px;
      }
      100% {
        transform: translateX(0px);
        opacity: 1;
      }
    }
  }

  @media (max-width: 820px) {
    .main {
      flex-direction: column;
      height: auto;
      .section {
        width: 100%;
        padding: 2rem 0;
        
        .content {
          width: 80%;
        }
      }
    }
  }
`;
