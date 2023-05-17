import React, { useEffect } from "react";
import { Card, Grid } from "@mui/material";
import { LoginForm } from "./LoginForm";
import ManEating from "../../assets/images/ManEating.png";
import "../../styles/pages/auth/_auth.scss";

export const LoginPage = () => {
  useEffect(() => {
    localStorage.setItem("route", "/login");
  }, []);

  return (
    <Card className="auth-page-container">
      <LoginForm />

      <Grid className="image-container">
        <img src={ManEating} alt="food img" className="img" />
      </Grid>
    </Card>
  );
};
