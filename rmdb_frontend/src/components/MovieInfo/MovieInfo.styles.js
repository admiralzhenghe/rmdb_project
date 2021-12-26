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
  background: rgba(0, 0, 0, 0.7);
  border-radius: 25px;
  display: flex;
  margin: 0 auto;
  max-width: var(--maxWidth);

  @media screen and (max-width: 768px) {
    display: block;
    max-height: 100%;
  }
`;

export const Text = styled.div`
  color: var(--white);
  overflow: hidden;
  padding: 20px 40px;
  width: 100%;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .tagline {
    color: var(--lightGrey);
    font-style: italic;
    margin: 25px 0 5px 0;
  }

  .title {
    font-size: 1.2rem;
    font-weight: bolder;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }

  p {
    margin-top: 0;
  }

  .rating {
    align-items: center;
    background: ${({ rating }) =>
      rating > 7 ? "green" : rating > 4 ? "goldenrod" : "red"};
    border-radius: 50%;
    color: #000;
    display: flex;
    font-weight: 800;
    height: 35px;
    justify-content: center;
    margin: 5px auto 0 auto;
    pointer-events: none;
    width: 35px;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      color: var(--white);
      margin: 0;

      :hover {
        color: var(--hoverColor);
      }
    }
  }
`;
