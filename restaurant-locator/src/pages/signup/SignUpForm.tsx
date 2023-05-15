import React, { useState } from "react";
import { Card, Grid } from "@mui/material";
import { Formik, FormikProps, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/UseHttp";
import { InputComponent } from "../../common-components/input/InputComponent";
import { ButtonComponent } from "../../common-components/button/ButtonComponent";
import {
  EMAIL_ADDRESS_LABEL,
  PASSWORD_LABEL,
  SIGNUP_LABEL,
  CONFIRM_PASSWORD_LABEL,
  SIGNUP_ENDPOINT,
  BASE_URL,
  POST_METHOD,
} from "../../data/AuthConstants";
import { REGISTRATION_VALIDATION_SCHEMA } from "../../data/FormSchemas";
import "../../styles/common-components/input/_input.scss";
import "../../styles/pages/auth/_auth-form.scss";
import "../../styles/common-components/button/_button.scss";
import { Link } from "react-router-dom";
import { AxiosResponse } from "axios";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const initialValues: FormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleResponse = (response: AxiosResponse<any>) => {
    switch (response.status) {
      case 200:
        navigate("/login");
        break;
      case 400:
        setError(response.data);
        break;
      default:
        setError("Server error");
        break;
    }
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
          onSubmit={async (values: FormValues) => {
            const response = await useHttp(
              BASE_URL + SIGNUP_ENDPOINT,
              POST_METHOD,
              {
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword,
              }
            );

            response
              ? handleResponse(response)
              : setError("Something went wrong");
          }}
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

              <p className="error">{error}</p>
            </Form>
          )}
        </Formik>
      </Grid>
    </Card>
  );
};
