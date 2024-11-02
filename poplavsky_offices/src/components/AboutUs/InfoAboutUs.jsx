import React from "react";
import CardInfoAboutUs from "../AboutUs/CardsAboutUs/CardInfoAboutUs";
import aboutus from "../../utils/jsons/AboutUs/aboutus";
import Divider from "../../utils/Divider/CustomDivider/CustomDivider";

export default function InfoAboutUs() {
  return (
    <div className="p-2">
      <div className="md:pl-8">
        <Divider />
      </div>
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
