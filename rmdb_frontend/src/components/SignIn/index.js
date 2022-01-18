import React from "react";
// Context
import { useAuthContext } from "../../context/AuthContext";
//  Styled
import { Wrapper } from "./SignIn.styles";

export default function SignIn() {
  const { loginUser, setShowSignIn } = useAuthContext();

  return (
    <Wrapper>
      <div className="container">
        <div className="close" onClick={() => setShowSignIn(false)}>
          X
        </div>
        <form onSubmit={loginUser}>
          <div className="input-container">
            <div className="descriptor">Username</div>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-container">
            <div className="descriptor">Password</div>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </Wrapper>
  );
}
