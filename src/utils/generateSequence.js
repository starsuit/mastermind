const colours = ["red", "green", "pink", "blue", "orange", "purple", "yellow"];

const generate = (length = 4) => {
  return Array.from(
    { length },
    _ => colours[Math.ceil(Math.random() * length)]
  );
};

export { generate };
