import React from "react";
import "../styles.scss";

export default class Hour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: new Date().getSeconds(),
      min: new Date().getMinutes(),
      hour: new Date().getHours(),
    };
  }
  componentDidMount = () => {
    this.interval = setInterval(
      () =>
        this.setState({
          sec: new Date().getSeconds(),
          min: new Date().getMinutes(),
          hour: new Date().getHours(),
        }),
      1000
    );
  };
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };
  render() {
    return (
      <div
        id="hour"
        key="hour"
        className="hour"
        style={{ transform: "rotate(" + (this.state.hour*15) + "deg)" }}
      />
    );
  }
}
