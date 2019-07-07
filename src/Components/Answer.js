import React from "react";
import "./Panel.css";

const Answer = props => {
  const [answer, setAnswer] = React.useState(null);
  const guessCheck = gameId => {
    return fetch(
      `.netlify/functions/checkGuess?guess=${"game over"}&gameId=${gameId}`
    )
      .then(result => result.json())
      .catch(err => console.error(err));
  };
  React.useEffect(() => {
    guessCheck(props.gameId).then(setAnswer);
  }, [props.gameId]);
  if (!answer) return <p>Answer loading...</p>;
  return (
    <div data-testid="answer" className="panel">
      <p>Answer</p>
      {answer.map((colour, i) => (
        <div key={colour + i} className={"peg " + colour} />
      ))}
    </div>
  );
};

export default Answer;
