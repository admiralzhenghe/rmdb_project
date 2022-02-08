import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--medGrey);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 0.25rem 0;
  animation: showSignIn 0.5s;

  @media screen and (max-width: 480px) {
    margin-top: 0.5rem;
  }

  .container,
  form {
    display: flex;
    align-items: flex-end;
  }

  .close {
    color: var(--white);
    cursor: pointer;
    margin: 0 0.5rem;

    &:hover {
      color: var(--hoverColor);
    }
  }

  .input-container {
    margin: 0 0.25rem;

    .descriptor {
      color: var(--white);
      font-size: var(--fontSmall);
      margin-bottom: 0.25rem;
    }

    #username,
    #password {
      background: gainsboro;
      border-radius: 5px;
      outline: none;
      padding: 0.25rem 0.5rem;
      width: 100%;
    }

    #username:focus,
    #password:focus {
      background: var(--white);
    }
  }

  button {
    background: var(--hoverColor);
    border-radius: 5px;
    color: var(--white);
    cursor: pointer;
    margin: 0 0.5rem;
    padding: 0.25rem 1rem;

    @media screen and (max-width: 480px) {
      padding: 0.25rem;
    }

    &:hover {
      filter: brightness(var(--hoverBrightness));
    }
  }

  @keyframes showSignIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
