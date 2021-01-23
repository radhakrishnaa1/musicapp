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
  //   {
  //     id: 12,
  //     path: "/images/12.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 13,
  //     path: "/images/13.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 14,
  //     path: "/images/14.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 15,
  //     path: "/images/15.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 16,
  //     path: "/images/16.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 17,
  //     path: "/images/17.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 18,
  //     path: "/images/18.jpg",
  //     flag: 1,
  //   },

  //   {
  //     id: 19,
  //     path: "/images/19.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 20,
  //     path: "/images/20.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 21,
  //     path: "/images/21.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 22,
  //     path: "/images/22.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 23,
  //     path: "/images/23.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 24,
  //     path: "/images/24.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 25,
  //     path: "/images/25.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 26,
  //     path: "/images/26.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 27,
  //     path: "/images/27.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 28,
  //     path: "/images/28.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 29,
  //     path: "/images/29.jpg",
  //     flag: 1,
  //   },
  //   {
  //     id: 30,
  //     path: "/images/30.jpg",
  //     flag: 1,
  //   },

  //   {
  //     id: 31,
  //     path: "/images/31.jpg",
  //   },
  //   {
  //     id: 32,
  //     path: "/images/31.jpg",
  //   },
  //   {
  //     id: 33,
  //     path: "/images/33.jpg",
  //   },
  //   {
  //     id: 34,
  //     path: "/images/34.jpg",
  //   },
  //   {
  //     id: 35,
  //     path: "/images/35.jpg",
  //   },
  //   {
  //     id: 36,
  //     path: "/images/36.jpg",
  //   },

  //   {
  //     id: 37,
  //     path: "/images/37.jpg",
  //   },
  //   {
  //     id: 38,
  //     path: "/images/38.jpg",
  //   },
  //   {
  //     id: 39,
  //     path: "/images/39.jpg",
  //   },
  //   {
  //     id: 40,
  //     path: "/images/40.jpg",
  //   },
  //   {
  //     id: 41,
  //     path: "/images/41.jpg",
  //   },
  //   {
  //     id: 42,
  //     path: "/images/42.jpg",
  //   },
  //   {
  //     id: 43,
  //     path: "/images/43.jpg",
  //   },
  //   {
  //     id: 44,
  //     path: "/images/44.jpg",
  //   },
  //   {
  //     id: 45,
  //     path: "/images/45.jpg",
  //   },
  //   {
  //     id: 46,
  //     path: "/images/46.jpg",
  //   },
  //   {
  //     id: 47,
  //     path: "/images/47.jpg",
  //   },
  //   {
  //     id: 48,
  //     path: "/images/48.jpg",
  //   },

  //   {
  //     id: 49,
  //     path: "/images/49.jpg",
  //   },
  //   {
  //     id: 50,
  //     path: "/images/50.jpg",
  //   },
  //   {
  //     id: 51,
  //     path: "/images/51.jpg",
  //   },
  //   {
  //     id: 52,
  //     path: "/images/52.jpg",
  //   },
  //   {
  //     id: 53,
  //     path: "/images/53.jpg",
  //   },
  //   {
  //     id: 54,
  //     path: "/images/54.jpg",
  //   },
  //   {
  //     id: 55,
  //     path: "/images/55.jpg",
  //   },
  //   {
  //     id: 56,
  //     path: "/images/56.jpg",
  //   },
  //   {
  //     id: 57,
  //     path: "/images/57.jpg",
  //   },
  //   {
  //     id: 58,
  //     path: "/images/58.jpg",
  //   },
  //   {
  //     id: 59,
  //     path: "/images/59.jpg",
  //   },
  //   {
  //     id: 60,
  //     path: "/images/60.jpg",
  //   },
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
