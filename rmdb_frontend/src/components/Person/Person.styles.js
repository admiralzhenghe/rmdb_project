import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--medGrey);
  height: 100%;
  min-height: 100vh;
  padding: 25px 50px;
  width: 100%;
`;

export const Content = styled.div`
  color: var(--white);
  display: grid;
  grid-template-columns: minmax(auto, 800px) 200px;
  grid-column-gap: 1rem;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    .credits {
      order: 2;
    }
    .bio {
      order: 1;
    }
    grid-template-columns: 1fr;
  }
`;
