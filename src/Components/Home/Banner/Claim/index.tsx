import ButtonC from "@/Components/Geral/Button";
import { montaguSlab } from "@/Components/Layout";
import React from "react";

export default function BannerClaim() {
  return (
    <div className="w-full pt-[68px] pb-[58px] bg-indigo-900 lg:px-24 content-px">
      <div className="flex w-full justify-center gap-[34px] flex-wrap">
        <h2
          className={
            "flex-1 text-neutral-50 lg:text-3xl text-2xl font-normal leading-[41.97px] " +
            montaguSlab.className
          }
        >
          These bath tablets sell for $39,00
          <br />
          and today you will get yours FREE
        </h2>
        <div className="lg:w-[40%] flex flex-col justify-between">
          <p className="font-semibold text-neutral-50 text-center">
            Click To Claim Yours Now
          </p>
          <ButtonC className="bg-white text-primary">
            I Am Ready To Get My FREE 30 DAY Supply
          </ButtonC>
        </div>
      </div>
    </div>
  );
}
