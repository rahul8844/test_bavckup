import React from "react";
import Dial from "./components/dial";
import Hours from "./components/hours";
import Minutes from "./components/minutes";
import Seconds from "./components/seconds";
import "./styles.scss";

export default class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount = () => {
    this.interval = setInterval(
      () =>
        this.setState({
          time: new Date().toLocaleTimeString(),
        }),
      1000
    );
  };
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };
  render() {
    return (
      <React.Fragment>
        <Dial />
        <Hours />
        <Minutes />
        <Seconds />
        <div id="center" key="center" className="center"></div>
        <label className="label">{this.state.time}</label>
      </React.Fragment>
    );
  }
}
