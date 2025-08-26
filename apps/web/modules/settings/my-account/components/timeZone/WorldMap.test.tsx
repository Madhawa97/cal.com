import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import WorldMap from "./world-map";

describe("WorldMap", () => {
  it("renders an SVG element", () => {
    const { container } = render(<WorldMap width={800} height={400} />);
    expect(container.querySelector("svg")).toBeTruthy();
  });
});
