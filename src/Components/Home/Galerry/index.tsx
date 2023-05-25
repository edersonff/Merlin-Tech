import React from "react";

export default function Gallery() {
  return (
    <div className="flex flex-col gap-y-10 bg-red-100 w-full">
      <div className="flex">
        <div className="w-80 relative">
          <div className="relative w-96 p-10 rounded-4xl bg-gradient-to-r from-purple-700 to-purple-500 text-white">
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
            backgroundImage: "url(/images/Examples/01.jpg)",
          }}
        ></div>
      </div>
      <div className="flex justify-between flex-wrap">
        <div
          style={{
            backgroundImage: "url(/images/Examples/02.jpg)",
          }}
          className="w-72 h-80 bg-center bg-cover rounded-4xl"
        />
        <div
          style={{
            backgroundImage: "url(/images/Examples/03.jpg)",
          }}
          className="w-72 h-80 bg-center bg-cover rounded-4xl"
        />
        <div
          style={{
            backgroundImage: "url(/images/Illustrations/card.svg)",
          }}
          className="w-72 h-80 bg-cover rounded-4xl"
        />
      </div>
    </div>
  );
}
