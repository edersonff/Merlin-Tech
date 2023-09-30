import React from "react";

export default function ButtonC({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`font-bold px-[39px] py-2.5 lg:min-w-[388px] md:min-w-[388px] rounded-[10px] ${className}`}
    >
      {children}
    </button>
  );
}
