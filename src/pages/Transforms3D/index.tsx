import React from "react";

import { Container, SecondExampleContainer } from "./styles";
import Dog from "../../assets/chica.jpeg";

const Transforms3D: React.FC = () => {
  return (
    <>
      <Container>
        <h1>3D Transforms </h1>

        <img src={Dog} alt="my-dog" />
      </Container>
      <Container>
        <h1>3D Transforms </h1>

        <SecondExampleContainer>
          <img src={Dog} alt="my-dog" />
          <img src={Dog} alt="my-dog" />
          <img src={Dog} alt="my-dog" />
        </SecondExampleContainer>
      </Container>
    </>
  );
};

export default Transforms3D;
