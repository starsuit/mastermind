import React from "react";
import "./App.css";

// import components
import Panel from "./Components/Panel";
import Guess from "./Components/Guess";

// import util functions
import { generate } from "./utils/generateSequence";

const colours = ["red", "green", "pink", "blue", "orange", "purple", "yellow"];

function App() {
  const goes = Array.from({ length: 10 }, _ =>
    Array.from({ length: 4 }, _ => "white")
  );
  const [pegArray, setPegArray] = React.useState(goes);
  const [guesses, setGuesses] = React.useState(10);
  const [answer] = React.useState(generate(colours));

  const handleGuess = event => {
    event.preventDefault();
    const guessArray = [
      event.target.colour1.value,
      event.target.colour2.value,
      event.target.colour3.value,
      event.target.colour4.value
    ];
    setPegArray(
      pegArray.map((item, i) => (i + 1 === guesses ? guessArray : item))
    );
    setGuesses(guesses - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mastermind</h1>
      </header>
      <main>
        <Panel
          key="answer"
          // guess={answer}
          guess={guesses === 0 ? answer : ["grey", "grey", "grey", "grey"]}
        />
        {pegArray.map((guess, i) => (
          <Panel key={guess[0] + i} guess={guess} answer={answer} />
        ))}
        <Guess colours={colours} handler={handleGuess} guesses={guesses} />
      </main>
    </div>
  );
}

export default App;
