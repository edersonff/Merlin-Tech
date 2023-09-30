import SectionSparkle from "@/Components/Geral/Section/Sparkle";
import Image from "next/image";
import React from "react";

export default function OurCompany() {
  return (
    <div className="center content-px relative pb-[25px]">
      <div className="content relative z-10 flex flex-col gap-y-9">
        <SectionSparkle />
        <div className="w-full flex items-end gap-12 lg:flex-row md:flex-row flex-col">
          <SectionSparkle />
          <div className="relative lg:w-auto w-full flex justify-center">
            <Image
              src="/images/people/ederson.png"
              alt="Ederson"
              width={200}
              height={500}
              className="mt-[2.4%]"
            />
            <p className="text-center text-black absolute bottom-0 transform translate-y-1/2 w-full lg:text-lg capitalize">
              <b>Ceo</b>: Ederson F. F
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/images/illustrations/wave-bg.svg"
        width={1920}
        height={300}
        className="w-full absolute bottom-0 md:h-80 h-80 object-cover"
        alt="Wave background illustration"
      />
    </div>
  );
}
