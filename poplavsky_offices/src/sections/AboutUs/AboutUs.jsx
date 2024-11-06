import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AboutUs.css";

import NavBar from "../../components/NavBar/NavBar";
import FooterContacto from "../../components/FooterContacto/FooterContacto";
import FooterEnlaces from "../../components/FooterEnlaces/FooterEnlaces";
import InfoAboutUs from "../../components/AboutUs/InfoAboutUs";
import BloqueFinalAboutUs from "../../components/BloqueFinalAboutUs/InfoFinalAboutUs";
import BannerAboutUs from "../../components/AboutUs/BannerAboutUs/BannerAboutUs";
import OurTeam from "../../components/AboutUs/OurTeam/OurTeam";

export default function AboutUs() {
  const bannerRef = useRef(null);
  const infoRef = useRef(null);
  const finalRef = useRef(null);
  const teamRef = useRef(null);
  const location = useLocation();

  const refs = { bannerRef, infoRef, finalRef, teamRef };

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (location.state?.section) {
      const sectionRef = refs[location.state.section];
      if (sectionRef) {
        scrollToSection(sectionRef);
      }
    }
  }, [location]);

  return (
    <div className="AboutUs grid grid-nogutter nested-grid">
      <nav className="col-12 border-round mb-8">
        <NavBar />
      </nav>
      <section ref={bannerRef} className="col-12">
        <BannerAboutUs />
      </section>
      <section ref={infoRef} className="col-12">
        <InfoAboutUs />
        <BloqueFinalAboutUs />
      </section>
      <section ref={finalRef}>
        <BloqueFinalAboutUs />
      </section>
      <section ref={teamRef}>
        <OurTeam />
      </section>
      <section className="col-12 bg-blue-dark">
        <FooterContacto />
        <FooterEnlaces onLinkClick={scrollToSection} refs={{ bannerRef, infoRef, finalRef, teamRef }} />
      </section>
    </div>
  );
}
