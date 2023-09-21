import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LogoItem from "./Item";
import { logos } from "./logos";
export default function HomeLogos() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-6 text-gray-900">
          Veja quem está falando sobre nós
        </h2>
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
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo}>
              <LogoItem src={logo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
