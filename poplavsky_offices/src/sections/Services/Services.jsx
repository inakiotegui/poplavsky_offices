import React, { useRef, useEffect } from "react";
import "./Services.css";

import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import FooterContacto from "../../components/FooterContacto/FooterContacto";
import FooterEnlaces from "../../components/FooterEnlaces/FooterEnlaces";
import BannerServices from "../../components/services/BannerServices/BannerServices";
import SummaryServices from "../../components/services/SummaryServices/SummaryServices";
import InfoBloque from "../../components/InfoBloque/InfoBloque";
import ListServices from "../../components/services/ListServices/ListServices";

export default function Services() {
  const banner = useRef(null);
  const serviceOverview = useRef(null);
  const detailDescription = useRef(null);
  const listOfServices = useRef(null);
  const location = useLocation();

  const refs = { banner, serviceOverview, detailDescription, listOfServices };

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
    <div className="Services grid grid-nogutter nested-grid">
      <nav className="col-12 border-round mb-8">
        <NavBar />
      </nav>
      <section ref={banner} className="col-12">
        <BannerServices />
      </section>
      <section ref={serviceOverview} className="col-12 mb-3 md:mb-8">
        <SummaryServices />
      </section>
      <section className="col-12 flex justify-content-center mt-2 mb-4">
        <div ref={detailDescription} className="col-12 md:col-6">
          <InfoBloque
            title="Unlock Your Business Potential in the UAE with Expert, Comprehensive Solutions"
            text="Discover comprehensive, expert services designed to fuel your business success in the UAE. From effective debt recovery that safeguards client relationships to seamless business setup and banking support, our solutions ensure a smooth path for your operations. Leverage in-depth market insights and expert commercial representation to unlock growth and new opportunities in a competitive landscape. With tailored strategies, industry expertise, and unwavering commitment, we handle the complexities so you can focus on what matters—growing your business. Explore how our dedicated approach can help you thrive in the UAE."
          />
        </div>
      </section>
      <section className="col-12 flex justify-content-center mt-4">
        <div ref={listOfServices} className="col-12 md:col-10">
          <ListServices />
        </div>
      </section>
      <section className="col-12 bg-blue-dark">
        <FooterContacto />
        <FooterEnlaces />
      </section>
    </div>
  );
}
