import React from "react";
// Component
import ProfileDropdown from "../ProfileDropdown/index.js";
import SignIn from "../SignIn/index.js";
// Context
import { useAuthContext } from "../../context/AuthContext.js";
// Router
import { Link } from "react-router-dom";
// Styles
import { Wrapper } from "./Header.styles";

const Header = () => {
  const { modal, setModal, user, showSignIn, setShowSignIn } = useAuthContext();

  return (
    <Wrapper>
      <div className="content">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">RMDB</div>
        </Link>
        {/* If a user is not found, then show Login and Create Account links */}
        {user && <ProfileDropdown username={user.username} />}
        {!user && showSignIn && <SignIn />}
        {!user && !showSignIn && (
          <div className="header-link-container">
            <div
              className="sign-in header-link"
              onClick={() => setShowSignIn(!showSignIn)}
            >
              Sign In
            </div>
            <div
              className="create-account header-link"
              onClick={() => setModal(!modal)}
            >
              Create Account
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;
