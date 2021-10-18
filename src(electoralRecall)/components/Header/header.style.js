/*
 * style: header styles
 * author: Favour George
 * Date: April 15, 2020
 * General header styles
 */

import styled from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 10%;
  background: ${({ bngColor, theme, menuPosition }) =>
    menuPosition < 100
      ? "transparent"
      : bngColor
      ? bngColor
      : theme.palette.background.paper};
  @media (max-width: 800px) {
    background: ${({ showMenu }) => showMenu && "#033"};
    transition: ${({ showMenu }) => !showMenu && ".2s ease-in-out .2s"};
  }
  top: 0;
  z-index: 1000000;
  box-shadow: ${({ menuPosition }) =>
    menuPosition < 100 ? "none" : "0 0 4px 0 rgba(0, 0, 0, 0.27)"};
  height: 100%;
  position: absolute;

  .logo {
    width: 70px;
    cursor: pointer;
    .mainLogo {
      display: ${({ showMenu }) => (showMenu ? "none" : "block")};
    }
    .whiteLogo {
      display: ${({ showMenu }) => (!showMenu ? "none" : "block")};
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  .mobileSection {
    display: none;
    @media (max-width: 800px) {
      display: flex;
      & > div:hover {
        background: ${({ showMenu }) => (showMenu ? "#b5f9fb0d" : "#eceae8")};
      }
      svg {
        fill: #8a8c8b;
      }
    }
  }

  @keyframes rollDown {
    0% {
      height: 0;
      overflow: hidden;
      padding: 0px 0;
    }
    100% {
      padding: 20px 0;
      height: 190px;
      overflow: hidden;
    }
  }
  @keyframes rollUp {
    0% {
      height: 190px;
      overflow: hidden;
      padding: 20px 0;
    }
    100% {
      height: 0;
      overflow: hidden;
      padding: 0 0;
      visibility: hidden;
    }
  }

  .desktopSection {
    @media (max-width: 800px) {
      position: absolute;
      background: #033;
      width: 100%;
      height: 190px !important;
      top: 68px;
      display: ${props => (props.showMenu === undefined ? "none" : "block")};
      animation: ${props =>
        props.showMenu
          ? "rollDown .2s ease-in-out forwards"
          : "rollUp .2s  ease-in-out forwards"};

      .btn {
        margin: 20px 0;
      }
    }
  }

  .cta {
    @media (max-width: 509px) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .profileMain {
    // background-color: red;
    display:flex;
    flex-direction:row;
    width:200px;
    justify-content:space-around
  }
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    list-style: none;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    font-size: 0.812rem;
    a {
      padding: 0.654rem 1rem;
      color: ${({ menuPosition }) =>
        menuPosition < 100 ? "#fff " : "#1c1c1b"};
      position: relative;
      transition: width 0.5s ease-in-out;

      ::after {
        content: "";
        width: 0;
        position: absolute;
        height: 3px;
        background-color: transparent;
        bottom: -1rem;
        left: 0;
        right: 0;
        margin: auto;
        transition: width 0.5s ease-in-out;
        display: ${({ menuPosition }) =>
          menuPosition < 100 ? "none " : "bloxk"};
      }
    }
    a:hover {
      color: #ff6600;
      :after {
        width: 100%;
        background-color: orangered;
      }
    }
    @media (max-width: 800px) {
      width: 85%;
      text-align: center;
      margin: 5px 0;
      border-radius: 35px;
      &:hover {
        background: #b5f9fb0d;
        color: #1c1c1b;
        a:hover {
          cursor: pointer;
          color: #ff6600;
          &::after {
            display: none;
          }
        }
      }
      a {
        color: white;
        text-align: center;
        margin: auto;
        width: 100%;
      }
    }
  }

  button {
    margin-left: 0.8rem;
    @media (max-width: 800px) {
      margin: auto;
      border-radius: 35px;
    }
  }

  .isActive {
    a {
      color: #ff6600;
      font-weight: bold;
      ::after {
        content: "";
        width: 100%;
        position: absolute;
        height: 3px;
        bottom: -1rem;
        left: 0;
        transition: width 0.5s ease-in-out;
      }
      :after {
        background-color: #ff6600;
      }
    }
    @media (max-width: 800px) {
      background: #b5f9fb24 !important;
      a:after {
        display: none;
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const IconButton = styled('div')`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.1s ease-in-out;

  &:hover {
    background: #ddd;
  }

  svg {
    font-size: 1.5rem;
    color: #a85d2a;
  }
`;

export const HeaderContainer = styled('div')`
  position: fixed;
  width: 100%;
  z-index: 10000;
  display: flex;
  height: 68px;
  top: 0;
  right: 0;
  left: 0;
  background: ${({ menuPosition }) =>
    menuPosition < 100 ? "transparent" : "#fff"};
`;
