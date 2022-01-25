import React, { useState } from "react";
// Context
import { useAuthContext } from "../../context/AuthContext";
// Images
import expandIcon from "../../images/expand.svg";
// Router
import { Link } from "react-router-dom";
// Styles
import { Wrapper } from "./ProfileDropdown.styles";

export default function ProfileDropdown({ username }) {
  const { logoutUser } = useAuthContext();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = (e) => {
    setShowDropdown(true);
  };

  const handleMouseLeave = (e) => {
    setShowDropdown(false);
  };

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="username">
        {username.toUpperCase()}
        <img src={expandIcon} alt="expand-icon" />
      </div>
      {showDropdown && (
        <div className="dropdown-links-container">
          <ul className="dropdown-links">
            <Link
              className="link"
              to="/films"
              style={{ textDecoration: "none" }}
            >
              FILMS
            </Link>
            <Link
              className="link"
              to="/likes"
              style={{ textDecoration: "none" }}
            >
              LIKES
            </Link>
            <Link
              className="link"
              to="/watchlist"
              style={{ textDecoration: "none" }}
            >
              WATCHLIST
            </Link>
            <li onClick={logoutUser}>SIGN OUT</li>
          </ul>
        </div>
      )}
    </Wrapper>
  );
}
