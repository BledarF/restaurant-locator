import React from "react";
import { MouseEventHandler } from "react";
import Button from "@mui/material/Button";
import { ButtonVariants } from "../../data/Types";
import "../../styles/common-components/button/_button.scss";

interface ButtonProps {
  label: string;
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariants;
  isDisabled?: boolean;
  className?: string;
}

export const ButtonComponent = ({
  label,
  variant,
  isDisabled,
  onClickHandler,
  className,
}: ButtonProps) => {
  return (
    <Button
      onClick={onClickHandler}
      variant={variant}
      disabled={isDisabled}
      className={className}
    >
      {label}
    </Button>
  );
};
