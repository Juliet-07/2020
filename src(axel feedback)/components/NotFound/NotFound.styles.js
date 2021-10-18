import styled from "styled-components";

export const NotFoundStyles = styled.div`
  width: 100%;
  height: 100vh;

  .errorMessage {
    padding: 1rem;
    .iconContainer {
      height: 20rem;
      b {
        font-size: 10rem;
        color: #0000ff;
        padding: 0;
        margin: 0;
        text-wrap: no-wrap;
      }
    }
    p {
      font-size: 0.9rem;
      font-weight: 600;
      color: #000000;
    }
  }
  .returnText {
    font-size: 0.9rem;
    font-weight: bold;
    text-decoration: none;
    color: #9c9ca1;
  }
`;