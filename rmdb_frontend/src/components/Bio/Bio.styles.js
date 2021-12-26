// Styled
import styled from "styled-components";

export const Wrapper = styled.div`
  .container {
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 350px;
    }
  }
`;

export const Image = styled.img`
  border: 1px solid var(--lightGrey);
  border-radius: 5px;
  width: 100%;
`;

export const NoImage = styled.div`
  align-items: center;
  background: var(--darkGrey);
  border-radius: 5px;
  display: flex;
  font-size: var(--fontBig);
  height: 300px;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 350px;
    height: 400px;
  }
`;
