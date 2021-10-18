import styled from "styled-components";

export const HomeStyles = styled.div`
  padding: 0 20px;
  .left-wrapper {
    width: 37%;
  }
  .right-wrapper {
    width: 47%;
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
  .icon {
    width: 70px;
    height: 70px;
  }
  .icon-supervisor {
    width: 60px;
    height: 55px;
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
    color: #8d8888;
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
  .update-icon {
    width: 24px;
    height: 24px;
    left: 878px;
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
    color: ${({ theme }) => theme.grey};
    text-align: left;
    padding-top: 5px;
  }
  .update-line {
    width: 221px;
    height: 0px;
    left: 923px;
    top: 388px;
    border: 0.5px solid ${({ theme }) => theme.grey};
    margin-top: 30px;
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
    color: ${({ theme }) => theme.primary};
    text-align: left;
    margin-top: 30px;
  }
`;
