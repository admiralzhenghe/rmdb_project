import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--medGrey);
  color: var(--white);
  min-height: 100vh;
  padding: 3rem;

  .container {
    margin: 0 auto;
    max-width: var(--maxWidth);
  }

  .description {
    border-bottom: 1px solid var(--white);
    margin-bottom: 1rem;
  }

  .popcorn-container {
    min-height: 0.5rem;
  }

  .popcorn {
    width: 0.95rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 0 1rem;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));

  .thumb {
    border: 2.5px solid transparent;
    border-radius: 5px;
    width: 100%;

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
  }
`;
