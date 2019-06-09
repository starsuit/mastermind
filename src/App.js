import React from "react";
import "./App.css";

// import components
import Panel from "./Components/Panel";

function App() {
  const colours = [
    "red",
    "green",
    "pink",
    "blue",
    "orange",
    "purple",
    "yellow"
  ];
  const answer = ["orange", "blue", "pink", "yellow"];
  const guess = ["red", "green", "pink", "blue"];
  const goes = Array.from({ length: 5 }, (_, i) => i);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mastermind</h1>
      </header>
      <main>
        {goes.map(item => (
          <Panel key={item} guess={guess} answer={answer} />
        ))}
      </main>
    </div>
  );
}

export default App;
