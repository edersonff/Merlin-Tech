"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import WhatsappChatBubble from "./ChatBubble";

export default function WhatsappBtn({
  href = "https://wa.me/5547996556538",
  onClick,
  src = "/images/others/patricia.webp",
  alt = "Atendente Whatsapp",
  children,
}: {
  href?: string;
  onClick?: () => void;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <a
      target="_blank"
      aria-label="Contatar Whatsapp"
      href={href}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed bottom-7 right-7 z-50 flex"
    >
      <WhatsappChatBubble>{children}</WhatsappChatBubble>
      <div
        className={
          "flex items-center justify-center w-16 h-16 rounded-full duration-300 relative text-3xl active:scale-95 shadow-xl " +
          (hover ? "scale-110" : "")
        }
      >
        <div
          className="absolute w-full h-full top-0 left-0 bg-[#25d366] -z-10 scale-80 rounded-full transition-all animate-ping duration"
          style={{
            animationDuration: "1.5s",
            opacity: hover ? 0.1 : 0,
          }}
        />
        <Image
          src={src}
          alt={alt}
          title={alt}
          width={64}
          height={64}
          loading="eager"
          className="rounded-full"
        />

        <div className="absolute right-0 bottom-0 text-sm rounded-full p-1 bg-[#25d366] ">
          <RiWhatsappFill className="text-white" />
        </div>
      </div>
    </a>
  );
}
