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
      title="Poplavsky International Offices DMCC: Your Gateway to Success in the UAE"
      subtitle="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
    />
  );
}
