import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    height: 150px;
    width: 150px;
    background-color: #40739e;
    color: white;
    line-height: 150px;
    text-align: center;
    font-size: 24px;
    margin: 20px;
    margin-right: auto;
    margin-left: auto;

    transition: transform 1s;
  }

  & div:nth-child(1):hover {
    transform: scale(1.5);
  }

  & div:nth-child(2):hover {
    transform: translateX(320px);
  }

  & div:nth-child(3):hover {
    transform: rotate(180deg);
  }

  & div:nth-child(4):hover {
    transform: skew(20deg);
  }
`;
