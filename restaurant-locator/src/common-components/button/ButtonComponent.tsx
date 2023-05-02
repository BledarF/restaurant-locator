import React from "react";
import { MouseEventHandler } from "react";
import Button from "@mui/material/Button";
import { ButtonTypes, ButtonVariants } from "../../data/Types";
import "../../styles/common-components/button/_button.scss";

interface ButtonProps {
  label: string;
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariants;
  isDisabled?: boolean;
  type?: ButtonTypes;
  className?: string;
}

export const ButtonComponent = ({
  label,
  onClickHandler,
  variant,
  isDisabled,
  type,
  className,
}: ButtonProps) => {
  return (
    <Button
      onClick={onClickHandler}
      variant={variant}
      disabled={isDisabled}
      className={className}
      type={type}
    >
      {label}
    </Button>
  );
};
