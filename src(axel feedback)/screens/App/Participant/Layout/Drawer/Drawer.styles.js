import styled from "styled-components";

export const DrawerStyles = styled.div`
  width: 17%;
  height: 100vh;
  background: #0000ff;
  z-index: 4;
  margin-top: -5.2rem;

  .drawerLinkWrapper {
    margin: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-start;

    .logoSection {
      width: 106%;
      background: white;
      min-height: 5.2rem;
      height: 5.2rem;
      margin: 0;
      cursor: pointer;
      b {
        font-size: 1.2rem;
        color: #0000ff;
        span {
          color: black;
        }
      }
    }

    .drawerLink {
      cursor: pointer;
      margin: 0;
      width: 100%;
      height: 50%;
      color: white;
      font-size: 1rem;
      .drawerItems,
      a:link,
      a:visited {
        text-decoration: none;
        color: white;
        z-index: 1;
        margin: 0;
        width: 100%;
        height: 20%;
        font-weight: bold;
        padding-left: 2rem;
        border-left: 4px solid transparent;
        transition: 0.3s;

        .drawerItemsIcon {
          font-size: 1.4rem;
          margin-right: 1rem;
        }
      }
      .drawerItemsActive,
      a:active,
      a:hover {
        z-index: 1;
        background: #00009f;
        border-left: 4px solid #00ff00;
        transition: 0.3s;
      }
    }
    .drawerbutton {
      margin: 8rem 0 0 0;
      width: max-content;
      height: auto;
      .responsiveEventIcon {
        display: none;
      }
      button {
        background: #00ff00;
        color: #000000;
        height: 100%;
        width: 100%;
        outline: none;
        transition: 0.3s;
      }
      button:hover {
        color: #000000;
        transition: 0.3s;
        opacity: 0.9;
      }
    }
  }

  @media (max-width: 950px) {
    .drawerLinkWrapper {
      .drawerLink {
        font-size: 0.8rem;
        .drawerItems,
        a:link,
        a:visited {
          padding-left: 0.5rem;
        }
      }
      .drawerbutton {
        width: 90%;
        button {
          padding: 0;
          padding: 1rem 0 1rem 0;
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 770px) {
    .drawerLinkWrapper {
      .drawerLink {
        font-size: 0.9rem;
        .drawerItems,
        a:link,
        a:visited {
          .drawerItemsIcon {
            font-size: 1.1rem;
            margin-right: 0.2rem;
          }
        }
      }

      .drawerbutton {
        width: 90%;
        button {
          padding: 0;
          padding: 1rem 0 1rem 0;
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 660px) {
    width: 17%;
    .drawerLinkWrapper {
      .logoSection {
        b {
          font-size: 0.8rem;
        }
      }

      .drawerLink {
        font-size: 0.6rem;
        .drawerItems,
        a:link,
        a:visited {
          .drawerItemsIcon {
            font-size: 1rem;
          }
        }
        .drawerItemsActive,
        a:active,
        a:hover {
          border-left: 3px solid #00ff00;
        }
      }
      .drawerbutton {
        button {
          font-size: 0.7rem;
        }
      }
    }
  }
  @media (max-width: 470px) {
    width: 13%;

    .drawerLinkWrapper {
      .logoSection {
        b {
          font-size: 0.5rem;
        }
      }

      .drawerLink {
        .drawerItems,
        a:link,
        a:visited {
          justify-content: center;
          span {
            display: none;
          }
          .drawerItemsIcon {
            font-size: 1.4rem;
          }
        }
      }
      .drawerbutton {
        padding: 0;
        .responsiveEventIcon {
          padding: 0.5rem 0;

          background: #00ff00;
          color: white;
          display: flex;
          justify-content: center;
          height: 100%;
          width: 100%;
          font-size: 2rem;
        }
        button {
          display: none;
        }
      }
    }
  }
`;

export const SecondDrawerStyles = styled.div`
  width: 14%;
  margin-left: ${({ hideDrawer }) => (hideDrawer ? 0 : "-17%")};
  height: 100vh;
  background: #0000ff;
  position: relative;
  margin-top: -5.2rem;
  z-index: 1;
  top: 0;
  transition: margin-left 0.5s;
  .drawerLinkWrapper {
    margin: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-start;

    .logoSection {
      width: 106%;
      height: 5.2rem;
      min-height: 5.2rem;
      background: white;
      margin: 0;
      cursor: pointer;
    }

    .drawerLink {
      cursor: pointer;
      margin: 0;
      width: 100%;
      height: 50%;
      color: white;
      font-size: 1rem;
      .drawerItems,
      a:link,
      a:visited {
        text-decoration: none;
        color: white;
        z-index: 1;
        margin: 0;
        width: 100%;
        height: 20%;
        font-weight: bold;
        padding-left: 2rem;

        .drawerItemsIcon {
          font-size: 1.4rem;
          margin-right: 1rem;
        }
      }
      .drawerItemsActive,
      a:active,
      a:hover {
        z-index: 1;
        background: #00009f;
      }
    }
    .drawerbutton {
      margin: 8rem 0 0 0;
      width: max-content;
      height: auto;
      .responsiveEventIcon {
        display: none;
      }
      button {
        background: #00ff00;
        color: #000000;
        height: 100%;
        width: 100%;
        outline: none;
        transition: 0.3s;
      }
      button:hover {
        color: #000000;
        transition: 0.3s;
        opacity: 0.9;
      }
    }
  }

  @media (max-width: 1220px) {
    .drawerLinkWrapper {
      .drawerLink,
      a:link,
      a:visited {
        font-size: 0.9rem;
        .drawerItems {
          padding-left: 0.7rem;
        }
      }
    }
  }
  @media (max-width: 950px) {
    .drawerLinkWrapper {
      .drawerLink {
        font-size: 0.8rem;
        .drawerItems,
        a:link,
        a:visited {
          padding-left: 0.5rem;
          .drawerItemsIcon {
            margin-right: 0.4rem;
          }
        }
      }
    }
  }
  @media (max-width: 770px) {
    .drawerLinkWrapper {
      .drawerLink {
        font-size: 0.9rem;
        .drawerItems,
        a:link,
        a:visited {
          .drawerItemsIcon {
            font-size: 1.1rem;
            margin-right: 0.2rem;
          }
        }
      }

      .drawerbutton {
        width: 90%;
        button {
          padding: 0;
          padding: 1rem 0 1rem 0;
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 660px) {
    width: 17%;
    .drawerLinkWrapper {
      .logoSection {
        b {
          font-size: 0.8rem;
        }
      }

      .drawerLink {
        font-size: 0.6rem;
        .drawerItems,
        a:link,
        a:visited {
          .drawerItemsIcon {
            font-size: 1rem;
          }
        }
      }
      .drawerbutton {
        button {
          font-size: 0.7rem;
        }
      }
    }
  }
  @media (max-width: 470px) {
    width: 13%;

    .drawerLinkWrapper {
      .drawerLink {
        .drawerItems,
        a:link,
        a:visited {
          justify-content: center;
          padding: 0;
          span {
            display: none;
          }
          .drawerItemsIcon {
            margin: 0 auto;
            font-size: 1.4rem;
          }
        }
      }
    }
  }
`;
