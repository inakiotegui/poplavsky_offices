import React from "react";
import "./Services.css";

import NavBar from "../../components/NavBar/NavBar";
import FooterContacto from "../../components/FooterContacto/FooterContacto";
import FooterEnlaces from "../../components/FooterEnlaces/FooterEnlaces";
import BannerServices from "../../components/services/BannerServices/BannerServices";
import SummaryServices from "../../components/services/SummaryServices/SummaryServices";
import InfoBloque from "../../components/InfoBloque/InfoBloque";

export default function Services() {
  return (
    <div className="Services grid grid-nogutter nested-grid">
      <nav className="col-12 border-round mb-8">
        <NavBar />
      </nav>
      <section className="col-12">
        <BannerServices />
      </section>
      <section className="col-12 mb-3 md:mb-8">
        <SummaryServices />
      </section>
      <section className="col-12 flex justify-content-center mt-2 mb-6">
        <div className="col-12 md:col-6">
          <InfoBloque
            title="Unlock Your Business Potential in the UAE with Expert, Comprehensive Solutions"
            text="Discover comprehensive, expert services designed to fuel your business success in the UAE. From effective debt recovery that safeguards client relationships to seamless business setup and banking support, our solutions ensure a smooth path for your operations. Leverage in-depth market insights and expert commercial representation to unlock growth and new opportunities in a competitive landscape. With tailored strategies, industry expertise, and unwavering commitment, we handle the complexities so you can focus on what matters—growing your business. Explore how our dedicated approach can help you thrive in the UAE."
          />
        </div>
      </section>
      <section className="col-12 bg-blue-dark">
        <FooterContacto />
        <FooterEnlaces />
      </section>
    </div>
  );
}
