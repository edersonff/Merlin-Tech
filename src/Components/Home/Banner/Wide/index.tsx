import ButtonC from "@/Components/Geral/Button";
import { useContact } from "@/store/contact";
import React from "react";
import { MdWork } from "react-icons/md";

export default function WideBanner() {
  const { open } = useContact();
  return (
    <div
      style={{
        backgroundImage: "url('/images/banner/grid-bg.png')",
      }}
      className="w-full pb-5 pt-10 center content-px"
    >
      <div className="content text-center font-semibold capitalize">
        <h2 className="text-neutral-600 lg:text-xl text-lg leading-7 mb-7">
          Click Here to Easily Claim Your Free Software <br />
          Development Quote with Just One Click of the Button
        </h2>
        <div className="flex flex-col gap-[10px]">
          <ButtonC
            onClick={open}
            className="bg-primary font-bold text-white center "
          >
            <MdWork className="mr-2 text-2xl" />
            Yes, let’s work together
          </ButtonC>
          <p className="text-red-600 text-sm leading-tight">
            We&apos;re Offering FREE Software Quotes for Everyone
          </p>
        </div>
      </div>
    </div>
  );
}
