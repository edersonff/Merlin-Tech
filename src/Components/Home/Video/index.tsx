import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { VideoProps } from "./types";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function HomeVideo() {
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);

  const { scrollY } = useViewportScroll();
  const topTransform = useTransform(scrollY, [0, 1000], [-20, 500]);

  return (
    <div className="h-[90vh] w-full flex justify-center items-end relative overflow-hidden bg-gray-700">
      <motion.div
        className="absolute top-0 left-0 h-full w-full"
        style={{
          y: topTransform,
        }}
      >
        <Video
          isLoading={isLoadingVideo}
          onLoaded={() => setIsLoadingVideo(false)}
        />
      </motion.div>
      <div className="absolute top-0 left-0 h-full w-full center text-white">
        <div className="content">
          <div className="flex flex-col items-start screen-p">
            <h1 className="text-4xl font-semibold">
              Merlin, empresa de tecnologia de Jaraguá do Sul
            </h1>
            <p className="mt-4 text-gray-200 leading-7">
              Empresa de tecnologia de Jaraguá do Sul, que atua no mercado de
              desenvolvimento de software e consultoria em TI. A empresa foi
              fundada em 2023.
            </p>
            <a
              className="bg-purple-800 border border-white text-white rounded-2xl py-3 px-8 mt-6 block hover:bg-purple-900 active:bg-purple-700 transition-all ease-in-out duration-200"
              href="#contato"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>

      <ChevronDownIcon
        className="h-10 w-10 text-white mb-10 animate-bounce"
        style={{
          animationDuration: "2s",
        }}
      />
    </div>
  );
}

function Video({ isLoading, onLoaded }: VideoProps) {
  return (
    <video
      className={
        "absolute top-0 left-0 h-full w-full object-cover object-center filter brightness-50 " +
        (isLoading ? "animate-pulse bg-gray-400" : "")
      }
      autoPlay
      loop
      muted
      playsInline
      onPlay={onLoaded}
    >
      <source src="/videos/PlanningProject.mp4" type="video/mp4" />
    </video>
  );
}
