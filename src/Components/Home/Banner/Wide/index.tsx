import ButtonC from "@/Components/Geral/Button";
import React from "react";

export default function WideBanner() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/banner/grid-bg.png')",
      }}
      className="w-full pb-5 pt-10 center content-px"
    >
      <div className="content text-center font-semibold capitalize">
        <h2 className="text-neutral-600 lg:text-xl text-lg leading-7 mb-7">
          Click to Claim your 30 day FREE suply <br />
          Of Vitamin C SPA Bath Tablets Before Supplies Run Out!
        </h2>
        <div className="flex flex-col gap-[10px]">
          <ButtonC className="bg-primary font-bold text-white">
            Yes, let’s work together
          </ButtonC>
          <p className="text-red-600 text-sm leading-tight">
            there’s a FREE Shipping on all
          </p>
        </div>
      </div>
    </div>
  );
}
