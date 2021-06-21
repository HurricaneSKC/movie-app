import * as React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("main heading renders the correct title", () => {
  const { getByTitle } = render(<App />);
  getByTitle("netflix roulette");
});

// test("main header is netflix roulette", () => {
//   render(<App></App>);
//   const mainHeaderTitle = document.querySelector("h1");
//   console.log(mainHeaderTitle);
//   expect(mainHeaderTitle).toBe("netflix roulette");
// });
