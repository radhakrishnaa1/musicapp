import React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import { DISPLAYIMAGE } from "../constants/routes";
import { Avatar } from "material-ui";
import Paper from "@material-ui/core/Paper";
import PlayArrow from "@material-ui/icons/PlayCircleFilled";
const internalStyle = {
  musicLogo: () => ({
    width: "30%",
    height: "30%",
    border: "1px solid red",
    margin: "auto",
    borderRadius: 100,
  }),
};
class Home extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center", width: this.props.width }}>
        <h1>Welcome Music App </h1>

        <div id="musicLogo" onClick={() => this.props.history.push(DISPLAYIMAGE)}>
          {/* <div style={internalStyle.musicLogo()}> */}
          <Paper
            elevation={5}
            style={{
              width: "fit-content",
              height: "fit-content",
              borderRadius: 130,
              margin: "auto",
              marginTop: "10vh",
            }}
          >
            <PlayArrow style={{ width: 240, height: 240, margin: "auto", color: "gray" }} />
          </Paper>
          {/* </div> */}
        </div>
        <Button style={{ margin: 50 }}>Click above for Next</Button>
      </div>
    );
  }
}

export default withRouter(Home);
