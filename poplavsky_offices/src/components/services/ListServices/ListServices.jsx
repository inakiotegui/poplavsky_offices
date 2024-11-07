import React from "react";
import ItemServices from "../ListServices/ItemServices/ItemServices";
import servicesInfo from "../../../utils/jsons/ServicesInfo/ServicesInfo";

export default function ListServices() {
  return (
    <div className="grid grid-nogutter justify-content-center align-items-center p-2">
      {servicesInfo.map((item, index) => (
        <ItemServices
          key={index}
          numero={item.numero}
          titulo={item.titulo}
          descripcion={item.descripcion}
          points={item.points}
          index={index}
          img={item.img}
        />
      ))}
    </div>
  );
}
