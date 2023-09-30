import Image from "next/image";
import React from "react";
import Bold from "../Bold";

export default function SectionSparkle() {
  return (
    <div className="w-full gap-4">
      <div className="flex justify-between">
        <h2 className="text-center text-indigo-900 text-[40px] font-bold capitalize">
          Who we are?
        </h2>

        <Image
          src="/images/illustrations/sparkle.svg"
          alt="Sparkle"
          width={40}
          height={40}
        />
      </div>
      <p className="text-justify text-black text-lg">
        Merlin was founded by a tech enthusiast who noticed the growing
        complexity of technology, leaving many struggling to keep up. Our
        mission is to <Bold>simplify technology</Bold>, making it accessible and
        intuitive for all. We envision a world where everyone can easily harness
        the power of technology. At Merlin, we&apos;re dedicated to making this
        vision a reality.
      </p>
    </div>
  );
}
