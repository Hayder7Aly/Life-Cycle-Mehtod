import React from "react";

const UpdateComponent = (OriginalComponent, incrementNumber, mult) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((preVal) => {
        return {
          count: preVal.count + incrementNumber * mult,
        };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default UpdateComponent;
