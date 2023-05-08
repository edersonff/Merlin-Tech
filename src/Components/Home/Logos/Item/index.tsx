import React from "react";

export default function LogoItem({ src }: { src: string }) {
  return (
    <img
      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 select-none pointer-events-none"
      onDragStart={(e) => e.preventDefault()}
      src={src}
      alt="Transistor"
      width={158}
      height={48}
    />
  );
}
