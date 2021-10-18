import styled from "styled-components";

export const LayoutStyles = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  .layoutContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    main {
      height: 80vh;
      min-height: calc(100vh - 70px);
      width: 83%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 0;
      overflow: hidden;
      .container {
        padding-left: 15px;
        padding-right: 22px;
        width: 100%;
        // padding-top: 1rem;
        height: max-content;
        // padding-bottom: 60px;
        overflow-x: hidden;
        overflow-y: scroll;
        box-sizing: content-box;
      }
    }
  }
  @media (max-width: 470px) {
    .layoutContainer {
      main {
        width: 87%;
      }
    }
  }
  .bottom-sketch {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;