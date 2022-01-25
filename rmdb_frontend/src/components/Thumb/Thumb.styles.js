import styled from "styled-components";

export const Image = styled.img`
  border: 2.5px solid transparent;
  border-radius: 25px;
  display: flex;
  width: 100%;
  max-width: 720px;
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
