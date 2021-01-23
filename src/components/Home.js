import React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import { DISPLAYIMAGE } from "../constants/routes";
import { Avatar } from "material-ui";

class Home extends React.Component {
  componentDidMount() {
    this.variableExplanation();
  }
  variableExplanation = () => {
    let letType = 10;
    for (let i = 0; i < 10; i++) {
      var varType = 20;
    }

    const constTpe = [{ id: 123, name: "riya" }];
    constTpe.push({ id: 1, name: "rahul" });
    console.log("let ", letType);
    console.log("var ", varType);
    console.log("const ", constTpe);
    // this.method();
  };
  // method = () => {
  //   console.log("varMethod ", varType);
  // };
  render() {
    return (
      <div style={{ textAlign: "center", width: this.props.width }}>
        <h1>Welcome to Chidiya udd</h1>

        <div>
          {" "}
          <img
            src="cloud.jpg"
            style={{ width: this.props.width > 500 ? null : "100%", height: "60%", marginTop: "8%" }}
          />
        </div>
        <Button style={{ margin: 50 }} onClick={() => this.props.history.push(DISPLAYIMAGE)}>
          Next{" "}
        </Button>
      </div>
    );
  }
}

export default withRouter(Home);
