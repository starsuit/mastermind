import React from "react";

const Guess = props => {
  return (
    <form data-testid="guess" className="guess" onSubmit={props.handler}>
      <label htmlFor="colour1">
        <select name="colour1" id="colour1">
          {props.colours.map(colour => (
            <option key={colour} value={colour}>
              {colour}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="colour2">
        <select name="colour2" id="colour2">
          {props.colours.map(colour => (
            <option key={colour} value={colour}>
              {colour}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="colour3">
        <select name="colour3" id="colour3">
          {props.colours.map(colour => (
            <option key={colour} value={colour}>
              {colour}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="colour4">
        <select name="colour4" id="colour4">
          {props.colours.map(colour => (
            <option key={colour} value={colour}>
              {colour}
            </option>
          ))}
        </select>
      </label>
      <button>Guess!</button>
    </form>
  );
};

export default Guess;
