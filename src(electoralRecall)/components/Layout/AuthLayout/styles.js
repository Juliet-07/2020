import styled from "styled-components";
const drawer = "200px";

export const LayoutMain = styled('div')`
  background: #f4f6fc;
  width: ${({ largeDrawer }) =>
    largeDrawer ? `calc(100% - ${drawer})` : " calc(100% - 50px)"};
  margin: 60px 0 0 auto;
  min-height: calc(100vh - 60px);
  transition: 300ms ease-in-out;
  padding: ${({ noPadding }) => (noPadding ? 0 : "30px 50px")};
  overflow: hidden;
  @media (max-width: 600px) {
    padding: ${({ noPadding }) => (noPadding ? 0 : "20px")};
    width: 100%;
  }
`;
