import React, { useMemo } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { SwiperSlide, Swiper, SwiperProps } from "swiper/react";
import Project from "./Project";
import { projectsData } from "./data";

export default function HomeProjects({
  invert,
  className,
  ...rest
}: { invert?: boolean } & SwiperProps) {
  SwiperCore.use([Autoplay]);

  const project = useMemo(() => {
    if (invert) {
      return projectsData.reverse();
    }
    return projectsData;
  }, [invert]);

  return (
    <Swiper
      className={
        "w-full h-full transform projects-slider select-none" + className
      }
      slidesPerView={5}
      autoplay={{
        delay: 0,
        reverseDirection: invert,
      }}
      loop
      freeMode
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
      spaceBetween={10}
      speed={7000}
      draggable
      longSwipes
      {...rest}
    >
      {project.map((item, index) => (
        <SwiperSlide className="w-full h-full" key={index}>
          <Project src={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
