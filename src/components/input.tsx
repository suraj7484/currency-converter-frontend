import React, { InputHTMLAttributes } from "react";
import "../assets/styles/components/input.scss";
import { UseFormRegister } from "react-hook-form";

interface FormData {
    [key: string]: string;
}

interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type: string;
    placeholder: string;
    name: string;
    register: any;
    
}

const Input: React.FC<InputPropTypes> = ({
    className = "",
    type = "text",
    placeholder,
    register,
    name,
    ...inputProps
}) => {

  return (
    <input
        className={`common-input ${className}`}
        type={type}
        placeholder={ placeholder }
        {...inputProps}
        {...register(name)}
    />
  );
};

export default Input;
