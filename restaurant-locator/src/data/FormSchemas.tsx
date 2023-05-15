import * as Yup from "yup";

export const LOGIN_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("No email provided"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters"),
});

export const REGISTRATION_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  confirmPassword: Yup.string()
    .required("Please retype your password")
    .oneOf([Yup.ref("password")], "Your passwords do not match"),
});
