import React from "react";
// Context
import { useAuthContext } from "../../context/AuthContext";
// Portal
import { createPortal } from "react-dom";
// Styled
import { Wrapper } from "./RegisterModal.styles";

export default function RegisterModal() {
  let { modal, setModal, registerUser } = useAuthContext();

  if (!modal) return null;

  return createPortal(
    <Wrapper>
      <div
        className="overlay"
        onClick={(e) => {
          if (e.target.className !== "sign-up") setModal(false);
        }}
      ></div>
      <div className="sign-up">
        <div className="top">
          <span>JOIN RMDB</span>
          <span className="close" onClick={() => setModal(!modal)}>
            X
          </span>
        </div>
        <form onSubmit={registerUser}>
          <label htmlFor="email" type="email">
            Email address
            <br />
            <input id="email" name="email" type="email" />
          </label>
          <br />
          <label htmlFor="username">
            Username
            <br />
            <input id="username" name="username" type="text" />
          </label>
          <br />
          <label htmlFor="password1" type="password">
            Password
            <br />
            <input id="password1" name="password1" type="password" />
          </label>
          <br />
          <label htmlFor="password2" type="password">
            Confirm password
            <br />
            <input id="password2" name="password2" type="password" />
          </label>
          <br />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </Wrapper>,
    document.getElementById("modal-root")
  );
}
