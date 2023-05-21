import React from "react";
import { TextCardProps } from "./types";

export default function TextCard({
  title,
  text,
  pl = false,
  align = "left",
}: TextCardProps) {
  const marginLeft = pl ? "lg:pl-6" : "";
  const justify = align === "left" ? "justify-start" : "justify-end";

  return (
    <div
      className={`flex flex-1 flex-col gap-y-4 p-2 ${marginLeft} text-${align} ${justify}`}
    >
      <h1 className="text-5xl pr-12 font-semibold text-purple-900">{title}</h1>
      <hr
        className="w-16 border-purple-900"
        style={{
          borderWidth: 3,
        }}
      />
      <p className="text-lg font-light leading-9">{text}</p>
    </div>
  );
}
