import styled from "styled-components";

export const Wrapper = styled.div`
  .sign-up {
    background: var(--medGrey);
    border-radius: 5px;
    color: var(--white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    width: 400px;
    z-index: 3;
    animation: showSignUp 0.5s;
  }

  .top {
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .close {
    cursor: pointer;

    &:hover {
      color: var(--hoverColor);
    }
  }

  input {
    background: gainsboro;
    border-radius: 5px;
    height: 2rem;
    width: 50%;
    margin-bottom: 1rem;
    outline: none;
    padding: 0.5rem;

    &:focus {
      background: var(--white);
    }
  }

  #email {
    width: 100%;
  }

  button {
    background: var(--hoverColor);
    border-radius: 5px;
    color: var(--white);
    cursor: pointer;
    padding: 0.25rem 1rem;

    &:hover {
      filter: brightness(var(--hoverBrightness));
    }
  }

  .overlay {
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  @media screen and (max-width: 480px) {
    .sign-up {
      max-width: 90%;
    }
  }

  @keyframes showSignUp {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
