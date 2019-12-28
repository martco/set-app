import React from "react";
import SetCard from "./SetCard";
import h2c from "./HTML2Canvas"
import c2i from "./Canvas2Image"

class App extends React.Component {
  componentDidMount() {
    window.h2c= h2c
    window.c2i= c2i
  }

  render() {
    return (
      <ul className="set-board spaced-cards fit-3">
        <SetCard
          shape={"squiggle"}
          number={1}
          color={"purple"}
          shading={"outlined"}
        />
      </ul>
    );
  }
}

export default App;
