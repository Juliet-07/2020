import styled from "styled-components";

export const DrawerProfileCardWrap = styled.div`
  /* width: 200px; */
  height: 60px;
  background-color: white;
  /* box-shadow: 2px 4px 10px -1px rgba(0, 0, 0, 0.12); */
  margin-top: 80px;
  position: relative;
  &:before {
    bottom: 0;
    right: 0%;
    left: 0;
    height: 1px;
    content: "";
    width: 100%;
    position: absolute;
    background: -moz-linear-gradient(
      left,
      #f5f5f5 2%,
      #bdbdbd 50%,
      #f5f5f5 98%
    );
  }
  .profile-container {
    padding: 7px;
    .pictureframe {
      border-radius: 50%;
      overflow: hidden;
      svg,
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
  }

  .profile-detail {
    visibility: ${({ largeDrawer }) => !largeDrawer && "collapse"};
    p {
      white-space: nowrap;
    }
    @media (max-width: 600px) {
      visibility: visible;
    }
  }
`;
