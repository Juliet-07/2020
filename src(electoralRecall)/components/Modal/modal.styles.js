import styled from "styled-components";

export const ModalWrap = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000000;
  visibility: ${props => (props.show ? "visible" : "hidden")};

  .overlay {
    z-index: -1;
    position: fixed;
    touch-action: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .main {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms ease-in-out;
    transform: ${props =>
      props.show ? "translateY(0)" : "translateY(-375px);"};
    .event {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .modalBody {
      position: absolute;
      max-width: 500px;
      @media (max-width: 500px) {
        width: 90%;
      }
      width: 100%;
      overflow: visible;
      margin-top: -130px !important;
      max-height: unset;
      border-radius: 6px;
      box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
        0px 9px 46px 8px rgba(0, 0, 0, 0.12);
      background-color: #fff;
      padding: 24px;
    }
  }
`;
