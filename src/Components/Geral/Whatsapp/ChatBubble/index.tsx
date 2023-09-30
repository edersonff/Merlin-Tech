import React, { useEffect, useState, useRef } from "react";
import Lottie from "../../Lottie";
import Image from "next/image";

export default function WhatsappChatBubble({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setTimeout(() => {
      setLoaded(true);
      audioRef.current?.play();
    }, 1500);
  }, []);

  if (!hydrated)
    return (
      <div
        style={{
          width: 260,
          height: 64,
        }}
      />
    );

  return (
    <div
      className="flex relative"
      style={{
        animation: loaded
          ? "chatPopIn 0.65s ease-in-out"
          : "chatPopIn2 0.5s ease-in-out",
      }}
    >
      <div className="absolute w-full h-full pl-6 pr-3 center">
        {loaded ? (
          <span className="text-sm text-black-800">{children}</span>
        ) : (
          <Lottie animationData="loading" />
        )}
      </div>
      <Image
        src="/images/illustrations/speech.svg"
        alt="WhatsApp Speech Bubble"
        title="WhatsApp Speech Bubble"
        width={280}
        height={64}
        loading="eager"
        className="object-scale-down object-center"
      />
    </div>
  );
}
