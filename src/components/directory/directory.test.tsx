import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import sections from "../directory/directory.data";
import { Directory } from "./directory.component";

test("directory", () => {
  const { getByRole } = render(<Directory />);
  const div = getByRole("directory-menu");
  expect(div.children.length).toBe(sections.length);
});
