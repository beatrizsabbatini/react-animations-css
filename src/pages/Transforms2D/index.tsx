import React from "react";

import { Container, ExampleContainer } from "./styles";

const Transforms2D: React.FC = () => {
  return (
    <Container>
      <h1>Transform Functions (2D): </h1>

      <ExampleContainer>
        <div>Scale</div>
        <div>Translate</div>
        <div>Rotate</div>
        <div>Skew</div>
      </ExampleContainer>
    </Container>
  );
};

export default Transforms2D;
