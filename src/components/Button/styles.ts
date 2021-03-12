import styled from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  background-color: ${({ color }) => color};
  cursor: pointer;
  padding: 20px 30px;
  width: 200px;
  height: 80px;
  border-radius: 10px;
  border: 2px solid white;
  -webkit-box-shadow: 5px 6px 32px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 6px 32px -16px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 6px 32px -16px rgba(0, 0, 0, 0.75);

  text-transform: uppercase;
  color: white;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }
`;
