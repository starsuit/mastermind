import React from "react";
import { render, cleanup } from "@testing-library/react";
import Panel from "./Panel";

const testColours = ["orange", "blue", "pink", "yellow"];

afterEach(cleanup);

test("Panel component", () => {
  const { getByTestId } = render(<Panel colours={testColours} />);
  getByTestId("panel");
});
