import React from "react";

import ButtonHard from "@/Components/Geral/Button/Hard";
import Image from "next/image";
import { montaguSlab } from "@/Components/Layout";
import { useContact } from "@/store/contact";

export default function BottomBanner() {
  const { open } = useContact();
  return (
    <>
      <div className="w-full lg:h-[699px] relative overflow-hidden">
        <Image
          src="/images/banner/office-side.png"
          alt="Office side"
          width={1920}
          height={1080}
          className="object-cover h-full selectDisable"
          draggable={false}
          style={{
            position: "absolute",
          }}
        />
        <div className="flex flex-wrap-reverse items-end h-full relative z-10 lg:p-0 p-10 pb-0">
          <div className="h-full flex justify-center items-end">
            <Image
              src="/images/mockup/notebook-phone.png"
              alt="Notebook and phone Mockup"
              width={720}
              height={720}
              className="object-cover selectDisable"
              draggable={false}
            />
          </div>
          <div className="h-full center flex-1 lg:pb-0 pb-10">
            <div className="gap-5 flex flex-col lg:w-[50%] lg:min-w-[550px] md:min-w-[550px] w-full text-black">
              <h2
                className={
                  "text-[40px] font-semibold capitalize leading-10 " +
                  montaguSlab.className
                }
              >
                <p className="text-indigo-900">Empowering Innovation &</p>
                Your Path to Simplicity
              </h2>
              <p className="text-justify text-lg leading-7">
                At Merlin, we&apos;re dedicated to empowering innovation through
                our software solutions. We believe in a world where technology
                enhances the capabilities of individuals and businesses,
                simplifying their digital journey. Our mission is to make
                technology accessible and user-friendly, ensuring it serves as a
                bridge to endless possibilities.
              </p>
              <p className="text-justify text-lg leading-7 pb-4">
                Explore Merlin&apos;s software solutions to experience
                streamlined workflows, enhanced productivity, and the unlocking
                of your business&apos;s full potential. Our goal is to simplify
                technology, making it not just manageable but truly
                transformative. Join us in this digital empowerment revolution
                today.
              </p>
              <ButtonHard onClick={open} className="bg-primary text-white">
                I Am Ready To Get FREE Software Quote
              </ButtonHard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
