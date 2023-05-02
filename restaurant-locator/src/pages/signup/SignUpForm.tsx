import React from "react";
import { Card, Grid } from "@mui/material";
import { Formik, FormikProps, Form } from "formik";
import { REGISTRATION_VALIDATION_SCHEMA } from "../../data/FormSchemas";
import { InputComponent } from "../../common-components/input/InputComponent";
import { ButtonComponent } from "../../common-components/button/ButtonComponent";
import {
  EMAIL_ADDRESS_LABEL,
  PASSWORD_LABEL,
  SIGNUP_LABEL,
  CONFIRM_PASSWORD_LABEL,
} from "../../data/AuthConstants";
import "../../styles/common-components/input/_input.scss";
import "../../styles/pages/auth/_auth-form.scss";
import "../../styles/common-components/button/_button.scss";
import { Link } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Card className="card-signup-container">
      <Grid className="content-container">
        <h2 className="auth-heading">{SIGNUP_LABEL}</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={REGISTRATION_VALIDATION_SCHEMA}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values: FormValues) => console.log(values)}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            touched,
          }: FormikProps<FormValues>) => (
            <Form onSubmit={handleSubmit} className="form-container">
              <InputComponent
                onChangeHandler={handleChange("email")}
                type="text"
                label={EMAIL_ADDRESS_LABEL}
                errorMessage={errors.email && touched.email ? errors.email : ""}
                inputContainerStyle="input-container"
                inputStyle={errors.email ? "input-error" : "input-base"}
                labelStyle="input-label"
                errorStyle="input-error-message"
              />
              <InputComponent
                onChangeHandler={handleChange("password")}
                type="password"
                label={PASSWORD_LABEL}
                errorMessage={
                  errors.password && touched.password ? errors.password : ""
                }
                inputContainerStyle="input-container"
                inputStyle={errors.password ? "input-error" : "input-base"}
                labelStyle="input-label"
                errorStyle="input-error-message"
              />

              <InputComponent
                onChangeHandler={handleChange("confirmPassword")}
                type="password"
                label={CONFIRM_PASSWORD_LABEL}
                errorMessage={
                  errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : ""
                }
                inputContainerStyle="input-container"
                inputStyle={errors.password ? "input-error" : "input-base"}
                labelStyle="input-label"
                errorStyle="input-error-message"
              />
              <Grid className="button-container">
                <ButtonComponent
                  label={SIGNUP_LABEL}
                  className="submit"
                  type="submit"
                />
              </Grid>

              <p className="signup-para">
                Account already made?{" "}
                <Link to="/login">
                  <span className="signup-link">Login</span>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </Grid>
    </Card>
  );
};
