/*
 * component: Footer
 * author: Favour George
 * Date: April 13, 2020
 * Footer Styles
 */

import styled from "styled-components";
import FooterBNG from "../../assets/images/footer-bng.webp";

export const FooterStyles = styled('div')`
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .top-banner {
    display: flex;
    align-items: center;
    width: 100%;
    height: 8.5rem;
    background-image: url(${FooterBNG});
    background-size: cover;
    background-position: center;
    position: relative;

    @media (max-width: 680px) {
      height: auto;
    }

    .overlay {
      position: absolute;
      background: #28a74559;
      height: 100%;
      width: 100%;
    }

    aside {
      z-index: 1000;
      display: flex;
      justify-content: center;
      width: 100%;

      h4 {
        padding-right: 4rem;
        text-transform: capitalize;
      }
    }

    @media (max-width: 750px) {
      aside {
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        h4 {
          font-size: 1.75rem;
          padding: 1.5rem 0.5rem;
          line-height: 1;
        }

        button {
          margin-bottom: 1.5rem;
        }
      }
    }
  }

  .middle-layer {
    display: flex;
    justify-content: space-evenly;
    align-items: self-start;
    width: 100%;
    padding: 2rem 1rem;
    flex-wrap: wrap;

    .logo-holder {
      width: 100px;
      align-self: center;

      img {
        height: 85%;
        width: 85%;
      }
    }

    .col-4 {
      min-width: 200px;
      margin: 18px 10px;

      h6 {
        color: #1e1e1e;
        font-weight: 600;
        font-size: small;
        text-transform: uppercase;
        padding-bottom: 0.78rem;
      }

      ul {
        margin: 0;
        padding: 0;

        a {
          color: #424242;
        }

        li {
          list-style: none;
          line-height: 1.8;
        }
      }
    }

    @media (max-width: 486px) {
      align-items: center;

      .logo-holder {
        img {
          height: 60%;
          width: 60%;
        }
      }

      .col-4 {
        text-align: center;
      }
    }
  }

  .bottom-banner {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    aside:first-child {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      ul {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }

      ul a {
        color: inherit;
        padding: 0 0.5rem 0.5rem;
        position: relative;
        font-size: small;

        :not(:first-child)::after {
          content: "|";
          position: absolute;
          top: 0;
          left: 0;
        }

        :hover {
          color: #f89406;
        }

        :hover:after {
          color: rgba(0, 0, 0, 0.68);
        }
      }

      ul li {
        list-style-type: none;
      }
    }

    span {
      color: #ff6600;
      font-weight: 600;
    }

    @media (max-width: 550px) {
      padding: 2rem 1rem;
      font-size: smaller;

      aside:last-child {
        padding: 0 0.5rem;
        text-align: center;
      }
    }
  }
`;
