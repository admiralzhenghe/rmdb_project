import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1rem 0;

  .container {
    :hover {
      color: var(--hoverColor);
    }
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
