import React from "react";
import "./BannerSeccion.css";
import fondo from "../../assets/fondos/AbstractOpaco.svg";

import logoopac from "../../assets/logos/logo-opa.png";

export default function BannerSeccion() {
  return (
    <div
      className="BannerSeccion grid grid-nogutter nested-grid justify-content-center align-content-center  h-22rem"
      style={{
        backgroundImage: `url(${fondo}), url(${logoopac})`,
        backgroundSize: "contain, 20%",
        backgroundPosition: "left, right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-10 text-center">
        <h2 className="text-white text-2xl md:text-4xl m m-2">
          Poplavsky International Offices DMCC: Your Gateway to Success in the
          UAE
        </h2>
        <h4 className="m-0 text-xs md:text-lg w-full font-normal text-gray-500">
          Welcome to Estatein, where your real estate aspirations meet expert
          guidance. Explore our comprehensive range of services, each designed
          to cater to your unique needs and dreams.
        </h4>
      </div>
    </div>
  );
}
