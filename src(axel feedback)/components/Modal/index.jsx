import {ModalStyles} from "./styles";
import {FaTimes} from 'react-icons/fa';
import { Flex } from "../Flex";

const Modal = ({closeModal, children}) => {
    const closeicon = () => (
        <FaTimes 
            onClick={closeModal}
            size="1em"
            color="#0000FF"
        />
    )
    return (
      <ModalStyles>
            <div className="overlay">
                <div className="content">
                    <Flex flexDir="column" justifyContent="flex-start">
                        <div className="close">{ closeicon() }</div>
                        <div className="body">{children}</div>
                    </Flex>
                </div>
            </div>
      </ModalStyles>
    );
  };
  
  export default Modal;