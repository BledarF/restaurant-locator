import React from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import { NavBar } from "./layout/navbar/NavBar";
import { HomePage } from "./pages/home/HomePage";
import "./styles/base/_base.scss";

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
      <HomePage />
    </Grid>
  );
}

export default App;
