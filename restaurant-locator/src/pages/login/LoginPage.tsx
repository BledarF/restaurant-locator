import React from "react";
import { Card, Grid } from "@mui/material";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <Card>
      <LoginForm />
      <Grid>
        <img alt="food img" />
      </Grid>
    </Card>
  );
};
