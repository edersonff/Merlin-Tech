import React, { useMemo } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TechData } from "./data";

const BASEPATH = "/Tech/";

export default function HomeTech() {
  const randomizeData = useMemo(() => {
    const data = [...TechData];
    const randomizedData = [];

    while (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      randomizedData.push(data[randomIndex]);
      data.splice(randomIndex, 1);
    }

    return randomizedData;
  }, []);

  return (
    <div className="bg-gray-50 py-20">
      <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 mb-14">
        Veja as tecnologias que utilizamos
      </h2>
      <div className="px-4 lg:px-40">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {randomizeData.map((tech) => (
            <SwiperSlide key={tech}>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={BASEPATH + tech}
                  alt={tech.split(".")[0]}
                  className="h-16 w-16"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
                <span className="mt-2 text-sm text-gray-500">{tech}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
