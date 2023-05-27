import React from "react";

export default function Gallery() {
  return (
    <div className="flex flex-col gap-y-10 w-full lg:p-0 p-5">
      <div className="flex">
        <div className="relative lg:w-80 md:w-72 w-0">
          <div className="absolute w-96 p-10 rounded-4xl bg-gradient-to-r from-purple-700 to-purple-500 text-white lg:-top-0 md:-top-0 -top-32">
            <h3 className="text-3xl font-semibold text-center mb-6">
              Nosso espaço
            </h3>
            <p className="text-base font-light">
              Ele também pode ser aí, na sua casa. Estamos conectados pela
              tecnologia que nos permite estar em qualquer lugar. Ele também
              pode ser aí, na sua casa. Estamos conectados pela tecnologia que
              nos permite estar em qualquer lugar.
            </p>
          </div>
        </div>
        <div
          className="flex-1 w-full h-96 bg-center bg-cover rounded-4xl"
          style={{
            backgroundImage: "url(/Images/Examples/01.jpg)",
          }}
        />
      </div>
      <div className="flex justify-center lg:justify-between flex-wrap gap-2">
        <div
          style={{
            backgroundImage: "url(/Images/Examples/02.jpg)",
          }}
          className="w-full lg:w-72 h-80 bg-center bg-cover rounded-4xl"
        />
        <div
          style={{
            backgroundImage: "url(/Images/Examples/03.jpg)",
          }}
          className="w-full lg:w-72 h-80 bg-center bg-cover rounded-4xl"
        />
        <div
          style={{
            backgroundImage: "url(/Images/Illustrations/card.svg)",
          }}
          className="lg:block hidden w-72 h-80 bg-cover rounded-4xl"
        />
      </div>
    </div>
  );
}
