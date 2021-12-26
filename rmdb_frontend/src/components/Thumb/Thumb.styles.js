import styled from "styled-components";

export const Image = styled.img`
  border-radius: 20px;
  display: flex;
  max-width: 720px;
  object-fit: cover;
  width: 100%;
  animation: animateThumb 0.5s;

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
