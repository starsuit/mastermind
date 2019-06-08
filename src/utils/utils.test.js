import { generate } from "./generateSequence";
import { checkGuess } from "./checkGuess";

const colours = ["red", "green", "pink", "blue", "orange", "purple", "yellow"];

const testAnswer = ["orange", "blue", "pink", "yellow"];
const testGuess = ["red", "green", "pink", "blue"];
const testResponse = {
  whites: 1,
  reds: 1
};

describe("generateSequence helper", () => {
  const generatedArray = generate(4);
  test("Returns something", () => {
    expect(generatedArray).toBeTruthy();
  });
  test("Returns an array the same length as the argument number", () => {
    expect(Array.isArray(generatedArray)).toBeTruthy();
    expect(generatedArray).toHaveLength(4);
  });
});

describe("checkGuess helper", () => {
  const generatedCheck = checkGuess(testGuess, testAnswer);
  test("Returns something", () => {
    expect(generatedCheck).toBeTruthy();
  });
  test("Returns an object", () => {
    expect(typeof generatedCheck).toEqual("object");
  });
  test("Object has keys 'reds' and 'whites'", () => {
    expect(Object.keys(generatedCheck)).toContain("whites");
    expect(Object.keys(generatedCheck)).toContain("reds");
  });
  test("Returns the correct number of red/whites", () => {
    expect(generatedCheck).toEqual(testResponse);
  });
});
