import styled from 'styled-components';

export const AssignSupervisorsStyles = styled.div`
padding:0 20px;
padding-bottom: 30px; 
  .left-wrapper {
    width: 37%;
    padding-top: 20px;
  }
  .right-wrapper {
    width: 47%;
    padding-top: 20px;
  }
  .updates {
      font-size: 14px;
      color: #8D8888;
      text-align: left;
  }
  .line {
    width: 355px;
    height: 0px;
    left: 867px;
    top: 202px;
    border: 0.5px solid #000000;
    margin-top: 10px;
  }
  .update-contents-wrapper {
    width: 450px;
    height: 533px;
    left: 867px;
    top: 202px;
  }
  .update-padding {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .update-content {
    width: 420px;
    height: 90px;
    margin-top: 30px;
  }
  .update-description {
    padding-left: 20px;
  }
  .update-description-header {
    height: 17px;
    left: 921px;
    top: 580px;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    text-align: left;
  }
  .update-description-name {
    font-weight: bold;
  }
  .update-description-content {
    width: 370px;
    height: 20px;
    left: 919px;
    top: 298px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color:  ${({theme}) =>theme.grey};
    text-align: left;
    padding-top: 5px;
  }
  .update-line {
    width: 221px;
    height: 0px;
    left: 923px;
    top: 388px;
    border: 0.5px solid  ${({theme}) =>theme.grey};;
    margin-top: 30px;
  }
  .title-line {
    width: 221px;
    height: 0px;
    left: 923px;
    top: 388px;
    opacity: 0.5;
    border: 0.5px solid  ${({theme}) =>theme.primary};;
  }
  .select-line {
    width: 421px;
    height: 0px;
    left: 923px;
    top: 388px;
    opacity: 0.5;
    border: 0.5px solid  ${({theme}) =>theme.primary};;
    margin-top: 20px;
    margin-left: 20px;
  }
  option {
    cursor: pointer;
  }
  select {
      border: none;
      font-size: 13.5px;
      line-height: 29px;
      color: #707070;
      margin-left: 17px;
      cursor: pointer;
  }
  .grid-wrapper {
      width: 300px;
      padding-top: 50px;
  }
  .input {
      margin-left: 20px;
      width: 300px;
  }
  .title {
    font-size: 14px;
    color:  ${({theme}) =>theme.grey};;
    margin-left: 50px;
  }
  .btn {
    padding-top: 100px;
    margin-left: 20px;
  }
  .supervisor {
    margin-left: 20px;
  }
`;