const checkGuess = (guess, answer) => {
  return guess.reduce(
    (accumulator, currentValue, currentIndex) => {
      if (currentValue === answer[currentIndex]) accumulator.whites += 1;
      else if (answer.includes(currentValue)) accumulator.reds += 1;
      return accumulator;
    },
    { reds: 0, whites: 0 }
  );
};

export { checkGuess };
