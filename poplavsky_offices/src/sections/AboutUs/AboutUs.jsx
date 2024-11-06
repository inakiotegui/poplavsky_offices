import React from "react";
import "./AboutUs.css";

import NavBar from "../../components/NavBar/NavBar";
import FooterContacto from "../../components/FooterContacto/FooterContacto";
import FooterEnlaces from "../../components/FooterEnlaces/FooterEnlaces";
import InfoAboutUs from "../../components/AboutUs/InfoAboutUs";
import BloqueFinalAboutUs from "../../components/BloqueFinalAboutUs/InfoFinalAboutUs";
import BannerAboutUs from "../../components/AboutUs/BannerAboutUs/BannerAboutUs";
import OurTeam from "../../components/AboutUs/OurTeam/OurTeam";

export default function AboutUs() {
  return (
    <div className="AboutUs grid grid-nogutter nested-grid">
      <nav className="col-12 border-round mb-8">
        <NavBar />
      </nav>
      <section className="col-12">
        <BannerAboutUs />
      </section>
      <section className="col-12">
        <InfoAboutUs />
        <BloqueFinalAboutUs />
      </section>

      <section>
        <OurTeam />
      </section>
      <section className="col-12 bg-blue-dark">
        <FooterContacto />
        <FooterEnlaces />
      </section>
    </div>
  );
}
