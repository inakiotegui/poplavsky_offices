import React from "react";
import "./CardsInfoAboutUs.css";

export default function CardInfoAboutUs({
  imagen,
  titulo,
  texto1,
  texto2,
  index,
}) {
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-nogutter col-12 justify-content-center align-items-center mt-4 mb-4 p-0 text-white">
      <div
        className={`flex flex-column w-full justify-content-center align-items-center gap-8 mb-4 mt-4 ${
          !isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-5 md:text-left md:pl-5">
          <h1 className="text-2xl md:text-4xl m-0">{titulo}</h1>
          <p className="text-sm md:text-base mb-1">{texto1}</p>
          <p className="text-sm md:text-base">{texto2}</p>
        </div>

        <div className="flex flex-column justify-content-center align-items-center w-full h-15rem md:h-25rem md:w-5 border-round image-container container-shadow-js-os">
          <img
            src={imagen}
            alt={titulo}
            className="image-custom-base w-full border-round"
          />
        </div>
      </div>
    </div>
  );
}
