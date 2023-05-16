import React, { useEffect } from "react";
import { Grid, Card } from "@mui/material";
import { HOME_PAGE_TITLE, HOME_PAGE_SUBHEADING } from "./HomePageConstants";
import "../../styles/pages/home/_home.scss";

export const HomePage = () => {
  useEffect(() => {
    localStorage.setItem("route", "/home");
  }, []);
  return (
    <Grid
      container
      item
      justifyContent="center"
      alignItems="center"
      className="home-page-container"
    >
      <Card className="card-container">
        <h2 className="title">{HOME_PAGE_TITLE}</h2>
        <p className="subheading">{HOME_PAGE_SUBHEADING}</p>
      </Card>
    </Grid>
  );
};
