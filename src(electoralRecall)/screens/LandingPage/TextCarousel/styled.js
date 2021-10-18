import styled from "styled-components";

const primary_org = "#FF6600";
const light = "#F4F5F7";

export const TextCarouselWrap = styled('div')`
  /* background-color: ${({ theme }) => theme.palette.secondary.main}; */
  padding: 50px 0 50px 50px;
  box-sizing: content-box;
  @media (max-width: 400px) {
    padding: 50px 0;
  }

  .container {
    padding-right: 50px;
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 2px 100px;
    background-image: linear-gradient(#F4F5F7, #F4F5F7);
    transition: 300ms ease-in-out;
    height: 100%;
    
  }
  .number {
    width: 40px;
    div {
      background: #ff6600;
      color: ${light};
      height: 40px;
      h1 {
        font-size: 1.5rem;
        color: ${light};
        font-weight: bold;
      }
    }
    h3 {
      color: ${light};
      font-size: 14px;
      text-align: center;
      margin-top: 15px;
      font-weight: bold;
    }
  }
  .content {
    flex: 1;
    margin-left: 30px;
    p {
      font-size: 14px;
      color: ${light};
      font-weight: bolder;
    }
    .author {
      color: ${light};
      font-size: 14px;
      font-weight: 300;
      padding: 10px 0;
      margin-top: 30px;
      background-repeat: no-repeat;
      background-position: bottom left;
      background-size: 42px 3px;
      background-image: linear-gradient(#ff6600, #ff6600);
      transition: 300ms ease-in-out;
    margin-left: 0;
    margin-right: auto;
    }
  }
  &:hover .content .author {
    background-size: 100% 3px;
  }
`;
