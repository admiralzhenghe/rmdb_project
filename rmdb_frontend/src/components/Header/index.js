import React from "react";
// Router
import { Link } from "react-router-dom";
// Styled
import { Wrapper, Content, Profile, Logo } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>RMDB</Logo>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Profile>Profile</Profile>
      </Link>
    </Content>
  </Wrapper>
);

export default Header;
