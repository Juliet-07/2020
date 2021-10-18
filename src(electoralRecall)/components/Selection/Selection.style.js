import styled from "styled-components";

export const SelectionBox = styled('div')`
  background: ${({ Selectbackground }) =>
    Selectbackground ? Selectbackground : "whitesmoke"};
  border-radius: 2px;
  cursor: pointer;
  outline: 0;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${({ Width }) => (Width ? Width : "100%")};

  .topContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.6vh 4vw 0.6vh 2vw;
    width: 100%;
    p {
      padding: 2vh 1vw;
      color: ${({ hoverColor }) => (hoverColor ? hoverColor : "#FF6600")};
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.8rem")};
      font-weight: 200;
      opacity: 0.7;
    }

    .SelectedItems {
      width: 80%;
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "15px")};
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-items: center;

      .SelectedItem {
        padding: 1.5vh 1.5vw;
        display: flex;
        margin: 0.6vh 0.6vw;
        justify-content: space-between;
        background: ${({ Item_Background }) =>
          Item_Background ? Item_Background : "white"};
        cursor: pointer;
        outline: 0;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),0 1px 3px rgba(0, 0, 0, 0.08);
        border: 1px solid
          ${({ hoverColor }) => (hoverColor ? hoverColor : "rgba(251,105,63,0.4)")};
        border-radius: 2px;
        color: ${({ Item_Color }) => (Item_Color ? Item_Color : "#FF6600")};
        align-items: center;
        transition: 1s ease-in;
        transition-delay: 0.1s;

        .cancelIcon {
          display: flex;
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "15px")};
          transition: width 1s;
          color: ${({ Item_Color }) => (Item_Color ? Item_Color : "#FF6600")};
        }
      }

      .SelectedItem:hover {
        padding: 1.5vh 1.5vw;
        display: flex;
        // margin: 0.6vh 0.6vw;
        justify-content: space-between;
        background: ${({ Item_Background }) =>
          Item_Background ? Item_Background : "rgb(238,238,238,0.2)"};
          border: 1px solid
          ${({ hoverColor }) => (hoverColor ? hoverColor : "rgba(251,105,63,0.4)")};
        border-radius: 2px;
        align-items: center;
        transition: 1s ease-in;
        transition-delay: 0.1s;
        opacity: 8;

        .cancelIcon {
          display: flex;
          // margin-left: 0.4vw;
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "15px")};
          transition: 1s;
        }
      }
    }
    .SelectIcon {
      font-size: ${({ SelectIcon_FontSize }) =>
        SelectIcon_FontSize ? SelectIcon_FontSize : "20px"};
      padding: 1vh 1vw;
      color: ${({ hoverColor }) => (hoverColor ? hoverColor : "#FF6600")};
      display: flex;
      align-items: center;
    }
  }

  .OptionsContainer {
    width: 100%;
    border-top: 1px solid
      ${({ OptionColor }) => (OptionColor ? OptionColor : "#333333")};
    padding-top: 1vh;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    animation: ${( Active ) =>
      true ? "rollDown .2s linear forwards" : ("rollUp .2s  linear forwards")};

      @keyframes rollDown {
        0% {
          height: 0;
          visibility: hidden;
        }
        20% {
          height: 30px;
        }
        40% {
          height: 60px;
        }
        60% {
          height: 90px;
        }
        80% {
          height: 120px;
        }
        100% {
          height: 180px;
        }
      };
      @keyframes rollUp {
        0% {
          height: -180px;
        }
        20% {
          height: -120px;
        }
        40% {
          height: -90px;
        }
        60% {
          height: -60px;
        }
        80% {
          height: -30px;
        }
        100% {
          height: 0;
          visibility: hidden;
        }
      }


    .OptionItem {
      width: 100%;
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "15px")};
      padding: 1vh 1vw;
      cursor: pointer;
      transition: color, border 0.4s linear;
      border-bottom: 1px solid #4f4f4f42;
      outline: 0;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
      color: ${({ OptionColor }) => (OptionColor ? OptionColor : "#333333")};
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .OptionItem:hover {
      color: ${({ hoverColor }) => (hoverColor ? hoverColor : "#FF6600")};
      background:
    }
  
  }
`;
