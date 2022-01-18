import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.95) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  height: 500px;
  position: relative;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 0 20px 0 20px;
`;

export const Text = styled.div`
  color: var(--white);
  max-width: 550px;
  min-height: 100px;
  position: absolute;
  bottom: 40px;
  z-index: 1;

  h1 {
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(--fontMed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
