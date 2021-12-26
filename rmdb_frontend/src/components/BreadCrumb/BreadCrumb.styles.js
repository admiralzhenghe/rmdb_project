import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  max-width: var(--maxWidth);
  padding: 0 20px;
  width: 100%;

  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;
  }

  span:nth-child(1):hover {
    color: var(--hoverColor);
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: var(--fontBig);
    }
  }
`;
