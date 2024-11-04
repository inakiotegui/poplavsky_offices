import React from "react";
import "./BannerServices.css";
import fondo from "../../assets/fondos/AbstractOpacoServices.svg";

export default function BannerServices() {
  return (
    <div className="BannerServices">
      <div
        className="grid grid-nogutter nested-grid justify-content-center align-content-center  h-22rem"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-10 text-center">
          <h2 className="text-white text-2xl md:text-4xl m m-2">
            Empower Your Business with Expert Solutions: Discover Our Full Range
            of Professional Services
          </h2>
          <h4 className="m-0 text-xs md:text-lg w-full font-normal text-gray-500">
            From seamless business setup to strategic market insights—unlock
            growth with our tailored expertise in the UAE.
          </h4>
        </div>
      </div>
    </div>
  );
}
