import React from "react";

import { Button } from "./styles";

export interface ButtonProps {
  color: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, color }) => {
  return <Button color={color}>{children}</Button>;
};

export default ButtonComponent;
