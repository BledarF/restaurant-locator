import React from "react";
import { Grid, Card } from "@mui/material";
import { Formik, FormikProps } from "formik";

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const initialValues: FormValues = { email: "", password: "" };

  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={LOGIN_VALIDATION_SCHEMA}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values: FormValues) => console.log(values)}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          touched,
        }: FormikProps<FormValues>) => <Grid></Grid>}
      </Formik>
    </Card>
  );
};
