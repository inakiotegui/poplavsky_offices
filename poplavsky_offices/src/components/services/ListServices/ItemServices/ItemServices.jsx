import React, { useRef, useEffect } from "react";
import "./ItemServices.css";
import { useLocation } from "react-router-dom";

export default function ItemServices({
  numero,
  titulo,
  descripcion,
  points,
  index,
  img,
}) {
  const isEven = index % 2 === 0;
  const serv01 = useRef(null);
  const serv02 = useRef(null);
  const serv03 = useRef(null);
  const serv04 = useRef(null);
  const serv05 = useRef(null);
  const serv06 = useRef(null);
  const serv07 = useRef(null);
  const refs = { serv01, serv02, serv03, serv04, serv05, serv06, serv07 };

  const location = useLocation();
  const divRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    if (divRef.current && pRef.current) {
      pRef.current.style.height = `${divRef.current.offsetHeight}px`;
    }
  }, []);

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    if (location.state?.section) {
      const sectionRef = refs[location.state.section];
      if (sectionRef) {
        scrollToSection(sectionRef);
      }
    }
  }, [location]);

  let assignedRef = null;
  if (numero === "01") assignedRef = serv01;
  else if (numero === "02") assignedRef = serv02;
  else if (numero === "03") assignedRef = serv03;
  else if (numero === "04") assignedRef = serv04;
  else if (numero === "05") assignedRef = serv05;
  else if (numero === "06") assignedRef = serv06;
  else if (numero === "07") assignedRef = serv07;

  return (
    <div
      ref={assignedRef}
      className="grid grid-nogutter col-12 justify-content-center align-items-center p-3 text-white md:mb-4"
    >
      <div
        className={`flex flex-column w-full justify-content-center align-items-center gap-6 ${
          !isEven ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div
          className={`flex flex-column justify-content-center w-full md:w-5 border-round h-full overflow-hidden ${
            !isEven ? "md:align-items-end" : "md:align-items-start"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p
            ref={pRef}
            className={`custom-bg-img-service urbanist-bold text-6xl md:text-8xl text-js-yellow m-0 flex justify-content-center align-items-center m-0 px-3 border-1 border-pop-gold ${
              !isEven ? "md:border-round-right" : "md:border-round-left"
            }`}
          >
            {numero}
          </p>
        </div>

        <div
          ref={divRef}
          className="w-full md:w-5 md:text-left md:pl-5 pb-6 border-bottom-1 border-js-yellow"
        >
          <h1 className="text-3xl md:text-4xl m-0 mb-2">{titulo}</h1>
          <p className="text-sm md:text-base mb-4">{descripcion}</p>
          <ul className="list-disc p-0 space-y-2 pl-3">
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
