import ButtonHard from "@/Components/Geral/Button/Hard";
import { useContact } from "@/store/contact";
import Image from "next/image";
import React from "react";
import { BsRocketFill, BsFillCheckCircleFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

export default function TopBanner() {
  const { open } = useContact();
  return (
    <>
      <div className="w-full py-20 center relative">
        <Image
          src="/images/banner/dark-broken.png"
          alt="Office table"
          fill
          loading="eager"
          draggable={false}
          className="object-cover lg:center selectDisable"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="absolute -bottom-10 left-0 w-full z-0 h-10"
        >
          <path
            className="elementor-shape-fill"
            opacity="0.33"
            fill="#1c1c1c"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            opacity="0.66"
            fill="#1c1c1c"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            fill="#1c1c1c"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          />
        </svg>
        <div className="w-full content flex justify-between items-center lg:flex-row flex-col relative z-10 gap-y-10">
          <div className="flex-1 flex flex-col gap-[22px] lg:w-[475px] md:w-[475px] lg:text-left md:text-left text-center content-px">
            <Image
              src="/merlin/Logo-w.png"
              alt="Merlin Logo"
              width={107}
              height={107}
              className="selectDisable"
              draggable={false}
            />
            <h1 className="text-white text-3xl font-bold leading-[41.37px] tracking-[3px]">
              Turning Dreams into Digital Achievements
            </h1>
            {/* <p className="text-[#e7dbff] text-[15px] font-medium tracking-wider">
              Discover the potential of custom software solutions. Elevate your
              business with Merlin&apos;s cutting-edge expertise
            </p> */}
            <div className="flex flex-col gap-1.5">
              <CheckItemConfirm text="Unlock Your Business Potential with Merlin Software." />
              <CheckItemConfirm text="Boost Productivity and Efficiency with Merlin." />
              <CheckItemConfirm text="Tailored Software Solutions for Your Success." />
              <CheckItemConfirm text="Simplify Technology with Merlin's Intuitive Design." />
              <CheckItemConfirm text="Experience Real Results with Merlin Software." />
              <CheckItemConfirm text="Maximize Value with Cost-Effective Solutions." />
              <CheckItemConfirm text="Seamless Integration for Smoother Operations." />
              <CheckItemConfirm text="Explore Our Services!" />
            </div>

            <ButtonHard
              onClick={open}
              className="mt-5 bg-primary text-white center"
            >
              Ready to Begin?
              <BsRocketFill className="ml-2 text-2xl" />
            </ButtonHard>
            <p className="text-gray-300 text-xs font-medium leading-normal tracking-wider center">
              <FaLock className="mr-2 text-base" />
              Service 100% Secure and Satisfaction Guaranteed!
            </p>
          </div>
          <Image
            width={600}
            height={812}
            priority
            src="/images/mockup/phone.png"
            alt="Phone Mockup"
            className="selectDisable"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
}

function CheckItemConfirm({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <BsFillCheckCircleFill className="text-[#9d6cff] text-xl" />
      <p className="text-white font-semibold leading-6">{text}</p>
    </div>
  );
}
