import React from "react";
import { Grid } from "@mui/material";
import RESTAURANT_LOCATOR_NAME from "../../data/GeneralConstants";
import { ButtonComponent } from "../../common-components/button/ButtonComponent";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/layout/_navbar.scss";
import "../../styles/common-components/button/_button.scss";

export const NavBar = () => {
  const navigate = useNavigate();

  const loginButtonClick = () => {
    navigate("/login");
  };

  const signupButtonClick = () => {
    navigate("/signup");
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
        <h2 className="restaurant-logo">
          {" "}
          <Link className="link" to="/home">
            {RESTAURANT_LOCATOR_NAME}
          </Link>{" "}
        </h2>
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
