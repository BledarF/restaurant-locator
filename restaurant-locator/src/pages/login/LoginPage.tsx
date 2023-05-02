import React from "react";
import { Card, Grid } from "@mui/material";
import { LoginForm } from "./LoginForm";
import "../../styles/pages/login/_login.scss";

export const LoginPage = () => {
  return (
    <Card className="login-page-container">
      <LoginForm />
      <Grid className="image-container">
        <img alt="food img" />
      </Grid>
    </Card>
  );
};
