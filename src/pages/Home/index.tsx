import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button/styles";

import { Container, ButtonsContainer } from "./styles";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <h1>Animation Examples</h1>
      <ButtonsContainer>
        <Button color="#e8a7a7" onClick={() => history.push("/transitions")}>
          Transitions
        </Button>
        <Button color="#e5e0a5" onClick={() => history.push("/transforms2D")}>
          2D transforms
        </Button>
        <Button color="#a5ace5" onClick={() => history.push("/transforms3D")}>
          3D transforms
        </Button>
        <Button color="#edb55c" onClick={() => history.push("/lottie")}>
          Lottie
        </Button>
        <Button color="#abe5a5" onClick={() => history.push("/mix")}>
          Mix
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Home;
