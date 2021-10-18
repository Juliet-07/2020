import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 2rem;
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;

export const H2 = styled.h3`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 1.7rem;
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`;

export const H3 = styled.h3`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 1.4rem;
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const H4 = styled.h4`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  font-size: 1.1rem;
  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`;
export const H5 = styled.h5`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  font-size: 1rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const P = styled.p`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 0.95rem;
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "350"};

  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;
export const B = styled.b`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 0.95rem;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const Span = styled.span`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 0.8rem;
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "350"};
`;

export const Small = styled.small`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 0.75rem;

  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "350"};
`;
