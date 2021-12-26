import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;

  link: {
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  border: 1px solid var(--white);
  color: var(--white);
  display: flex;
  font-size: var(--fontSuperBig);
  justify-content: center;
  text-decoration: none;
  width: 125px;

  @media screen and (max-width: 500px) {
    font-size: var(--fontBig);
  }
`;

export const Profile = styled.a`
  color: var(--white);
  font-size: var(--fontBig);

  :link {
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
    color: var(--hoverColor);
  }
`;
