import React from "react";
import "./Panel.css";
import Response from "./Response";
import { checkGuess } from "../utils/checkGuess";

const Panel = props => {
  const response = checkGuess(props.guess, props.answer);
  return (
    <div data-testid="panel" className="panel">
      {props.guess.map((colour, i) => (
        <div key={colour + i} className={"peg " + colour} />
      ))}
      <Response response={response} />
    </div>
  );
};

export default Panel;
