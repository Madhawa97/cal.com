import React from "react";

type Props = {
  x: number;
  width: number;
  height: number;
};

export default function TimezoneHighlight({ x, width, height }: Props) {
  return (
    <>
      <rect x={x} y={0} width={width} height={height} fill="#3b82f6" opacity="0.35" />
      <rect x={x} y={0} width={width} height={height} fill="none" stroke="#60a5fa" strokeWidth="2" />
    </>
  );
}
