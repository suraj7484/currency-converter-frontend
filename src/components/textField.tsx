import React, { ReactNode, HTMLProps } from "react";
import "../assets/styles/components/input.scss";

interface TextFieldProps<T extends React.ElementType = React.ElementType> {
  as?: T; 
  children?: ReactNode;
}

const TextField: React.FC<TextFieldProps & HTMLProps<HTMLElement>> = ({
  as: Component = "span", 
  children,
  ...props
}) => {
  return (
    <Component {...props}>
      {children}
    </Component>
  );
};

export default TextField;
