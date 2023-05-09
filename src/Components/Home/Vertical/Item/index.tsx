import React from "react";

export default function VerticalItem({ src }: { src: string }) {
  return (
    <div>
      <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
    </div>
  );
}
