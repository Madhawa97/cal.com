import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import TimezoneHighlight from "./TimezoneHighlight";

describe("TimezoneHighlight", () => {
  it("renders two rect elements", () => {
    const { container } = render(<TimezoneHighlight x={10} width={50} height={100} />);
    expect(container.querySelectorAll("rect")).toHaveLength(2);
  });

  it("applies correct x and width values", () => {
    const { container } = render(<TimezoneHighlight x={20} width={60} height={200} />);
    const rect = container.querySelector("rect");
    expect(rect?.getAttribute("x")).toBe("20");
    expect(rect?.getAttribute("width")).toBe("60");
  });
});
