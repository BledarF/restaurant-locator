import React from "react";
import { Grid } from "@mui/material";
import RESTAURANT_LOCATOR_NAME from "../../data/GeneralConstants";
import { ButtonComponent } from "../../common-components/button/ButtonComponent";
import "../../styles/layout/_navbar.scss";
import "../../styles/common-components/button/_button.scss";

export const NavBar = () => {
  const loginButtonClick = () => {
    console.log("i clicked the  button");
  };

  const signupButtonClick = () => {
    console.log("i clicked the  button");
  };

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="center"
      className="navbar-container"
    >
      <Grid className="logo-container">
        <h2 className="restaurant-logo">{RESTAURANT_LOCATOR_NAME}</h2>
      </Grid>
      <Grid
        className="buttons-container"
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <ButtonComponent
          label="Login"
          variant="outlined"
          onClickHandler={loginButtonClick}
          className="base"
        />
        <ButtonComponent
          label="Sign up"
          variant="outlined"
          onClickHandler={signupButtonClick}
          className="base"
        />
      </Grid>
    </Grid>
  );
};
