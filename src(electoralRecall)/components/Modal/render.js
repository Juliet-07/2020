import React from "react";
import Modal from "./index";
import Button from "../Button";

const Render = () => {
  const [show, setShow] = React.useState(undefined);
  let buttonRef = React.createRef();

  const showModal = () => {
    setShow(true);
    buttonRef.current.ownerDocument.body.style.overflow = "hidden";
  };

  const hideModal = () => {
    setShow(false);
    buttonRef.current.ownerDocument.body.style.overflow = "";
  };

  return (
    <>
      <Button
        text={"Open"}
        ref={buttonRef}
        type={"button"}
        variant={"info"}
        click={() => showModal()}
      />
      <Modal show={show} handleClose={hideModal}>
        <div>
          <p>Render the content of your modal in here</p>
        </div>
      </Modal>
    </>
  );
};

export default Render;
