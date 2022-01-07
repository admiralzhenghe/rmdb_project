import React, { useState } from "react";
// Component
import SignIn from "../SignIn/index.js";
// Router
import { Link } from "react-router-dom";
// Styled
import { Wrapper, Content, Logo, HeaderLinkContainer } from "./Header.styles";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = (e) => {
    setShowSignIn(!showSignIn);
  };

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
            <div className="header-link" onClick={handleSignInClick}>
              Sign In
            </div>
            <div className="header-link">Create Account</div>
          </HeaderLinkContainer>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;
