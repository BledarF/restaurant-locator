import * as Yup from "yup";

export const LOGIN_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("No email provided"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters"),
});

export const REGISTRATION_VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is Required")
    .min(1, "First Name is Too Short"),
  lastName: Yup.string()
    .required("Last Name is Required")
    .min(1, "Last Name is Too Short"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  confirmPassword: Yup.string()
    .required("Please retype your password")
    .oneOf([Yup.ref("password")], "Your passwords do not match"),
});
