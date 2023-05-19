import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { LoginPage } from "../pages/login/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { SignUpPage } from "../pages/signup/SignUpPage";
import App from "../App";
import { Landing } from "../pages/landing/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute requireAuth={false}>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoute requireAuth={false}>
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedRoute requireAuth={false}>
            <SignUpPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/landing",
        element: (
          <ProtectedRoute requireAuth={true}>
            <Landing />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
