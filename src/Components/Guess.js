import React from "react";

const Guess = props => {
  return (
    <form data-testid="guess" className="guess" onSubmit={props.handler}>
      <p>Choose your colours below to guess:</p>

      <select aria-label="colour 1" name="colour1" id="colour1">
        {props.colours.map(colour => (
          <option key={colour} value={colour}>
            {colour}
          </option>
        ))}
      </select>
      <select aria-label="colour 2" name="colour2" id="colour2">
        {props.colours.map(colour => (
          <option key={colour} value={colour}>
            {colour}
          </option>
        ))}
      </select>
      <select aria-label="colour 3" name="colour3" id="colour3">
        {props.colours.map(colour => (
          <option key={colour} value={colour}>
            {colour}
          </option>
        ))}
      </select>
      <select aria-label="colour 4" name="colour4" id="colour4">
        {props.colours.map(colour => (
          <option key={colour} value={colour}>
            {colour}
          </option>
        ))}
      </select>
      <button disabled={props.guesses === 0}>Guess!</button>
      <p>
        {props.guesses} {props.guesses === 1 ? "guess" : "guesses"} remaining
      </p>
    </form>
  );
};

export default Guess;
