const generate = colours => {
  return Array.from({ length: 4 }, _ => colours[Math.ceil(Math.random() * 4)]);
};

module.exports = generate;
