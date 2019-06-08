const checkGuess = (guess, answer) => {
  return guess.reduce(
    (accumulator, currentValue, currentIndex) => {
      if (currentValue === answer[currentIndex]) accumulator.reds += 1;
      else if (answer.includes(currentValue)) accumulator.whites += 1;
      return accumulator;
    },
    { whites: 0, reds: 0 }
  );
};

export { checkGuess };
