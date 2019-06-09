import React from "react";
import "./Response.css";

const Response = ({ response, setGameStatus }) => {
  const whites = Array.from({ length: response.whites }, _ => "white");
  const reds = Array.from({ length: response.reds }, _ => "red");
  const none = Array.from(
    { length: 4 - (response.reds + response.whites) },
    _ => "black"
  );
  React.useEffect(() => {
    if (response.whites === 4) setGameStatus("won");
  }, [response.whites, setGameStatus]);

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
