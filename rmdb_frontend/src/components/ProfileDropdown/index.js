import React, { useState } from "react";
// Context
import { useAuthContext } from "../../context/AuthContext";
// Images
import expandIcon from "../../images/expand.svg";
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
            <li>WATCHED</li>
            <li>LIKES</li>
            <li>WATCHLIST</li>
            <li onClick={logoutUser}>SIGN OUT</li>
          </ul>
        </div>
      )}
    </Wrapper>
  );
}
