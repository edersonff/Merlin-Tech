import Bold from "@/Components/Geral/Bold";
import SectionSparkle from "@/Components/Geral/Section/Sparkle";
import Image from "next/image";
import React from "react";

export default function OurCompany() {
  return (
    <div className="center content-px relative pb-16 py-5">
      <div className="content relative z-10 flex flex-col gap-y-24">
        <SectionSparkle title="Who we are?">
          Merlin was founded by a tech enthusiast who noticed the growing
          complexity of technology, leaving many struggling to keep up. Our
          mission is to <Bold>simplify technology</Bold>, making it accessible
          and intuitive for all. We envision a world where everyone can easily
          harness the power of technology. At Merlin, we&apos;re dedicated to
          making this vision a reality.
        </SectionSparkle>
        <div className="w-full flex items-end gap-12 lg:flex-row md:flex-row flex-col">
          <SectionSparkle title="Our Vision and Mission">
            At Merlin, we&apos;re about empowerment through simplicity.
            We&apos;re about bridging the gap between the intricacies of
            technology and the ease of everyday life. We&apos;re about ensuring
            that technology is not a barrier but a bridge to possibilities.
            We&apos;re about transforming complexity into clarity. We&apos;re
            about you and your journey in a tech-driven world.
          </SectionSparkle>
          <div className="relative lg:w-auto w-full flex justify-center">
            <Image
              src="/images/people/ederson.png"
              alt="Ederson"
              width={200}
              height={500}
              className="mt-[2.4%] selectDisable"
              draggable={false}
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
        className="w-full absolute bottom-0 md:h-80 h-80 object-cover selectDisable"
        draggable={false}
        alt="Wave background illustration"
      />
    </div>
  );
}
