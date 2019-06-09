import React from "react";
import "./Panel.css";
import Response from "./Response";
import { checkGuess } from "../utils/checkGuess";

const Panel = props => {
  console.log(props.answer);
  const response = !props.answer || checkGuess(props.guess, props.answer);
  return (
    <div data-testid="panel" className="panel">
      <p>{props.answer ? `Guess ${props.label}` : "Answer"}</p>
      {props.guess.map((colour, i) => (
        <div key={colour + i} className={"peg " + colour} />
      ))}
      {!props.answer || (
        <Response response={response} setGameStatus={props.setGameStatus} />
      )}
    </div>
  );
};

export default Panel;
