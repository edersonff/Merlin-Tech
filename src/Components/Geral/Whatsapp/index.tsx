"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import WhatsappChatBubble from "./ChatBubble";

export default function WhatsappBtn({
  href = "https://wa.me/message/N4OE3R6J6ED5K1",
  onClick,
  src = "/images/people/patricia.webp",
  alt = "Atendente Whatsapp",
  children,
}: {
  href?: string;
  onClick?: () => void;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
}) {
  const [hoverBottom, setHoverBottom] = useState(false);
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHoverBottom(true);
      } else {
        setHoverBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      target="_blank"
      aria-label="Contatar Whatsapp"
      href={href}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        bottom: hoverBottom ? 28 : "-100%",
      }}
      className="fixed right-7 z-50 flex transition-all duration-500"
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
          className="rounded-full selectDisable"
          draggable={false}
        />

        <div className="absolute right-0 bottom-0 text-sm rounded-full p-1 bg-[#25d366] ">
          <RiWhatsappFill className="text-white" />
        </div>
      </div>
    </a>
  );
}
