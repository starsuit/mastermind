import { generate } from "./generateSequence";

describe("generateSequence helper", () => {
  test("Returns something", () => {
    expect(generate(4)).toBeTruthy();
  });
  test("Returns an array the same length as the argument number", () => {
    expect(Array.isArray(generate(4))).toBeTruthy();
    expect(generate(4).length).toEqual(4);
  });
});
