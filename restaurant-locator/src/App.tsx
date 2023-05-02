import React from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import { NavBar } from "./layout/navbar/NavBar";
import { HomePage } from "./pages/home/HomePage";
import "./styles/base/_base.scss";
import { LoginPage } from "./pages/login/LoginPage";
import { SignUpPage } from "./pages/signup/SignUpPage";

function App() {
  return (
    <Grid
      className="app"
      container
      item
      justifyContent="center"
      alignItems="flex-start"
    >
      <NavBar />
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      <SignUpPage />
    </Grid>
  );
}

export default App;
