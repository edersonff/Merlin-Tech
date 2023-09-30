import React from "react";

import ButtonHard from "@/Components/Geral/Button/Hard";
import Image from "next/image";
import { montaguSlab } from "@/Components/Layout";

export default function BottomBanner() {
  return (
    <>
      <div className="w-full lg:h-[699px] relative overflow-hidden">
        <Image
          src="/images/banner/office-side.png"
          alt="Office side"
          width={1920}
          height={1080}
          className="object-cover h-full"
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
              className="object-cover"
            />
          </div>
          <div className="h-full center flex-1 lg:pb-0 pb-10">
            <div className="gap-5 flex flex-col lg:w-[50%] w-full text-black">
              <h2
                className={
                  "text-[40px] font-semibold capitalize leading-10 " +
                  montaguSlab.className
                }
              >
                <p className="text-indigo-900">Who are We &</p>
                What are we about?
              </h2>
              <p className="text-justify text-xl leading-7">
                Merlin envisions a world where technology empowers individuals
                and businesses, not confuses them. Join us to experience digital
                empowerment. We began with a passion for simplifying technology
                - that&apos;s Merlin.
              </p>
              <p className="text-justify text-xl leading-7 pb-4">
                Merlin envisions a world where technology empowers individuals
                and businesses, not confuses them. Join us to experience digital
                empowerment. We began with a passion for simplifying technology
                - that&apos;s Merlin.
              </p>
              <ButtonHard className="bg-primary text-white">
                I Am Ready To Get My FREE 30 DAY Supply
              </ButtonHard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
