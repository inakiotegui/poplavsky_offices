import React from "react";
import "./AboutUs.css";

import NavBar from "../../components/NavBar/NavBar";
import FooterContacto from "../../components/FooterContacto/FooterContacto";
import FooterEnlaces from "../../components/FooterEnlaces/FooterEnlaces";
import InfoAboutUs from "../../components/AboutUs/InfoAboutUs";
import BloqueFinalAboutUs from "../../components/BloqueFinalAboutUs/InfoFinalAboutUs";
import BannerSeccion from "../../components/BannerSeccion/BannerSeccion";

export default function AboutUs() {
  return (
    <div className="AboutUs grid grid-nogutter nested-grid p-3">
      <nav className="col-12  border-round">
        <NavBar />
      </nav>
      <section className="col-12">
        <BannerSeccion />
      </section>
      <section>
        <InfoAboutUs />
        <BloqueFinalAboutUs />
      </section>
      <section className="col-12 mb-3 md:mb-8 bg-blue-dark">
        <FooterContacto />
        <FooterEnlaces />
      </section>
    </div>
  );
}
