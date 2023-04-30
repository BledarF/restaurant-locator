import React from "react";
import { Card } from "@mui/material";
import { Formik, FormikProps, Form } from "formik";
import { LOGIN_VALIDATION_SCHEMA } from "../../data/FormSchemas";
import { InputComponent } from "../../common-components/input/InputComponent";
import { ButtonComponent } from "../../common-components/button/ButtonComponent";
import { EMAIL_ADDRESS_LABEL, PASSWORD_LABEL } from "../../data/AuthConstants";
import "../../styles/common-components/input/_input.scss";
import "../../styles/pages/login/_login-form.scss";

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const initialValues: FormValues = { email: "", password: "" };

  return (
    <Card className="login-form-container">
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
        }: FormikProps<FormValues>) => (
          <Form>
            <InputComponent
              onChangeHandler={handleChange(initialValues.email)}
              type="text"
              label={EMAIL_ADDRESS_LABEL}
              errorMessage={errors.email && touched.email ? errors.email : ""}
              inputStyle="input-base"
              labelStyle="input-label"
            />
            <InputComponent
              onChangeHandler={handleChange(initialValues.password)}
              type="password"
              label={PASSWORD_LABEL}
              errorMessage={
                errors.password && touched.password ? errors.password : ""
              }
              inputStyle="input-base"
              labelStyle="input-label"
            />
            <ButtonComponent label={EMAIL_ADDRESS_LABEL} />
          </Form>
        )}
      </Formik>
    </Card>
  );
};
