import { Avatar } from "material-ui";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import GameOverDialog from "./GameOverDialog";
import { Button } from "@material-ui/core";
const imagesData = [
  {
    id: 1,
    path: "/images/01.jpg",
    flag: 1,
  },
  {
    id: 2,
    path: "/images/123.jpg",
    flag: 0,
  },
  {
    id: 3,
    path: "/images/03.jpg",
    flag: 1,
  },
  {
    id: 4,
    path: "/images/151.jpg",
    flag: 1,
  },
  {
    id: 5,
    path: "/images/05.jpg",
    flag: 1,
  },
  {
    id: 6,
    path: "/images/06.jpg",
    flag: 1,
  },

  {
    id: 7,
    path: "/images/125.jpg",
    flag: 0,
  },
  {
    id: 8,
    path: "/images/08.jpg",
    flag: 1,
  },
  {
    id: 9,
    path: "/images/09.jpg",
    flag: 1,
  },
  {
    id: 10,
    path: "/images/10.jpg",
    flag: 1,
  },
  {
    id: 11,
    path: "/images/148.jpg",
    flag: 0,
  },
];

const styles = (theme) => ({
  large: {
    width: 500,
    height: 500,
    borderRadius: 5,
  },
});
var timeCounter = 0;
var val = 0;
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
  componentDidMount() {
    if (this.state.gameOver === false) {
      setTimeout(() => {
        this.setState({ isLoading: false }, () => {
          this.startTimer(parseInt(1) * 60);
        });
      }, 2000);
    }
  }

  startTimer = (duration) => {
    let timer = duration,
      minutes,
      seconds;
    setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      if (--timer < 0) {
        timer = duration;
      }
      if (minutes === 0 && seconds === 0) {
        this.props.history.push("/testsummary");
      }
      let timeLeft = { minutes, seconds };
      //   console.log("time left", timeLeft);
      if (imagesData.length < timeCounter) {
        this.setState({ openDialog: true, gameOver: true });
      }
      this.setState(
        {
          timeLeft,
        },
        () => {
          timeCounter = timeCounter + 1;
          //   console.log("time left", timeCounter);
        }
      );
    }, 2000);
  };
  handleClose = () => {
    this.setState({ openDialog: false }, () => {
      clearInterval(null);
      this.props.history.push("/");
    });
  };
  handleFly(value) {
    console.log(value);
    if (value.flag === 1) {
      val = val + 1;
      this.setState({ score: val });
    }
  }

  handleNotFly(value) {
    console.log(value);
    if (value.flag === 0) {
      val = val + 1;
      this.setState({ score: val });
    }
  }
  render() {
    const { classes } = this.props;
    // console.log(this.props.width, this.state.score);
    return (
      <div
        style={{
          textAlign: "center",
          width: this.props.width,
          //   border: "1px solid green",
        }}
      >
        {/* <img src="final.png" style={{ width: "100%", height: "100%" }} /> */}
        <h1 style={{ marginTop: 40, marginBottom: 50 }}>Display image here</h1>
        {timeCounter === 0 ? <h1>Loading...</h1> : null}
        {imagesData.map((data, index) => {
          return (
            <div>
              <Avatar
                key={index}
                alt="R"
                src={data.path}
                style={{ width: 250, height: 250, display: data.id === timeCounter ? "inline-flex" : "none" }}
              />

              <div>
                {timeCounter === 0 ? null : data.id === timeCounter ? (
                  <div
                    style={{
                      margin: "auto",
                      marginTop: 50,
                      width: 300,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    key={index}
                  >
                    {" "}
                    <Button variant="contained" color="primary" onClick={() => this.handleFly(data)}>
                      Fly
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => this.handleNotFly(data)}>
                      No Fly
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
        {this.state.openDialog ? (
          <GameOverDialog openDialog={this.state.openDialog} handleClose={this.handleClose} score={this.state.score} />
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(DisplayImage);
