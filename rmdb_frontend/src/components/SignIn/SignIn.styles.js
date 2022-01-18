import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--medGrey);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0;
  animation: showSignIn 0.5s;

  @keyframes showSignIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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

    &:hover {
      filter: brightness(var(--hoverBrightness));
    }
  }
`;
