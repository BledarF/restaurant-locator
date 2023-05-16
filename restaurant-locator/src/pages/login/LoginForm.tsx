import React, { useState } from "react";
import { Card, Grid } from "@mui/material";
import { Formik, FormikProps, Form } from "formik";
import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { LOGIN_VALIDATION_SCHEMA } from "../../data/FormSchemas";
import { InputComponent } from "../../common-components/input/InputComponent";
import { ButtonComponent } from "../../common-components/button/ButtonComponent";
import {
  BASE_URL,
  EMAIL_ADDRESS_LABEL,
  LOGIN_LABEL,
  PASSWORD_LABEL,
  LOGIN_ENDPOINT,
  POST_METHOD,
} from "../../data/AuthConstants";
import "../../styles/common-components/input/_input.scss";
import "../../styles/pages/auth/_auth-form.scss";
import "../../styles/common-components/button/_button.scss";
import { Link, useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/UseHttp";

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const initialValues: FormValues = { email: "", password: "" };
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleResponse = (response: AxiosResponse<any>) => {
    switch (response.status) {
      case 200:
        setError("");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("route", "/landing");
        navigate("/landing");
        break;
      case 403:
        setError(response.data);
        break;
      default:
        setError("Server error");
        break;
    }
  };

  return (
    <Card className="card-login-container">
      <Grid className="content-container">
        <h2 className="auth-heading">{LOGIN_LABEL}</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={LOGIN_VALIDATION_SCHEMA}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={async (values: FormValues) => {
            const response = await useHttp(
              BASE_URL + LOGIN_ENDPOINT,
              POST_METHOD,
              {
                email: values.email,
                password: values.password,
              }
            );
            console.log(response);

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
              <Grid className="button-container">
                <ButtonComponent
                  label={LOGIN_LABEL}
                  className="submit"
                  type="submit"
                />
              </Grid>

              <p className="login-para">
                Dont have an account?{" "}
                <Link to="/signup">
                  <span className="login-link">Register here</span>
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
