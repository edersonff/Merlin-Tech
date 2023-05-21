import React from "react";
import { TextCardProps } from "./types";

export default function TextCard({
  title,
  text,
  pl = false,
  align = "left",
}: TextCardProps) {
  const marginLeft = pl ? "lg:pl-6" : "";
  const items = align === "left" ? "items-start" : "items-end";

  return (
    <div
      className={`flex flex-1 flex-col gap-y-4 p-2 ${marginLeft} text-${align} ${items}`}
    >
      <h3 className={`text-5xl lg:w-3/4 font-semibold text-purple-900`}>
        {title}
      </h3>
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
