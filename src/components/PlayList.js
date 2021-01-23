// import { Avatar } from "material-ui";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import GameOverDialog from "./GameOverDialog";
// import { Button } from "@material-ui/core";
import ReactAudioPlayer from "react-audio-player";
// import DemoMusic from "./DemoMusic";
import { withRouter } from "react-router";
import { SONG, PLAYLIST, SINGLE } from "../constants/routes";
import { Avatar, Paper } from "material-ui";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import songs from "../constants/musicList.json";
import PlayArrow from "@material-ui/icons/PlayCircleFilled";

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
const id = 1;

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
        {/* props.history.push(`${HOME + SINGLE_ITEM}/${props.itemId}`); */}
        <h1 style={{ marginTop: 40, marginBottom: 50 }}>
          Play List
          {/* <Button onClick={() => this.props.history.push(`${PLAYLIST + SINGLE}/${id}`)}>Play</Button> */}
        </h1>

        <List dense className={classes.root}>
          {songs.map((value, index) => {
            return (
              <ListItem key={index} button>
                <ListItemAvatar>
                  <Avatar alt="P" src={value.imageUrl} />
                </ListItemAvatar>
                <ListItemText id={index} primary={value.name} />
                <ListItemSecondaryAction>
                  <Button onClick={() => this.props.history.push(`${PLAYLIST + SINGLE}/${value.id}`)}>
                    <PlayArrow />
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(DisplayImage));
