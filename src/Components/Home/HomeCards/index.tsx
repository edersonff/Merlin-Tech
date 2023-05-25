import React from "react";

export default function HomeCards() {
  return (
    <div className="w-full flex h-0 relative justify-center items-center">
      <div className="px-12 gap-x-12 lg:gap-x-48  h-24  lg:h-48  justify-center items-center relative w-full z-10 flex flex-wrap">
        <div className="h-full flex-1 bg-indigo-500 text-white shadow-xl rounded-3xl max-w-md">
          <div className="h-full flex flex-col justify-center items-center"></div>
        </div>
        <div className="h-full flex-1 bg-indigo-500 text-white shadow-xl rounded-3xl max-w-md border-8 border-white">
          <div className="h-full flex flex-col justify-between items-center p-5">
            <h3 className="text-2xl font-bold">Sobre</h3>
            <p className="text-center text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quod voluptates voluptatem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
