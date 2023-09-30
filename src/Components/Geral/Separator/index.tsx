import React from "react";

export default function Separator({
  w = "100%",
  h = "1px",
}: {
  w?: string | number;
  h?: string | number;
}) {
  return (
    <div
      style={{
        width: w,
        height: h,
      }}
    />
  );
}
