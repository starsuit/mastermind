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
  const [answer, setAnswer] = React.useState(generate(colours));
  const [gameStatus, setGameStatus] = React.useState("playing");

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
    console.log(guesses);
    if (guesses - 1 === 0) setGameStatus("lost");
    setGuesses(guesses - 1);
  };

  const handleReset = () => {
    setGameStatus("playing");
    setPegArray(goes);
    setAnswer(generate(colours));
    setGuesses(10);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mastermind</h1>
      </header>
      <main>
        <p>
          {gameStatus === "won"
            ? `Congratulations, you won in ${10 - guesses} moves!`
            : gameStatus === "lost"
            ? "Sorry, you lost. Here's the answer:"
            : "Answer greyed out - no peeking!"}
        </p>
        {gameStatus === "playing" || (
          <button onClick={handleReset}>Play again</button>
        )}
        <Panel
          key="answer"
          guess={
            gameStatus === "won" || gameStatus === "lost"
              ? answer
              : ["grey", "grey", "grey", "grey"]
          }
        />
        {pegArray.map((guess, i) => (
          <Panel
            label={10 - i}
            key={guess[0] + i}
            guess={guess}
            answer={answer}
            setGameStatus={setGameStatus}
          />
        ))}
        {gameStatus !== "playing" || (
          <Guess
            colours={colours}
            handler={handleGuess}
            guesses={guesses}
            gameStatus={gameStatus}
          />
        )}
      </main>
    </div>
  );
}

export default App;
