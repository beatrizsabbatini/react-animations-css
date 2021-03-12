import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface TimingFunctionProps {
  shouldStartAnimation?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TimingFunctionExample = styled.div<TimingFunctionProps>`
  width: 960px;

  div {
    margin: 2em;
    width: 150px;
    height: 50px;
    padding: 10px 15px;
    background-color: #e8a7a7;
    color: #fff;
    border-radius: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;

    transition-property: translate();
    transition-duration: 3s;

    ${({ shouldStartAnimation }) =>
      shouldStartAnimation &&
      css`
        transform: translate(900px, 0);
      `}
  }

  & div:nth-child(1) {
    transition-timing-function: ease;
  }

  & div:nth-child(2) {
    transition-timing-function: linear;
  }

  & div:nth-child(3) {
    transition-timing-function: ease-in;
  }

  & div:nth-child(4) {
    transition-timing-function: ease-out;
  }

  & div:nth-child(5) {
    transition-timing-function: ease-in-out;
  }

  & div:hover {
    transform: translate(900px, 0);
  }
`;

export const StartAnimationButton = styled.div`
  margin: 2em;
  width: 150px;
  height: 50px;
  padding: 10px 15px;
  background-color: #ce6171;
  color: #fff;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`;

export const SecondExample = styled.div`
  margin: 3vh 0;

  button {
    height: 90px;
    width: 290px;
    font-size: 28px;
    color: white;
    border: none;
    background-color: #868ed6;
    transition: all 1s ease-in 1s;

    &:hover {
      background-color: #86d686;
      color: #4d914d;
      border-radius: 50%;
    }
  }
`;

/*

-- transition: all 1s ease-in 1s;

                =

--  transition-property: background-color color border-radius;
--  transition-duration: 1s;
--  transition-timing-function: ease-in

*/

/*

-- Se quisesse que cada propriedade tivesse uma duração específica, e timing function:

--  transition: background-color 3s ease-in-out 1s, color 2s ease 4s, border-radius 4s ease-out 5s;

*/
