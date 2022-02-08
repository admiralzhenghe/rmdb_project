import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: var(--maxWidth);
    padding: 0.5rem 0;

    link: {
      text-decoration: none;
    }

    @media screen and (max-width: 480px) {
      display: block;

      .logo {
        margin: 0 auto;
      }

      .header-link-container {
        justify-content: space-evenly;
      }
    }
  }

  .logo {
    border: 1px solid var(--white);
    color: var(--white);
    display: flex;
    font-size: var(--fontSuperBig);
    justify-content: center;
    margin: 0 1rem 0 0;
    padding: 2px;
    width: 125px;
  }

  .header-link-container {
    display: flex;
    animation: showSignIn 0.5s;

    @keyframes showSignIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .header-link {
      color: var(--white);
      cursor: pointer;
      display: flex;
      align-content: center;
      font-size: var(--fontMedium);
      padding: 1rem 1rem;

      &:hover {
        color: var(--hoverColor);
      }
    }
  }
`;
