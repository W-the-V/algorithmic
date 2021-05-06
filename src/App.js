import React, { useState } from "react";
import NavBar from "./Components/NavBar";

function App() {
  //initialize variables to thread to child components
  const [dataArray, setDataArray] = useState(new Array());
  const [sortMethod, setSortMethod] = useState();

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
