import React from "react";
// Context
import { useAuthContext } from "../context/AuthContext";
// Router
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, redirect }) {
  let { user } = useAuthContext();
  return !user ? <Navigate to={redirect} /> : children;
}
