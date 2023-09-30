import ButtonHard from "@/Components/Geral/Button/Hard";
import Image from "next/image";
import React from "react";

export default function TopBanner() {
  return (
    <>
      <div className="w-full lg:h-[540px] md:h-[540px] h-[740px] center relative overflow-hidden">
        <Image
          src="/images/banner/dark-broken.png"
          alt="Office table"
          fill
          loading="eager"
          className="object-cover"
        />
        <div className="w-full content flex justify-between items-center lg:flex-row md:flex-row flex-col relative z-10">
          <div className="flex flex-col gap-[22px] lg:w-[475px] md:w-[475px] lg:text-left md:text-left text-center content-px">
            <Image
              src="/merlin/Logo-w.png"
              alt="Merlin Logo"
              width={107}
              height={107}
            />
            <h1 className="text-white text-3xl font-bold leading-[41.37px] tracking-[3px]">
              Quer saber como quem fatura 1 milhão no digital chegou lá?
            </h1>
            <p className="text-white text-[15px] font-medium leading-normal tracking-wider">
              <span>
                Conheça agora a estratégia usada por quem faz parte do grupo{" "}
              </span>
              <span>Hotmart Black Account</span>
            </p>
            <ButtonHard className="mt-5 bg-primary text-white">
              Escolha seu horário e descubra!
            </ButtonHard>
          </div>
          <Image
            width={650}
            height={812}
            priority
            src="/images/mockup/phone.png"
            alt="Phone Mockup"
          />
        </div>
      </div>
    </>
  );
}
