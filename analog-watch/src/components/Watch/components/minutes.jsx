import { Component } from "react";
import "../styles.scss";

export default class Minutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: new Date().getSeconds(),
      min: new Date().getMinutes()
    };
  }
  componentDidMount = () => {
    this.interval = setInterval(
      () =>
        this.setState({
          sec: new Date().getSeconds(),
          min: new Date().getMinutes()
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
        id="min"
        key="min"
        className="min"
        style={{ transform: "rotate(" + (90+this.state.min*6) + "deg)" }}
      />
    );
  }
}
