import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background: #ffffff;
  min-height: 5.2rem;
  height: 5.2rem;
  padding: 10px 10% 10px 3%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  right: 0;
  overflow: hidden;
  z-index: 1;

  .features {
    height: 80%;
    margin: 0;
    .inputSection {
      width: 35%;
      margin: 0;
      height: 2.25rem;
      border: 1px solid blue;
      height: max-height;
      border-radius: 3rem;
      overflow: hidden;
      input {
        outline: none;
        color: grey;
        font-size: 1rem;
        padding: 0.8rem;
        width: 90%;
        height: 100%;
        border-radius: 3rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .searchWrapper {
        border-radius: 3rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 100%;
        width: 10%;
        .searchIcon {
          font-size: 1rem;
          color: blue;
          cursor: pointer;
        }
      }
    }
    .notificationSection {
      width: max-content;
      height: 2rem;
      cursor: pointer;
      margin: 0 0 0 2rem;

      .badgeCount {
        z-index: 1;
        width: max-content;
        position: relative;
        overflow: hidden;
        font-size: 0.9rem;
        font-weight: bolder;
        padding: 0;
        top: -30%;
        left: -16%;
        height: max-content;
        label {
          padding: 0.4rem;

          color: #ff00ff;
        }
      }
      .notificationIcon {
        font-size: 1.6rem;
        z-index: 0;
        color: blue;
        padding: 0;
        margin: 0;
      }
    }
    .profileSection {
      margin: 0 0 0 2rem;
      cursor: pointer;
      width: 3.5rem;
      height: 3.5rem;
      border-width: 0.3rem;
      transform: rotate(45deg);
      border-radius: 50%;
      border-style: solid;
      border-color: transparent ${({ theme }) => theme.secondary}
        ${({ theme }) => theme.secondary} transparent;
      img {
        border-radius: 50%;
        transform: rotate(-45deg);
      }
    }
  }

  @media (max-width: 1300px) {
    .features {
      .inputSection {
        width: 50%;
      }
    }
  }

  @media (max-width: 925px) {
    .features {
      .inputSection {
        width: 40%;
        input {
          width: 80%;
        }
        .searchWrapper {
          width: 20%;
        }
      }
    }
  }
  @media (max-width: 670px) {
    .features {
      width: 100%;
      .inputSection {
        display: none;
      }
    }
  }
  @media (max-width: 470px) {
    .features {
      .inputSection {
        display: none;
      }
    }
  }
`;