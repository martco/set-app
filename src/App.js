import React from "react";
import SetCard from "./SetCard";

function App() {
  return (
    <ul className="set-board spaced-cards fit-3 solved">
      <SetCard shape={"squiggle"} number={2} color={"red"} shading={"solid"} />
    </ul>
  );
}

export default App;
