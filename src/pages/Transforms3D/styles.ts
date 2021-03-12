import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  perspective: 1000px; //princípio para o efeito 3D!

  h1 {
    padding: 30px 0 0 0;
  }

  img {
    width: 300px;
    display: block;
    margin: auto;
    margin-top: 200px;

    transition: transform 1s;
  }

  img:hover {
    transform: translateZ(500px); //depois trocar para 1200
  }
`;

export const SecondExampleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 300px;
    display: block;
    margin-left: 50px;

    transition: transform 1s;

    &:nth-child(1):hover {
      transform: rotateZ(60deg);
    }

    &:nth-child(2):hover {
      transform: rotateX(60deg);
    }

    &:nth-child(3):hover {
      transform: rotateY(60deg);
    }
  }
`;
