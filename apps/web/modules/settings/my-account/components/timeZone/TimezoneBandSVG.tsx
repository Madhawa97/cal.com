import React, { useMemo } from "react";

import TimezoneHighlight from "./TimezoneHighlight";
import { getOffsetHoursFromIANA } from "./timeZoneUtils";
import WorldMap from "./world-map";

type Props = {
  timeZone?: string;
  utcOffsetHours?: number;
  className?: string;
};

export default function TimezoneBandSVG({ timeZone, utcOffsetHours, className }: Props) {
  const offset = useMemo(() => {
    if (typeof utcOffsetHours === "number") return utcOffsetHours;
    if (timeZone) return getOffsetHoursFromIANA(timeZone);
    return 0;
  }, [timeZone, utcOffsetHours]);

  const width = 1200;
  const height = 600;
  const colW = width / 24;
  const x = (offset + 12) * colW;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      style={{ width: "100%", height: "auto", display: "block" }}>
      <WorldMap width={width} height={height} />
      <TimezoneHighlight x={x} width={colW} height={height} />
    </svg>
  );
}
