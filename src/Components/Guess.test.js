import React from "react";
import { render, cleanup } from "@testing-library/react";
import Guess from "./Guess";

const colours = ["red", "green", "pink", "blue", "orange", "purple", "yellow"];

afterEach(cleanup);

test("Guess component", () => {
  const { getByTestId } = render(<Guess colours={colours} />);
  getByTestId("guess");
});
