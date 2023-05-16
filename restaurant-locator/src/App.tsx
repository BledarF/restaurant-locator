import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "./layout/navbar/NavBar";
import "./styles/base/_base.scss";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const currentPage = localStorage.getItem("route");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(currentPage);
    currentPage
      ? navigate(currentPage)
      : isLoggedIn
      ? navigate("/landing")
      : navigate("/");
  }, []);

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
