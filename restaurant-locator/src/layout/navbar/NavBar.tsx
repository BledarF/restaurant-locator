import { Grid } from "@mui/material";
import { Constants } from "../../data/Constants";
import { ButtonComponent } from "../../common-components/button/ButtonComponent";

export const NavBar = () => {
  const RESTAURANT_LOCATOR_NAME = Constants.general.RESTAURANT_LOCATOR_NAME;

  const loginButtonClick = () => {
    console.log("i clicked the  button");
  };

  const signupButtonClick = () => {
    console.log("i clicked the  button");
  };

  return (
    <Grid>
      <h2>{RESTAURANT_LOCATOR_NAME}</h2>
      <Grid>
        <ButtonComponent label="Login" onClickHandler={loginButtonClick} />
        <ButtonComponent label="Sign up" onClickHandler={signupButtonClick} />
      </Grid>
    </Grid>
  );
};
