import React from "react";
import { TextCardProps } from "./types";

export default function TextCard({
  title,
  text,
  pl = false,
  align = "left",
}: TextCardProps) {
  const marginLeft = pl ? "lg:pl-8" : "";
  const items = align === "left" ? "items-start" : "items-end";
  const alignText = align === "left" ? "text-left" : "text-right";

  return (
    <div
      className={`flex flex-1 flex-col gap-y-4 p-2 ${marginLeft} ${alignText} ${items}`}
    >
      <h2 className={`lg:text-5xl text-4xl lg:w-3/4 font-bold text-purple-900`}>
        {title}
      </h2>
      <hr
        className="w-16 border-purple-900"
        style={{
          borderWidth: 3,
        }}
      />
      <p className="md:text-lg lg:text-lg font-light leading-8">{text}</p>
    </div>
  );
}
