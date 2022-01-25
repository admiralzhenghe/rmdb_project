import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  padding: 1.5rem;

  @media screen and (max-width: 768px) {
    max-width: 55%;
    margin: 0 auto;
  }

  .tmdb-rating {
    margin: 1rem 0;
  }

  .title {
    text-align: center;
  }

  .tmdb-rating-number {
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
`;
