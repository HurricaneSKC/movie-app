import * as React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("main heading renders the correct title", () => {
  const { getByTitle } = render(<App />);
  getByTitle("netflix roulette");
});
