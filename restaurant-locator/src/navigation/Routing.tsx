import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { LoginPage } from "../pages/login/LoginPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
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
          <ProtectedRoutes requireAuth={false}>
            <HomePage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoutes requireAuth={false}>
            <LoginPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedRoutes requireAuth={false}>
            <SignUpPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/landing",
        element: (
          <ProtectedRoutes requireAuth={true}>
            <Landing />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);
