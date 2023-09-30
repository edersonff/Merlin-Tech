import React from "react";

export default function ButtonHard({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`hard-shadow font-bold px-[39px] py-2.5 lg:min-w-[388px] md:min-w-[388px] rounded-[7px] ${className}`}
    >
      {children}
    </button>
  );
}
