// import { Avatar } from "material-ui";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import GameOverDialog from "./GameOverDialog";
// import { Button } from "@material-ui/core";
import ReactAudioPlayer from "react-audio-player";
import { withRouter } from "react-router";

// import DemoMusic from "./DemoMusic";
import { Avatar, Paper } from "material-ui";
import GoBack from "@material-ui/icons/KeyboardBackspace";
import songs from "../constants/musicList.json";
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
      id: "",
      name: "",
      songurl: "",
      imageurl: "",
      data: [],
    };
  }
  componentDidMount() {
    this.setInitial(this.props);
  }
  componentWillReceiveProps(next) {
    this.setInitial(next);
  }
  setInitial = (props) => {
    console.log(props);
    this.setState({
      id: props.match.params.id,
      loader: false,
      data: songs.filter((data) => data.id === props.match.params.id),
    });
  };
  render() {
    const { classes, height, width } = this.props;
    console.log(this.state.data);
    return (
      <div>
        <div
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          <GoBack />
        </div>
        {this.state.loader ? (
          <div>Loading...</div>
        ) : (
          <div
            style={{
              textAlign: "center",
              width: this.props.width,
            }}
          >
            <h1 style={{ marginBottom: 50 }}>{songs.find((data) => data.id === this.props.match.params.id).name} </h1>
            <div>
              <Avatar
                src={songs.find((data) => data.id === this.props.match.params.id).imageUrl}
                style={internalStyle.imageMusic()}
              />
            </div>
            <Paper style={internalStyle.playerStyle(height)}>
              <ReactAudioPlayer
                src={songs.find((data) => data.id === this.props.match.params.id).musicUrl}
                autoPlay
                controls
              />{" "}
            </Paper>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(DisplayImage));
