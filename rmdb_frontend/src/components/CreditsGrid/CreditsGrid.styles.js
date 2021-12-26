import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 175px));
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  border: 2.5px solid transparent;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  object-fit: cover;

  :hover {
    border: 2.5px solid var(--hoverColor);
    animation: animateBorder 0.25s;
  }

  @keyframes animateBorder {
    from {
      border: 2.5px solid transparent;
    }
    to {
      border: 2.5px solid var(--hoverColor);
    }
  }
`;

export const NoImage = styled.div`
  align-items: center;
  border: 2.5px solid var(--lightGrey);
  border-radius: 5px;
  color: var(--white);
  display: flex;
  font-size: var(--fontMed);
  height: 100%;
  min-height: 250px;
  justify-content: center;
  text-align: center;
  width: 100%;

  :hover {
    border: 2.5px solid var(--hoverColor);
    animation: animateBorder 0.25s;
  }

  @media screen and (max-width: 768px) {
    min-height: 500px;
    font-size: var(--fontSuperBig);
  }

  @keyframes animateBorder {
    from {
      border: 2.5px solid;
    }
    to {
      border: 2.5px solid var(--hoverColor);
    }
  }
`;
