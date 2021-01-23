// import { Avatar } from "material-ui";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import GameOverDialog from "./GameOverDialog";
// import { Button } from "@material-ui/core";
import ReactAudioPlayer from "react-audio-player";
// import DemoMusic from "./DemoMusic";
import { Avatar, Paper } from "material-ui";

const styles = (theme) => ({
  large: {
    width: 500,
    height: 500,
    borderRadius: 5,
  },
});
const internalStyle = {
  imageMusic: () => ({
    width: 300,
    height: 300,
    margin: "auto",
  }),
  playerStyle: (height) => ({
    backgroundColor: "#f1f3f4",
    height: height - 560,
    bottom: 0,
    width: "100%",
    position: "absolute",
    border: 10,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 35,
    paddingTop: 10,
  }),
};

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: { minutes: "...", seconds: ".." },
      openDialog: false,
      gameOver: false,
      score: 0,
    };
  }
  componentDidMount() {}

  render() {
    const { classes, height, width } = this.props;
    console.log(this.props.height, " height", this.props.width);
    return (
      <div
        style={{
          textAlign: "center",
          width: this.props.width,
        }}
      >
        <h1 style={{ marginTop: 40, marginBottom: 50 }}>Start Playing Music</h1>
        <div>
          Music app
          <Avatar src="images/realmeImage.png" style={internalStyle.imageMusic()} />
        </div>
        <Paper style={internalStyle.playerStyle(height)}>
          <ReactAudioPlayer src="musics/itsrealme.mp3" autoPlay controls />{" "}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(DisplayImage);
