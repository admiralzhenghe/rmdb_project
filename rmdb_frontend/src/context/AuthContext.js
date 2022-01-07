import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  let [loading, setLoading] = useState(true);

  let [tokens, setTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens")).user
      : null
  );

  const URL = "http://127.0.0.1:8000/api/";

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch(`${URL}auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();

    // Status 200 === "OK"
    if (response.status === 200) {
      let tokens = {
        access: data.access_token,
        refresh: data.refresh_token,
        user: data.user,
      };
      setTokens(tokens);
      setUser(data.user);
      localStorage.setItem("authTokens", JSON.stringify(tokens));
      navigate("/");
    } else {
      alert("Login error!");
    }
  };

  let logoutUser = () => {
    setTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };
}
