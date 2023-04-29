import { MouseEventHandler } from "react";
import Button from "@mui/material/Button";
import ButtonVariant from "../../data/Types";

interface ButtonProps {
  label: string;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
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
