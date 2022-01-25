import styled from "styled-components";
// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;

  animation: animateMovieInfo 1s;
  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  background: rgba(0, 0, 0, 0.75);
  border-radius: 25px;
  display: grid;
  grid-template-columns: 1fr 1.5fr 250px;
  margin: 0 auto;
  max-width: var(--maxWidth);

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Text = styled.div`
  color: var(--white);
  padding: 1rem 1.5rem;
  width: 100%;

  .director {
    font-size: 1rem;

    span {
      color: var(--white);

      :hover {
        color: var(--hoverColor);
      }
    }
  }

  .tagline {
    color: var(--lightGrey);
    font-style: italic;
  }

  .overview {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }

  .movie-overview {
    margin-top: 0;
  }
`;
