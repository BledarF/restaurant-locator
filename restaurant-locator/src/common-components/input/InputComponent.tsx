import React from "react";
import { Grid } from "@mui/material";

interface InputProps {
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  inputContainerStyle?: string;
  inputStyle?: string;
  labelStyle?: string;
  errorStyle?: string;
}

export const InputComponent = ({
  onChangeHandler,
  type,
  label,
  placeholder,
  errorMessage,
  inputContainerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
}: InputProps) => {
  return (
    <Grid className={inputContainerStyle}>
      <label htmlFor={label} className={labelStyle}>
        {label}
      </label>
      <input
        onChange={onChangeHandler}
        type={type}
        placeholder={placeholder}
        name={label}
        className={inputStyle}
      />
      <p className={errorStyle}>{errorMessage}</p>
    </Grid>
  );
};
