import React from "react";
import "./Panel.css";
import Response from "./Response";

const Panel = props => {
  const response = { reds: 1, whites: 1 };
  return (
    <div data-testid="panel" className="panel">
      {props.colours.map((colour, i) => (
        <div key={colour + i} className={"peg " + colour} />
      ))}
      <Response response={response} />
    </div>
  );
};

export default Panel;
