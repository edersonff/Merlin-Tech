import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { VideoProps } from "./types";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";

export default function HomeVideo() {
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);

  const { scrollY } = useViewportScroll();
  const topTransform = useTransform(scrollY, [0, 1000], [-20, 500]);

  return (
    <div className="h-[70vh] w-full flex justify-center items-end relative overflow-hidden bg-gray-700">
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
          <div className="flex">
            <div className="flex items-start flex-col screen-p flex-1">
              <h1 className="lg:text-4xl text-3xl font-bold lg:mb-4 mb-2">
                Merlin, a technology company based in Jaraguá do Sul
              </h1>
              <p className="mt-4 text-gray-200 lg:leading-7 lg:text-lg">
                A technology company from Jaraguá do Sul, operating in the
                software development and IT consulting market. The company was
                founded in 2023.
              </p>
              <a
                className="relative bg-purple-800 text-white rounded-xl py-3 px-10 mt-6 block hover:bg-purple-900 active:bg-purple-700 transition-all ease-in-out duration-200 shadow-hard shadow-black active:shadow-none top-0 left-0 active:left-[5px] active:top-[5px] "
                href="#contact-us"
              >
                Contact Us
              </a>
            </div>
            <div className="flex-1 h-full lg:flex justify-center items-center hidden">
              <Image
                src="/merlin/logo.svg"
                width={300}
                height={300}
                alt="Merlin Logo"
                title="Merlin Logo"
                loading="eager"
              />
            </div>
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
