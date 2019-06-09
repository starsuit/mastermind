import React from "react";
import { render, cleanup } from "@testing-library/react";
import Response from "./Response";

const testResponse = { reds: 1, whites: 1 };

afterEach(cleanup);

test("Response component", () => {
  const { getByTestId } = render(<Response response={testResponse} />);
  getByTestId("response");
});
