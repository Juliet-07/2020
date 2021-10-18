import styled from "styled-components";

export const DrawerWrap = styled("div")`
  .modalMainContainerOverlay {
    position: fixed;
    height: 100%;
    width: ${({ noDrawer }) => (noDrawer ? "100%" : "0px")};
    visibility: ${({ noDrawer }) => (noDrawer ? "visible" : "hidden")};
    background: #06000061;
    z-index: 10005;
    top: 0;
    @media (min-width: 600px) {
      display: none;
    }
  }
  .desktopMainContainer {
    background: #fff;
    position: fixed;
    width: ${({ largeDrawer }) => (largeDrawer ? "200px" : "50px")};
    height: 100%;
    z-index: 10001;
    top: 0;
    transition: 300ms ease-in-out;
    overflow: hidden;

    @media (max-width: 600px) {
      display: none;
    }
  }
  .modalMainContainer {
    z-index: 10006;
    background: #fff;
    position: fixed;
    width: ${({ noDrawer }) => (noDrawer ? "200px" : "0px")};
    visibility: ${({ noDrawer }) => (noDrawer ? "visible" : "hidden")};
    height: 100%;
    top: 0;
    transition: 300ms ease-in-out;
    overflow: hidden;
    display: none;
    @media (max-width: 600px) {
      display: block;
    }
    .rightArrow {
      transform: rotate(180deg);
      top: 16px;
      left: auto;
      right: 10px;
    }

    .logo {
      width: 30%;
      top: 15px;
      left: 20px;
      margin: auto;
      position: absolute;
      cursor: pointer;
      .mainLogo {
        display: block;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .container {
    /* height: calc(100% - 140px); */
    & > .flowing {
      padding: 20px 0;
      height: 100%;
      overflow-x: hidden !important;
      overflow-y: auto;
      & > ul {
        height: 100%;
      }
    }
  }

  @keyframes rippleForward {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      background: transparent;
    }
  }
  @keyframes rippleBack {
    0% {
      transform: scale(0);
    }
    100% {
      background: transparent;
      transform: scale(1);
    }
  }
  
  .iconize {
    position: absolute;
    left: ${({ largeDrawer }) => (!largeDrawer ? "0" : "15px")};
    right: ${({ largeDrawer }) => (!largeDrawer ? "0" : "auto")};

    margin-left: ${({ largeDrawer }) => (largeDrawer ? "-2px" : "13px")};
    top: 13px;
    padding: 8px;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    overflow: hidden;
    cursor: pointer;
    .ripple {
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: ${({ largeDrawer }) =>
    !(largeDrawer === "true") && "#6a666642"};
      animation: ${({ largeDrawer }) =>
    largeDrawer === undefined
      ? "none"
      : largeDrawer
        ? " rippleForward 300ms ease-in-out forwards"
        : "rippleBack 300ms ease-in-out forwards"};
      position: absolute;
      border-radius: 50%;
    }
    &:hover {
      background: #88898c1a;
    }
  }
  .isActive {
    background: #f4f6fc;
    border-left: 3px solid #146D3C;
    a span {
      color: #146D3C !important;
      font-weight: 400;
    }
  }
`;

export const LI = styled.li`
  margin: 5px 0;
  cursor: pointer;
  border-right: 3px solid transparent;
  transition: 300ms linear;
  position: relative;
  border-left: ${({ liHover }) =>
    liHover && liHover[1] === liHover[0]
      ? "3px solid #146D3C"
      : "3px solid transparent"};

  .drawerItem {
    padding: ${({ largeDrawer }) => (largeDrawer ? "15px 12px" : "15px 12px")};
    min-width: ${({ largeDrawer }) => largeDrawer && " 195px"};
    transition: 300ms ease-in-out;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logoMain {
      margin-right: 13px;
      transition: 300ms ease-in-out;
      
      svg {
        font-size: 20px;
      }
    }
    .drawer-item-main {
      position: ${({ largeDrawer, noDrawer }) =>
    noDrawer ? "unset" : largeDrawer ? "static" : "fixed"};
      z-index: 100;
      top: ${({ drawerItemPositionFromTop }) =>
    drawerItemPositionFromTop + 5 + "px" || "20px"};
      align-items: center;

      left: ${({ largeDrawer }) => (largeDrawer ? "unset" : "44px")};
      bottom: ${({ largeDrawer }) => (!largeDrawer ? "auto" : "unset")};
      border-left: ${({ largeDrawer }) =>
    !largeDrawer ? "7px solid transparent" : "none"};

      display: ${({ largeDrawer, liHover }) =>
    !largeDrawer && liHover && liHover[1] === liHover[0] ? "flex" : null};
      min-height: ${({ largeDrawer }) =>
    !largeDrawer ? "max-content" : "unset"};
      background: transparent;
      @media (max-width: 600px) {
        border: none;
        position: unset;
      }
      .drawer-item-sub {
        background: ${({ largeDrawer }) =>
    !largeDrawer ? "white" : "transparent"};
        border-radius: 5px;
        overflow: hidden;
        box-shadow: ${({ largeDrawer, noDrawer }) =>
    largeDrawer || noDrawer
      ? "none"
      : "0px 0px 4px -1px rgba(0, 0, 0, 0.14)"};

        border-top: ${({ largeDrawer }) =>
    !largeDrawer ? "2px solid #fff" : "0"};
        border-bottom: ${({ largeDrawer }) =>
    !largeDrawer ? "2px solid #fff" : "0"};
        padding: ${({ largeDrawer }) => (!largeDrawer ? "10px 1px" : "0")};
        @media (max-width: 600px) {
          padding: 0;
          border: none;
          background: transparent !important;
        }
        span {
          padding: ${({ largeDrawer }) => (!largeDrawer ? "10px 10px" : "0")};
          background: ${({ largeDrawer, noDrawer }) =>
    largeDrawer || noDrawer ? "unset" : "#fff"};
          color: ${({ liHover }) =>
    liHover && liHover[1] === liHover[0]
      ? "#146D3C  !important"
      : "rgba(0, 0, 0, 0.98)"};
          margin: auto;
          font-size: 0.8rem;
          white-space: nowrap;
          cursor: pointer;
          @media (max-width: 600px) {
            padding: 0;
            background: transparent;
          }
        }
        &:hover {
          span {
            background: ${({ largeDrawer, noDrawer }) =>
    largeDrawer || noDrawer ? "none" : "#fafafa"};
          }
        }
      }
    }
  }
  
  &:hover {
    background: rgba(20,109,60,0.19);
    span {
      color: #146D3C !important;
    }
  }
`;
