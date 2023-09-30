import React from "react";
import {
  MdDashboardCustomize,
  MdWebAsset,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi";
import { CgPerformance } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";

export default function WideDarkBanner() {
  return (
    <div className="w-full py-12 bg-[#262626] center">
      <div className="content flex justify-between lg:flex-row md:flex-row flex-col gap-y-7">
        <WideDarkBannerItem
          text={
            <>
              Clinically <br /> Proven Ingredients
            </>
          }
          icon={<CgPerformance className="text-4xl text-[#FAFAFA]" />}
        />
        <WideDarkBannerItem
          text={
            <>
              Clinically <br /> Proven Ingredients
            </>
          }
          icon={<CgPerformance className="text-4xl text-[#FAFAFA]" />}
        />
        <WideDarkBannerItem
          text={
            <>
              Clinically <br /> Proven Ingredients
            </>
          }
          icon={<CgPerformance className="text-4xl text-[#FAFAFA]" />}
        />
      </div>
    </div>
  );
}

function WideDarkBannerItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 text-[#FAFAFA] items-center justify-center gap-x-10">
      {icon}
      <div className="text-justify text-lg font-normal uppercase">{text}</div>
    </div>
  );
}
