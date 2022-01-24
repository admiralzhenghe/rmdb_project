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
  padding: 1.5rem;
  width: 75%;

  .title {
    font-weight: bolder;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }

  .rating-directors {
    display: flex;
    justify-content: flex-start;

    .tmdb-rating {
      background: ${({ rating }) =>
        rating > 7 ? "green" : rating > 4 ? "goldenrod" : "red"};
      border-radius: 50%;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      width: 35px;
      margin: 5px auto 0 auto;
      pointer-events: none;
    }

    .director {
      margin: 0 0 0 40px;

      .director-name {
        color: var(--white);
        margin: 0;

        :hover {
          color: var(--hoverColor);
        }
      }
    }
  }

  .user-panel {
    margin: 1rem 0;
    width: 55%;

    @media screen and (max-width: 900px) {
      width: 75%;
    }
  }

  .tagline {
    color: var(--lightGrey);
    font-style: italic;
    margin: 25px 0 5px 0;
  }

  .movie-overview {
    margin-top: 0;
  }
`;
