import styled from 'styled-components';

export const FeedbackStyles = styled.div`
padding:0 20px;
padding-bottom: 30px; 
  .left-wrapper {
    width: 37%;
  }
  .right-wrapper {
    width: 47%;
    padding-top: 20px;
  }
  .icon-wrapper {
      width: 70px;
  }
  .icon-wrapper-supervisor {
    width: 60px;
  }
  .feedback-wrapper {
      margin-top: 60px;
  }
  p {
      text-align: left;
      color: #000000;
      font-size: 14px;
  }
  .link {
    text-decoration: none;
    text-align: left;
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
    height: 127px;
    left: 878px;
    margin-top: 30px;
    top: 271px;
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
    height: 70px;
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
    margin-left: 20px;
  }
  .header {
    margin-left: 20px;
  }
  .load-more {
    width: 89px;
    height: 17px;
    left: 923px;
    top: 718px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color:  ${({theme}) =>theme.primary};;
    text-align: left;
    margin-top: 30px;
  }
  option {
    cursor: pointer;
  }
  select {
      border: none;
      font-size: 13.5px;
      line-height: 29px;
      color: #707070;
      cursor: pointer;
  }
  .grid-wrapper {
      width: 170px;
  }
  .title {
    font-size: 15px;
    font-weight: 550;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .notes {
    color:  ${({theme}) =>theme.grey};;
    font-size: 14px;
  }
  .note-container {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 20px;
  }
  .rating-container {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 20px;
  }
  .rating {
    width: 10.5px;
    height: 10.5px;
    object-fit: cover;
    margin-right: 3px
  }
  .number {
    padding-left: 7px;
  }
  .rating-data {
    margin-top: 10px;
  }
  .note-text {
    font-size: 13px;
  }
  .check-box {
    margin-left: 20px;
    padding-top: 20px;
  }
  .comment {
    font-size: 14;
    color:  ${({theme}) =>theme.grey};
  }
  .input {
    width: 200px;
  }
  .btn {
    padding-top: 35px;
    margin-left: 20px;
  }
`;