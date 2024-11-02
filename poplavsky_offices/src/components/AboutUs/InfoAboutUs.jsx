import React from "react";
import CardInfoAboutUs from "../AboutUs/CardsAboutUs/CardInfoAboutUs";
import aboutus from "../../utils/jsons/AboutUs/aboutus";

export default function InfoAboutUs() {
  return (
    <div className="p-2">
      {aboutus.map((item, index) => (
        <CardInfoAboutUs
          key={index}
          imagen={item.imagen}
          titulo={item.titulo}
          texto1={item.texto1}
          texto2={item.texto2}
          index={index}
        />
      ))}
    </div>
  );
}
