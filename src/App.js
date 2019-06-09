import React from "react";
import "./App.css";

// import components
import Panel from "./Components/Panel";

// import util functions
import { generate } from "./utils/generateSequence";

function App() {
  const goes = Array.from({ length: 10 }, _ =>
    Array.from({ length: 4 }, _ => "white")
  );
  const [pegArray, setPegArray] = React.useState(goes);
  const [currentGuess, setCurrentGuess] = React.useState(0);

  const answer = generate(4);

  const handleGuess = event => {
    event.preventDefault();
    setPegArray(
      pegArray.map((item, i) => (i === currentGuess ? generate(4) : item))
    );
    setCurrentGuess(currentGuess + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mastermind</h1>
      </header>
      <main>
        <Panel
          key="answer"
          guess={currentGuess > 9 ? answer : ["grey", "grey", "grey", "grey"]}
        />
        {pegArray.map((guess, i) => (
          <Panel key={guess[0] + i} guess={guess} answer={answer} />
        ))}
      </main>
    </div>
  );
}

export default App;
