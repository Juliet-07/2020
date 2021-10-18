/*
 * component: modal
 * author: George Favour 
 * Date: April 16th, 2020
 * EmBED modal component
 */

import React from "react";
import { ModalWrap } from "./modal.styles";
import Button from "../Button";

const Modal = ({ show, handleClose, children, lean }) => {
  return (
    <ModalWrap show={show}>
      <div className={"overlay"} />

      <div className="main">
        <div className="event" onClick={() => handleClose()} />

        <div className="modalBody">
          {children}
          {lean ? null : (
            <Button
            text={"close"}
            type={"button"}
            variant={"danger"}
            click={() => handleClose()}
          />)}
        </div>
      </div>
    </ModalWrap>
  );
};

export default Modal;
