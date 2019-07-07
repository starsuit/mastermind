import React from "react";
import "./App.css";

// import components
import Panel from "./Components/Panel";
import Guess from "./Components/Guess";
import Answer from "./Components/Answer";

const colours = ["red", "green", "pink", "blue", "orange", "purple", "yellow"];

function App() {
  const goes = Array.from({ length: 10 }, _ =>
    Array.from({ length: 4 }, _ => "white")
  );
  const [pegArray, setPegArray] = React.useState(goes);
  const [guesses, setGuesses] = React.useState(10);
  const [gameStatus, setGameStatus] = React.useState("playing");
  const [gameId, setGameId] = React.useState(null);

  const generate = colours => {
    return fetch(`.netlify/functions/generateSequence?colours=${colours}`)
      .then(result => result.json())
      .catch(err => console.error(err));
  };
  React.useEffect(() => {
    generate(colours).then(setGameId);
  }, []);

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
    if (guesses - 1 === 0) setGameStatus("lost");
    setGuesses(guesses - 1);
  };

  const handleReset = () => {
    setGameStatus("playing");
    setPegArray(goes);
    generate(colours).then(setGameId);
    setGuesses(10);
  };

  if (!gameId) {
    return (
      <div className="App">
        <header className="mastermind-header">
          <h1>Mastermind</h1>
          <a href="https://github.com/starsuit">By Starsuit</a>
          <a className="play" href="#game">
            Loading...
          </a>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="mastermind-header">
        <h1>Mastermind</h1>
        <a href="https://github.com/starsuit">By Starsuit</a>
        <a className="play" href="#game">
          Play
        </a>
      </header>
      <main id="game" className="game">
        <p>
          {gameStatus === "won"
            ? `Congratulations, you won in ${10 - guesses} moves!`
            : gameStatus === "lost"
            ? "Sorry, you lost. Here's the answer:"
            : "Try to guess the sequence of four colours in less than 10 moves!"}
        </p>
        {gameStatus === "playing" && (
          <p>
            The computer will return white for the number of colours in the
            right spot, red for correct colours in the wrong spot, and black for
            any wrong colours.
          </p>
        )}

        {gameStatus === "playing" || <Answer key="answer" gameId={gameId} />}
        {pegArray.map((guess, i) => (
          <Panel
            label={10 - i}
            key={guess[0] + i}
            guess={guess}
            gameId={gameId}
            setGameStatus={setGameStatus}
          />
        ))}
        {gameStatus !== "playing" ? (
          <button onClick={handleReset}>Play again</button>
        ) : (
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
