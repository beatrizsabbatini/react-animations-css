import React from "react";

import Lottie from "react-lottie";

import { Container } from "./styles";
import animatedCat from "../../assets/lotties/cat.json";

const LottiePage: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedCat,
  };

  return (
    <Container>
      <h1>Lottie</h1>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Container>
  );
};

export default LottiePage;
