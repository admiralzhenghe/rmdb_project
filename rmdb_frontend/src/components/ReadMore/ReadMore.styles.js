import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 0;

  span {
    color: var(--hoverColor);
    cursor: pointer;

    :hover {
      filter: brightness(80%);
    }
  }
`;
