import React from "react";
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import { NavBar } from "./layout/navbar/NavBar";
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
      <Outlet />
    </Grid>
  );
}

export default App;
