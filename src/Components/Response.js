import React from "react";
import "./Response.css";

const Response = props => {
  const whites = Array.from({ length: props.response.whites }, _ => "white");
  const reds = Array.from({ length: props.response.reds }, _ => "red");
  const none = Array.from(
    { length: 4 - (props.response.reds + props.response.whites) },
    _ => "black"
  );
  if (reds === 4) props.setGameStatus("won");
  const responseArray = [...whites, ...reds, ...none];
  return (
    <div data-testid="response" className="response">
      {responseArray.map((colour, i) => (
        <div key={colour + i} className={"response-peg " + colour} />
      ))}
    </div>
  );
};

export default Response;
