import React, { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TechData as techData } from "./data";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";

const BASEPATH = "/tech/";

export default function HomeTech() {
  const [titleColor, setTitleColor] = useState("#000");
  const [data, setData] = useState(techData);
  SwiperCore.use([Autoplay, Pagination]);

  const handleMouseOver = (color: string) => {
    return () => {
      setTitleColor(color);
    };
  };

  useEffect(() => {
    const randomizeData = () => {
      const data = [...techData];
      const newData = [];
      while (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        newData.push(data[randomIndex]);
        data.splice(randomIndex, 1);
      }
      return newData;
    };

    return () => {
      setData(randomizeData());
    };
  }, []);

  return (
    <>
      <div className="screen-p">
        <h2
          className="text-4xl font-bold mb-2 transition-all duration-500 ease-in-out whitespace-nowrap"
          style={{ color: titleColor }}
        >
          Technologies in Our Toolbox
        </h2>
        <p className="text-2xl font-light leading-6 4">
          Explore some of the technologies we use
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 800,
        }}
        loop={true}
        modules={[Autoplay]}
        draggable
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
        className="select-none"
      >
        {data.map(({ image, color }) => (
          <SwiperSlide key={image}>
            <div
              className="flex flex-col items-center justify-center select-none"
              onMouseOver={() => {
                handleMouseOver(color)();
              }}
            >
              <Image
                src={BASEPATH + image}
                alt={image?.split(".")[0]}
                title={image?.split(".")[0]}
                width={100}
                height={100}
                className="h-16 w-16 filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out object-contain"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
