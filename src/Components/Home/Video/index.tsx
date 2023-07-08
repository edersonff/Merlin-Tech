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
