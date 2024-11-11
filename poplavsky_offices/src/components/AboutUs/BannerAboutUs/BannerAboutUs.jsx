import React from "react";
import Banner from "../../Banner/Banner";
import fondo from "../../../assets/fondos/AbstractOpaco.svg";
import logoopac from "../../../assets/logos/logo-opa.png";

export default function BannerAboutUs() {
  return (
    <Banner
      backgroundImage={fondo}
      backgroundLogo={logoopac}
      backgroundGradient="linear-gradient(90deg, rgba(31, 42, 51, 1) 0%, rgba(9, 9, 121, 0) 53%)"
      title="Poplavsky International Offices DMCC: Your Partner for Business Success in the UAE"
      subtitle="Expert guidance for Spanish-speaking businesses expanding into the UAE. From market entry to strategic representation, we provide the support and insights needed for sustainable growth."
    />
  );
}
