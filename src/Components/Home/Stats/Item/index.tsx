import React, { useEffect, useRef, useState } from "react";
import { StatsItemProps } from "./types";
import { animate, useInView } from "framer-motion";

export default function StatsItem({
  stat: { name, value, prefix, suffix },
  i,
}: StatsItemProps) {
  const [val, setVal] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && val === 0) {
      animate(0, value, {
        delay: 0.3 * i,
        duration: 1,
        ease: "easeInOut",
        onUpdate: (latest) => {
          setVal(Math.round(latest));
        },
      });
    }
  }, [isInView, value, val]);

  return (
    <div ref={ref} className="mx-auto flex max-w-xs flex-col gap-y-4">
      <dt className="text-base leading-7 text-gray-600">{name}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        <span className="font-medium text-3xl mr-3 text-gray-500">
          {prefix}
        </span>
        {val}
        <span className="text-2xl font-medium ml-3 text-gray-500">
          {suffix}
        </span>
      </dd>
    </div>
  );
}
