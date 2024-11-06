import React from "react";
import "./ItemServices.css";

export default function ItemServices({
  numero,
  titulo,
  descripcion,
  points,
  index,
}) {
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-nogutter col-12 justify-content-center align-items-center p-3 text-white md:mb-4">
      <div
        className={`flex flex-column w-full justify-content-center align-items-center gap-6 ${
          !isEven ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex flex-column justify-content-center align-items-center w-full md:w-5">
          <p className="urbanist-bold text-6xl md:text-8xl text-js-yellow">
            {numero}
          </p>
        </div>

        <div className="w-full md:w-5 md:text-left md:pl-5 pb-6 border-bottom-1 border-js-yellow">
          <h1 className="text-3xl md:text-4xl m-0 mb-2">{titulo}</h1>
          <p className="text-sm md:text-base mb-4">{descripcion}</p>
          <ul className="list-disc pl-5 space-y-2">
            {" "}
            {points.map((point, idx) => (
              <li key={idx} className="text-sm md:text-base p-1">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
