import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Lottie from "../pages/Lottie";
import Mix from "../pages/Mix";
import Transforms2D from "../pages/Transforms2D";
import Transforms3D from "../pages/Transforms3D";
import Transitions from "../pages/Transitions";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/transitions" component={Transitions} />
      <Route path="/transforms2D" component={Transforms2D} />
      <Route path="/transforms3D" component={Transforms3D} />
      <Route path="/lottie" component={Lottie} />
      <Route path="/mix" component={Mix} />

      {/* para o github pages:  */}
      <Route exact path="/react-animations-css/" component={Home} />
      <Route path="/react-animations-css/transitions" component={Transitions} />
      <Route
        path="/react-animations-css/transforms2D"
        component={Transforms2D}
      />
      <Route
        path="/react-animations-css/transforms3D"
        component={Transforms3D}
      />
      <Route path="/react-animations-css/lottie" component={Lottie} />
      <Route path="/react-animations-css/mix" component={Mix} />
    </Switch>
  );
};

export default Routes;
