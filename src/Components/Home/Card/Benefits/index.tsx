import React from "react";
import {
  MdDashboardCustomize,
  MdWebAsset,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi";
import { CgPerformance } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";

export default function BannerBenefits() {
  return (
    <div className="center w-full">
      <div className="text-center capitalize text-black content content-px">
        <h2 className="lg:text-[40px] text-3xl font-extrabold lg:mb-5 mb-3">
          Benefits of choosing Merlin
        </h2>
        <p className="lg:text-2xl text-xl font-medium capitalize">
          Benefits of choosing Merlin
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[65px] gap-y-[45px] mt-11">
          <BannerBenefitsItem
            Icon={
              <MdDashboardCustomize className="text-4xl text-primary-500" />
            }
            title="Custom Solutions"
            text="Our team crafts tailored solutions that precisely match your unique needs and objectives, ensuring a perfect fit for your goals."
          />
          <BannerBenefitsItem
            Icon={
              <HiOutlineShare className="text-4xl text-primary-500 transform -scale-100" />
            }
            title="Effortless Integration"
            text="Experience seamless integration with your existing systems and processes, simplifying the adoption of our solutions into your workflow."
          />
          <BannerBenefitsItem
            Icon={<MdWebAsset className="text-4xl text-primary-500" />}
            title="User-Friendly Design"
            text="Our intuitive and user-friendly design ensures a delightful experience, making it easy for users to navigate and engage."
          />
          <BannerBenefitsItem
            Icon={<CgPerformance className="text-4xl text-primary-500" />}
            title="Enhanced Performance"
            text="Achieve boosted performance that not only drives results but also improves efficiency, giving you a competitive edge."
          />
          <BannerBenefitsItem
            Icon={<BiSupport className="text-4xl text-primary-500" />}
            title="Dedicated Support"
            text="Count on our dedicated team to provide ongoing support and assistance, ensuring your success every step of the way."
          />
          <BannerBenefitsItem
            Icon={
              <MdOutlineAttachMoney className="text-4xl text-primary-500" />
            }
            title="Cost-Effective Solutions"
            text="Our cost-effective solutions deliver exceptional value and savings, helping you optimize your resources and investments."
          />
        </div>
      </div>
    </div>
  );
}

export function BannerBenefitsItem({
  Icon,
  title,
  text,
}: {
  Icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white soft-shadow py-4 px-6 flex flex-col gap-y-[14px] capitalize">
      <div className="mx-auto w-16 h-16 rounded-full border-2 border-black center">
        {Icon}
      </div>
      <h3 className="text-center text-black font-bold capitalize">{title}</h3>
      <p className="text-justify text-neutral-600 text-[10px] font-medium leading-[14px]">
        {text}
      </p>
    </div>
  );
}
