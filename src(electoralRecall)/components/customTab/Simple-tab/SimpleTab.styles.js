import styled from "styled-components";

export const SimpleTabStylesWrapper = styled('div')`
  .tabs {
    white-space: nowrap;
    position: relative;
    display: flex;
    list-style: none;
    padding: 0px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    color: #757575;
    .tab__item-simple {
      padding: 12px 20px;
      cursor: pointer;
      transition: all 300ms linear;
      :hover {
        background: #44444410;
        cursor: pointer;
      }
      &.active {
        background: #44444410;
        color: #e67e22;
      }
    }
    .indicator {
      height: 2px;
      background-color: #e67e22;
      position: absolute;
      bottom: 0px;
      animation: two 2s linear;
      animation-direction: alternate;
      left: 0px;
      transition: left 500ms, width 500ms;
    }

    @keyframes two {
      0% {
        transform: rotateY(0);
      }
      100% {
        transform: rotateY(70deg);
      }
    }
  }

  .s-content {
    width: 100%;
    flex-shrink: 0;
    overflow: auto;
    .tab__content {
      display: none;
      padding: 20px;
      animation: enter 500ms forwards;
      &.active {
        display: block;
      }
    }
  }

  @keyframes enter {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  .dropdown__wrapper {
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;
    .dropdown__toggle {
      font-size: 26px;
      text-decoration: none;
      svg {
        position: relative;
        top: 10px;
      }
    }
    .dropdown {
      list-style: none;
      padding: 0px;
      position: absolute;

      background: white;
      position: absolute;
      top: 160%;
      right: 15px;
      /* display: none; */
      opacity: 0;
      transition: 500ms;
      visibility: hidden;
      border-radius: 4px;
      transition: all 300ms linear;
      border-top: 4px solid #e67e22;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      z-index: 10000;
      ::before {
        content: "";
        position: absolute;
        top: -9px;
        right: 10%;
        border-bottom: 5px solid #e67e22;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
      }
      &.active {
        display: block;
        opacity: 1;
        visibility: visible;
        top: 100%;
      }
      li {
        padding: 12px;
        cursor: pointer;
        :hover {
          background: #44444415;
        }
        &.active {
          border-bottom: 2px solid #e67e22;
          background: #44444415;
          color: #e67e22;
        }
      }
    }
  }
`;
