import React, { createContext, useContext, useEffect, useState } from "react";
// Router
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);

  const [tokens, setTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens")).user
      : null
  );
  const [showSignIn, setShowSignIn] = useState(false);

  const [modal, setModal] = useState(false);

  let navigate = useNavigate();

  const URL = "http://127.0.0.1:8000/api/";

  const loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch(`${URL}rest-auth/login/`, {
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
      setShowSignIn(false);
      window.location.reload();
    } else {
      alert("Login error!");
    }
  };

  const logoutUser = () => {
    setTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  const registerUser = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let username = e.target.username.value;
    let password1 = e.target.password1.value;
    let password2 = e.target.password2.value;

    let payload = {
      email,
      username,
      password1,
      password2,
    };

    if (password1 !== password2) {
      return alert("Passwords do not match!");
    } else if (password1.length < 8) {
      return alert("Password must contain at least 8 characters.");
    }

    const URL = "http://127.0.0.1:8000/api/rest-auth/registration/";

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
    // Otherwise, log in the newly registered user
    else {
      let tokens = {
        access: data.access_token,
        refresh: data.refresh_token,
        user: data.user,
      };
      setTokens(tokens);
      setUser(data.user);
      localStorage.setItem("authTokens", JSON.stringify(tokens));
      setModal(false);
      navigate("/");
    }

    e.target.email.value = "";
    e.target.username.value = "";
    e.target.password1.value = "";
    e.target.password2.value = "";
  };

  let updateToken = async () => {
    if (!user) return setLoading(false);

    let response = await fetch(`${URL}rest-auth/token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: tokens?.refresh }),
    });

    let data = await response.json();

    if (response.status === 200) {
      console.log("Token refreshed!");
      setTokens({ ...tokens, access: data.access });
      localStorage.setItem(
        "authTokens",
        JSON.stringify({ ...tokens, access: data.access })
      );
    } else logoutUser();

    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }
    let minutes = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (tokens) {
        updateToken();
      }
    }, minutes);
    return () => {
      clearInterval(interval);
    };
  }, [loading, tokens]);

  const contextData = {
    loginUser,
    logoutUser,
    registerUser,
    modal,
    setModal,
    showSignIn,
    setShowSignIn,
    updateToken,
    tokens,
    user,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
