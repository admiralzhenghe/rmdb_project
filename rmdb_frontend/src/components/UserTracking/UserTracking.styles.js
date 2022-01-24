import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  .watch,
  .like,
  .watchlist {
    border: 1px solid green;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    :hover {
      color: var(--hoverColor);
      cursor: pointer;
    }
  }

  img {
    margin-top: 0.5rem;
    width: 2rem;
    filter: brightness(0) invert(1) opacity(0.5);

    :hover {
      cursor: pointer;
    }
  }

  .selected {
    filter: invert(75%) sepia(45%) saturate(686%) hue-rotate(36deg)
      brightness(112%) contrast(102%);
  }
`;
