import styled from "styled-components";

export const ProfileMenuStyle = styled.header`
  width: max-content;
  padding: 0 1rem;
  height: max-content;
  background: white;
  border-bottom: 1rem solid ${({ theme }) => theme.secondary};
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  opacity: ${({ primaryMenu }) => (primaryMenu ? 1 : 0)};
  position: absolute;
  right: 4%;
  top: ${({ primaryMenu }) => (primaryMenu ? "4.8rem" : "-15rem")};
  display: flex;
  z-index: 0;
  flex-direction: column;
  transition: opacity, top 0.5s;

  .drawerLink {
    cursor: pointer;
    width: 100%;
    height: max-content;
    font-size: 1rem;
    .drawerItems,
    a:visited,
    a:link {
      color: ${({ theme }) => theme.secondary};
      margin: 0;
      text-decoration:none;
      width: 100%;
      height: max-content;
      padding-left: 0.3rem;
      border-left: 4px solid transparent;
      transition: 0.3s;

      .drawerItemsIcon {
        font-size: 1.2rem;
        margin-right: 1rem;
      }

      span {
        padding: 1.6rem 0;
        color: black;
        text-align: left;
        width: 12rem;
        border-bottom: 1px solid ${({ theme }) => theme.grey};
      }
      .clsName {
        border-bottom: none;
      }
    }
    .drawerItemsActive a:active,
    a:hover {
      transition: 0.3s;
    }
  }

  @media (max-width: 500px) {
    padding: 0 0.4rem;
    width:80%;
    right: 2%;
    .drawerLink {
    .drawerItems {
      span {
        min-width: 70%;
        border-bottom: 1px solid ${({ theme }) => theme.grey};
      }
      .clsName {
        border-bottom: none;
      }
    }
  
  }
`;
