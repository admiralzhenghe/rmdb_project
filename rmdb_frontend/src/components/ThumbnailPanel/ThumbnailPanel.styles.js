import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  display: none;
  padding: 0.2rem;
  position: absolute;
  bottom: 10%;
  width: 75%;

  .icons-container {
    display: flex;
    justify-content: space-evenly;
  }

  .icons {
    cursor: pointer;
    width: 1.25rem;
    filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(358deg)
      brightness(103%) contrast(100%);

    :hover {
      filter: invert(75%) sepia(45%) saturate(686%) hue-rotate(36deg)
        brightness(112%) contrast(102%);
    }
  }

  .icons:nth-child(1) {
    width: 1.75rem;
  }

  #selected {
    filter: invert(75%) sepia(45%) saturate(686%) hue-rotate(36deg)
      brightness(112%) contrast(102%);
  }

  #like-selected {
    filter: invert(25%) sepia(90%) saturate(7500%) hue-rotate(357deg)
      brightness(99%) contrast(120%);
  }
`;
