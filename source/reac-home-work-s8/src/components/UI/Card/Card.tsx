import React, { ReactNode } from "react";
import "./Card.css";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Card = (props: Props) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
