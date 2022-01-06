import React, { Component } from "react";
import Common from "./Common";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import DoubleCounter from "./DoubleCounter";

export class App extends Component {
  render() {
    return (
      <>
        <Common
          render={(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        />

        <Common
          render={(count, incrementCount) => {
            return (
              <HoverCounter count={count} incrementCount={incrementCount} />
            );
          }}
        />

        <Common 
          render={(count, incrementCount) => (<DoubleCounter count={count} incrementCount={incrementCount} />)}
         />
      </>
    );
  }
}

export default App;
