import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import withMUI from "./hoc/withMUI";
import withUser from "./hoc/withUser";
import withAuthentication from "./hoc/withAuthentication";

import DisplayImage from "./components/DisplayImage";
import Home from "./components/Home";
import { DISPLAYIMAGE } from "./constants/routes";
function App(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);

    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <div>
      <Router>
        <Route path="/" exact render={(props) => <Home {...props} width={width} height={height} />} />
        <Route
          path={DISPLAYIMAGE}
          exact
          render={(props) => <DisplayImage {...props} width={width} height={height} />}
        />
      </Router>
    </div>
  );
}

export default withAuthentication(withMUI(withUser(App)));
