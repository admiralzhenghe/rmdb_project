import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  .watch,
  .like,
  .watchlist {
    width: 25%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: relative;

    div {
      position: absolute;
      top: 0;
    }

    :hover {
      color: var(--hoverColor);
      cursor: pointer;
    }
  }

  img {
    margin-top: 1.5rem;
    width: 2rem;
    filter: brightness(0) invert(1) opacity(0.5);

    :hover {
      cursor: pointer;
    }
  }

  .watch img {
    width: 3rem;
  }

  .selected {
    filter: invert(75%) sepia(45%) saturate(686%) hue-rotate(36deg)
      brightness(112%) contrast(102%);
  }

  .like-selected {
    filter: invert(25%) sepia(90%) saturate(7500%) hue-rotate(357deg)
      brightness(99%) contrast(120%);
  }
`;
