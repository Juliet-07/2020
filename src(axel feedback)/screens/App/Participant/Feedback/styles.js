import styled from "styled-components";
export const FeedbackStyles = styled.div`
  .leftSideContainer {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .rightSideContainer {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .title {
    height: 5vh;
  }
  .caption {
    color: ${({ theme }) => theme.secondary};
    font-size: 16px;
    font-weight: bold;
  }
  .inputContainer {
    width: 500px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .feedbackButton {
    width: 100px;
    margin-top: 20px;
  }
  .line {
    width: 100%;
    height: 0px;
    border: 0.5px solid ${({ theme }) => theme.grey};
    margin-top: 10px;
  }
  .journalContainer {
    margin-top: 20px;
  }
  .journalContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 7vh;
  }
  .date {
    color: ${({ theme }) => theme.grey};
    font-size: 14px;
  }
  .titleRight {
    font-weight: bold;
    font-size: 15px;
  }
  .content {
    width: 370px;
    height: 70px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    text-align: left;
    padding-top: 3px;
  }
  .aboutPlacement {
    padding-top: 20px;
    padding-bottom: 15px;
    margin-left: 20px;
  }
  .placement {
    color: ${({ theme }) => theme.grey};
    font-size: 16px;
  }
  .number {
    padding-left: 9px;
    color: ${({ theme }) => theme.grey};
    font-size: 15px;
  }
  .numberContainer {
    margin-left: 35vh;
  }
  .ratingData {
    margin-top: 10px;
  }
  .ratingText {
    font-size: 16px;
  }
  .rating {
    width: 10.5px;
    height: 10.5px;
    object-fit: cover;
    margin-right: 7px;
  }
  .rates {
    margin-left: 17vh;
  }
`;
