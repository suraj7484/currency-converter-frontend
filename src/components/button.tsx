import React, { ButtonHTMLAttributes } from "react";
import "../assets/styles/components/button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Required props
  label: string;
  // Optional props
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ label, variant = "primary", ...buttonProps }) => {
  // Add your custom styling logic based on the variant prop
  const buttonClassName = `common-button ${variant === "primary" ? "primary-button" : "secondary-button"}`;

  return (
    <button className={buttonClassName} {...buttonProps}>
      {label}
    </button>
  );
};

export default Button;
