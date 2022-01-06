import React, { Component } from "react";

class Common extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((preVal) => {
      return {
        count: preVal.count + 1,
      };
    });
  };

  render() {
    return <>{this.props.render(this.state.count, this.incrementCount)}</>;
  }
}

export default Common;
