import React, { useMemo } from "react";

export default function SearchItem({
  word,
  isCurrent,
  isLast,
}: {
  word: string;
  isCurrent: boolean;
  isLast: boolean;
}) {
  const translateY = useMemo(() => {
    if (isCurrent) {
      return "translateY(0)";
    }
    if (isLast) {
      return "translateY(100%)";
    }
    return "translateY(-100%)";
  }, [isCurrent, isLast]);

  const transition = useMemo(() => {
    if (isCurrent || isLast) {
      return "all 1s";
    }
    return "0";
  }, [isCurrent, isLast]);

  const opacity = useMemo(() => {
    if (isCurrent) {
      return "opacity-100";
    }
    return "opacity-0";
  }, [isCurrent]);

  return (
    <span
      className={
        "text-xl lg:text-3xl font-bold whitespace-nowrap duration-500 absolute top-0 left-0 " +
        opacity
      }
      style={{
        transform: translateY,
        transition: transition,
      }}
    >
      {word}
    </span>
  );
}
