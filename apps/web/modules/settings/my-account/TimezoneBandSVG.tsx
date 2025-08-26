import React, { useMemo } from "react";

import WorldMap from "./world-map";

type Props = {
  timeZone?: string;
  utcOffsetHours?: number;
  className?: string;
};

function getOffsetHoursFromIANA(tz: string): number {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const parts = fmt.formatToParts(now).reduce<Record<string, string>>((acc, p) => {
    if (p.type !== "literal") acc[p.type] = p.value;
    return acc;
  }, {});
  const local = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute)
  );
  const utc = now.getTime();
  const diffMs = local - utc;
  return Math.round((diffMs / (1000 * 60 * 60)) * 4) / 4;
}

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
      {/* World map as background */}
      <WorldMap width={width} height={height} />

      {/* Highlight timezone band */}
      <rect x={x} y={0} width={colW} height={height} fill="#3b82f6" opacity="0.35" />
      <rect x={x} y={0} width={colW} height={height} fill="none" stroke="#60a5fa" strokeWidth="2" />
    </svg>
  );
}
