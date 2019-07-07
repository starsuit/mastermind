import React from "react";
import "./Panel.css";
import Response from "./Response";

const Panel = props => {
  const [response, setResponse] = React.useState({ reds: 0, whites: 0 });
  const guessCheck = (guess, gameId) => {
    return fetch(
      `.netlify/functions/checkGuess?guess=${guess}&gameId=${gameId}`
    )
      .then(result => result.json())
      .catch(err => console.error(err));
  };
  React.useEffect(() => {
    guessCheck(props.guess, props.gameId).then(setResponse);
  }, [props.gameId, props.guess]);
  return (
    <div data-testid="panel" className="panel">
      <p>{`Guess ${props.label}`}</p>
      {props.guess.map((colour, i) => (
        <div key={colour + i} className={"peg " + colour} />
      ))}
      <Response response={response} setGameStatus={props.setGameStatus} />
    </div>
  );
};

export default Panel;
