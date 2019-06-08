import React from "react";
import "./Panel.css";

const Panel = props => {
  return (
    <div data-testid="panel" className="panel">
      {props.colours.map((colour, i) => (
        <div key={colour + i} className={"peg " + colour} />
      ))}
    </div>
  );
};

export default Panel;
