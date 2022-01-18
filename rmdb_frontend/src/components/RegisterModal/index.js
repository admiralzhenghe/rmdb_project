import React, { useState } from "react";
// Portal
import { createPortal } from "react-dom";
// Styled
import { Wrapper } from "./RegisterModal.styles";

export default function RegisterModal({ modalOpen, setModalOpen }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  if (!modalOpen) return null;

  const handleSignUpClick = async (e) => {
    e.preventDefault();

    let payload = {
      email: email,
      username: username,
      password1: password1,
      password2: password2,
    };

    if (password1 !== password2) {
      return alert("Passwords do not match!");
    } else if (password1.length < 8) {
      return alert("Password must contain at least 8 characters.");
    }

    const URL = "http://127.0.0.1:8000/api/rest-auth/registration/";

    const register = async (URL, payload) => {
      let response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = await response.json();
      // If a registration error occurs
      if (data.email) {
        return alert(`${data.email[0]}`);
      } else if (!data.user) {
        if (data.username) return alert(`${data.username[0]}`);
        else if (data.password1) {
          let message = data.password1.join(" ");
          return alert(`${message}`);
        }
      } else if (data.non_field_errors) {
        return alert(`${data.non_field_errors[0]}`);
      }
    };
    register(URL, payload);
  };

  return createPortal(
    <Wrapper>
      <div
        className="overlay"
        onClick={(e) => {
          if (e.target.className !== "sign-up") setModalOpen(false);
        }}
      ></div>
      <div className="sign-up">
        <div className="top">
          <span>JOIN RMDB</span>
          <span className="close" onClick={() => setModalOpen(!modalOpen)}>
            X
          </span>
        </div>
        <label htmlFor="email" type="email">
          Email address
          <br />
          <input
            id="email"
            name="email"
            type="email"
            onInput={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="username">
          Username
          <br />
          <input
            id="username"
            name="username"
            type="text"
            onInput={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password1" type="password">
          Password
          <br />
          <input
            id="password1"
            name="password1"
            type="password"
            onInput={(e) => setPassword1(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password2" type="password">
          Confirm password
          <br />
          <input
            id="password2"
            name="password2"
            type="password"
            onInput={(e) => setPassword2(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleSignUpClick}>SIGN UP</button>
      </div>
    </Wrapper>,
    document.getElementById("modal-root")
  );
}
