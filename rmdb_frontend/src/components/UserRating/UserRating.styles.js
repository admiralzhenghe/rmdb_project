import styled from "styled-components";

export const Wrapper = styled.div`
  .container {
    display: block;
    margin: 0 auto;
  }

  .title {
    text-align: center;
  }

  .popcorn-rating {
    margin-top: 0.5rem;
    text-align: center;

    img {
      cursor: pointer;
      width: 2rem;
    }

    .unselected {
      filter: brightness(0) invert(1) opacity(0.5);
    }
  }
`;
