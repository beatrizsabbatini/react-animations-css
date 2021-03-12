import React, { useState } from "react";

import {
  Container,
  TimingFunctionExample,
  StartAnimationButton,
  MultipleAnimationsExample,
  OneAnimationExample,
} from "./styles";

const Transitions: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <Container>
      <h1>Transitions - Example with 1 animation </h1>

      <OneAnimationExample>
        <button type="button">Button</button>
      </OneAnimationExample>

      <h1>Transitions - Timing Functions</h1>

      <TimingFunctionExample shouldStartAnimation={startAnimation}>
        <div>Ease (Default)</div>
        <div>Linear</div>
        <div>Ease-In</div>
        <div>Ease-Out</div>
        <div>Ease-In-Out</div>
      </TimingFunctionExample>

      <StartAnimationButton onClick={() => setStartAnimation(true)}>
        Start Animation
      </StartAnimationButton>

      <h1>Transitions - Example with 1 multiple animations </h1>

      <MultipleAnimationsExample>
        <button type="button">Second Example</button>
      </MultipleAnimationsExample>
    </Container>
  );
};

export default Transitions;
