import React from "react";
import Banner from "../../Banner/Banner";
import fondo from "../../../assets/fondos/AbstractOpacoServices.svg";

export default function BannerServices() {
  return (
    <Banner
      backgroundImage={fondo}
      backgroundGradient="linear-gradient(138deg, rgba(242, 203, 111, 0.34) 0%, rgba(38, 38, 38, 0) 14%)"
      title="Empower Your Business with Expert Solutions: Discover Our Full Range of Professional Services"
      subtitle="From seamless business setup to strategic market insights—unlock growth with our tailored expertise in the UAE."
    />
  );
}
