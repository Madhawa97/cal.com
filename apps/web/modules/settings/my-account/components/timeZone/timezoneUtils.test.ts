import { describe, it, expect } from "vitest";

import { getOffsetHoursFromIANA } from "./timeZoneUtils";

describe("getOffsetHoursFromIANA", () => {
  it("returns a number for a valid timezone", () => {
    const offset = getOffsetHoursFromIANA("UTC");
    expect(typeof offset).toBe("number");
  });

  it("returns correct offset for UTC", () => {
    const offset = getOffsetHoursFromIANA("UTC");
    expect(Math.abs(offset)).toBe(0);
  });

  it("returns consistent result for same timezone", () => {
    const a = getOffsetHoursFromIANA("Asia/Colombo");
    const b = getOffsetHoursFromIANA("Asia/Colombo");
    expect(a).toBe(b);
  });
});
