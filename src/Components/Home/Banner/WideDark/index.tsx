import React from "react";
import {
  MdDashboardCustomize,
  MdWebAsset,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { BsFillGearFill, BsFillRocketFill } from "react-icons/bs";

export default function WideDarkBanner() {
  return (
    <div className="w-full py-12 bg-[#262626] center">
      <div className="content flex justify-between items-center lg:flex-row md:flex-row flex-col gap-y-7">
        <WideDarkBannerItem
          text={
            <>
              Custom <br /> Development
            </>
          }
          icon={<BsFillGearFill className="text-4xl text-[#FAFAFA]" />}
        />
        <WideDarkBannerItem
          text={
            <>
              Software <br /> Design
            </>
          }
          icon={<TbEdit className="text-4xl text-[#FAFAFA]" />}
        />
        <WideDarkBannerItem
          text={
            <>
              Software <br /> Innovation
            </>
          }
          icon={<BsFillRocketFill className="text-4xl text-[#FAFAFA]" />}
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
    <div className="flex gap-5 text-[#FAFAFA] items-center gap-x-10 lg:w-auto md:w-auto sm:w-auto w-[50%]">
      {icon}
      <div className="text-justify font-normal uppercase">{text}</div>
    </div>
  );
}
