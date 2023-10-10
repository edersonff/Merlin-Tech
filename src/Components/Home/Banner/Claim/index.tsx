import ButtonC from "@/Components/Geral/Button";
import { montaguSlab } from "@/Components/Layout";
import { useContact } from "@/store/contact";
import React from "react";

export default function BannerClaim() {
  const { open } = useContact();
  return (
    <div className="w-full pt-[68px] pb-[58px] bg-indigo-900 lg:px-24 content-px">
      <div className="flex w-full justify-evenly gap-[34px] flex-wrap">
        <h2
          className={
            "text-neutral-50 lg:text-3xl text-2xl font-normal leading-[44px] " +
            montaguSlab.className
          }
        >
          Click to Request Your Free
          <br />
          Software Development Quote
        </h2>
        <div className="lg:w-[40%] flex flex-col justify-between gap-y-3">
          <p className="font-semibold text-neutral-50 text-center">
            Click To Claim Yours Now
          </p>
          <ButtonC onClick={open} className="bg-white text-primary">
            I Am Ready To Get FREE Software Quote
          </ButtonC>
        </div>
      </div>
    </div>
  );
}
