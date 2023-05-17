import React from "react";
import { Navigate } from "react-router-dom";

interface routingProps {
  children: JSX.Element;
  requireAuth: boolean;
}

export const ProtectedRoutes = ({ children, requireAuth }: routingProps) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn || (!isLoggedIn && !requireAuth)) {
    return children;
  }

  return <Navigate to="/home" />;
};
