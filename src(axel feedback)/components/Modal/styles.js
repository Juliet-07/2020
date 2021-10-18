import styled from 'styled-components';

export const ModalStyles = styled.div`
.close {
    align-self: flex-end;
    cursor: pointer;
}
.body {
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
}
@media only screen and (max-width: 600px) {
    .body {
        padding-left: 10px;
        padding-right: 10px;
    }
}
.overlay {
    position: fixed;
    display: block; 
    overflow: auto; 
    width: 100%; 
    height: 100%; 
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); 
    z-index: 999; 
  }

.content {
    margin: 3% auto;
    background-color: white;
    border-radius: 0.25rem;
    width: 50vw;
    padding: 2rem;
    position: relative;
  }
@media only screen and (max-width: 600px) {
    .content {
        width: 90vw;
    }
}
`;