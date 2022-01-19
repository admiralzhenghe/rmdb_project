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
  }

  .logo {
    border: 1px solid var(--white);
    color: var(--white);
    display: flex;
    font-size: var(--fontSuperBig);
    justify-content: center;
    padding: 2px;
    width: 125px;

    @media screen and (max-width: 500px) {
      font-size: var(--fontBig);
    }
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
