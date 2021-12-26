import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  border-radius: 20px;
  color: var(--white);
  text-align: center;

  h3 {
    margin: 15px 0 0 0;
    :hover {
      cursor: default;
    }
  }
  p {
    margin: 5px 0;
    :hover {
      cursor: default;
    }
  }

  :hover {
    color: var(--hoverColor);
    animation: animateColor 0.25s;
    @keyframes animateColor {
      from {
        color: var(--white);
      }
      to {
        color: var(--hoverColor);
      }
    }
  }
`;

export const Image = styled.img`
  border-radius: 15px;
  display: block;
  height: 200px;
  max-width: 720px;
  object-fit: cover;
  width: 100%;
`;

export const NoImage = styled.div`
  align-items: center;
  border-radius: 15px;
  color: var(--white);
  display: flex;
  font-size: var(--fontBig);
  height: 200px;
  justify-content: center;
  max-width: 720px;
  width: 100%;
`;
