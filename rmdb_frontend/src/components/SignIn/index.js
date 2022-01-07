import React from "react";
//  Styled
import { Wrapper } from "./SignIn.styles";

export default function SignIn({ setShowSignIn }) {
  const handleCloseClick = () => {
    setShowSignIn(false);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="close" onClick={handleCloseClick}>
          X
        </div>
        <div className="input-container">
          <div className="descriptor">Username</div>
          <input id="username" />
        </div>
        <div className="input-container">
          <div className="descriptor">Password</div>
          <input id="password" />
        </div>
        <button>SIGN IN</button>
      </div>
    </Wrapper>
  );
}
