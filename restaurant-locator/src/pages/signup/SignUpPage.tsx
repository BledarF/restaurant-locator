import React, { useEffect } from "react";
import { Card, Grid } from "@mui/material";
import { SignUpForm } from "./SignUpForm";
import Food from "../../assets/images/Food.png";
import "../../styles/pages/auth/_auth.scss";

export const SignUpPage = () => {
  useEffect(() => {
    localStorage.setItem("route", "/signup");
  }, []);

  return (
    <Card className="auth-page-container">
      <SignUpForm />
      <Grid className="image-container">
        <img src={Food} alt="food img" className="img" />
      </Grid>
    </Card>
  );
};
