import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  animation: animateCredits 1s;

  @keyframes animateCredits {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  .name {
    font-size: var(--fontBig);
  }
`;
