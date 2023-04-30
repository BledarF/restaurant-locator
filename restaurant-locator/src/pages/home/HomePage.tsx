import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { HOME_PAGE_TITLE, HOME_PAGE_SUBHEADING } from "./HomePageConstants";

export const HomePage = () => {
  return (
    <Grid container item className="home-page-container">
      <Card className="card-container">
        <h2>{HOME_PAGE_TITLE}</h2>
        <p>{HOME_PAGE_SUBHEADING}</p>
      </Card>
    </Grid>
  );
};
