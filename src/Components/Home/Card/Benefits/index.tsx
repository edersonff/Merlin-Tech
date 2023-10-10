import React from "react";
import {
  MdDashboardCustomize,
  MdWebAsset,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi";
import { CgPerformance } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";

export default function BannerBenefits() {
  return (
    <div className="center w-full py-14 relative">
      <div className="text-center capitalize content content-px">
        <h2 className="lg:text-3xl text-2xl text-black font-extrabold lg:mb-3 mb-5">
          Discover the <span className="text-primary">Advantages</span> of
          Partnering with Us
        </h2>
        <p className="text-lg font-medium capitalize">
          Unleash the Full Potential of Merlin&apos;s Expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[65px] gap-y-[45px] mt-16">
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
      <Image
        src="/images/illustrations/circles.svg"
        alt="Circles Illustration"
        className="absolute bottom-0 left-[3%] -z-10 selectDisable"
        width={120}
        height={120}
        draggable={false}
      />
      <Image
        src="/images/illustrations/squares.svg"
        alt="Squares Illustration"
        className="absolute top-0 right-[3%] -z-10 lg:block hidden selectDisable"
        width={140}
        height={140}
        draggable={false}
      />
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
    <div className="bg-white soft-shadow py-8 px-6 flex flex-col gap-y-[16px] capitalize">
      <div className="mx-auto w-16 h-16 rounded-full border-2 border-black center">
        {Icon}
      </div>
      <h3 className="text-center text-black font-bold capitalize">{title}</h3>
      <p className="text-justify text-neutral-600 text-sm normal-case	font-medium  leading-[18px]">
        {text}
      </p>
    </div>
  );
}
