import { Component } from "react";
import "../styles.scss";

export default class Seconds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: new Date().getSeconds(),
    };
  }
  componentDidMount = () => {
    this.interval = setInterval(
      () =>
        this.setState({
          sec: new Date().getSeconds(),
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
        id="sec"
        key="sec"
        className="sec"
        style={{ transform: "rotate(" + (90+this.state.sec*6) + "deg)" }}
      />
    );
  }
}
