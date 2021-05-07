import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Visualizer from "./Components/Visualizer";

function App() {
  const [timeoutArr, setTimeOutArr] = useState([]);
  const [speed, setSpeed] = useState(0);
  const [size, setSize] = useState(50);
  return (
    <div className="App">
      <NavBar
        timeoutArr={timeoutArr}
        setTimeOutArr={setTimeOutArr}
        speed={speed}
        setSpeed={setSpeed}
        size={size}
        setSize={setSize}
      />
      <Visualizer setTimeOutArr={setTimeOutArr} speed={speed} />
    </div>
  );
}

export default App;
