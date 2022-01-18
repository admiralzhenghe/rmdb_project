import React, { useState } from "react";
// Component
import SignIn from "../SignIn/index.js";
// Router
import { Link } from "react-router-dom";
// Styled
import { Wrapper, Content, Logo, HeaderLinkContainer } from "./Header.styles";

const Header = ({ modalOpen, setModalOpen }) => {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <Wrapper>
      <Content>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>RMDB</Logo>
        </Link>
        {/* If a user is not found, then show Login and Create Account links */}
        {showSignIn && <SignIn setShowSignIn={setShowSignIn} />}
        {!showSignIn && (
          <HeaderLinkContainer>
            <div
              className="sign-in header-link"
              onClick={() => setShowSignIn(!showSignIn)}
            >
              Sign In
            </div>
            <div
              className="create-account header-link"
              onClick={() => setModalOpen(!modalOpen)}
            >
              Create Account
            </div>
          </HeaderLinkContainer>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;
