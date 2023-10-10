import Image from "next/image";
import React from "react";
import Bold from "../Bold";

export default function SectionSparkle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full gap-4">
      <div className="flex justify-between">
        <h2 className="text-center text-indigo-900 text-[40px] font-bold capitalize truncate mb-2">
          {title}
        </h2>

        <Image
          src="/images/illustrations/sparkle.svg"
          alt="Sparkle"
          width={40}
          height={40}
          className="selectDisable"
          draggable={false}
        />
      </div>
      <p className="text-justify text-black text-lg">{children}</p>
    </div>
  );
}
