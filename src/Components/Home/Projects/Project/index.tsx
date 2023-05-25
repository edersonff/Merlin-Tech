import React from "react";
import { HomeProjectProps } from "./types";

export default function Project({ src }: HomeProjectProps) {
  return (
    <div
      className="w-64 h-64 rounded-4xl bg-purple-900 bg-center bg-cover"
      style={{ backgroundImage: `url(${src})` }}
      onDragStart={(e) => e.preventDefault()}
    />
  );
}
