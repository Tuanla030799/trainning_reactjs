import React, { ReactNode, MouseEvent } from "react";
import "./Button.css";
type Props = {
  children?: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const Button = (props: Props) => {
  return (
    <button
      className={`button ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
