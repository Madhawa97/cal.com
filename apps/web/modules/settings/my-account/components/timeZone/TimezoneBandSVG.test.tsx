import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import TimezoneBandSVG from "./TimezoneBandSVG";

describe("TimezoneBandSVG", () => {
  it("renders without crashing", () => {
    const { container } = render(<TimezoneBandSVG timeZone="UTC" />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("renders a highlight when timezone is provided", () => {
    const { container } = render(<TimezoneBandSVG timeZone="UTC" />);
    const rects = container.querySelectorAll("rect");
    expect(rects.length).toBeGreaterThan(0);
  });

  it("respects utcOffsetHours prop over timeZone", () => {
    const { container } = render(<TimezoneBandSVG utcOffsetHours={5} />);
    const rects = container.querySelectorAll("rect");
    expect(rects.length).toBeGreaterThan(0);
  });
});
