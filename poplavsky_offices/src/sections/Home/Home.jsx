import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Portada from "../../components/Home/Portada/Portada";
import SummaryServices from "../../components/services/SummaryServices/SummaryServices";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";
import NewsComponent from "../../components/Home/News/NewsComponent/NewsComponent";
import FAQs from "../../components/Home/FAQs/FAQs";

import FooterContacto from "../../components/FooterContacto/FooterContacto";
import FooterEnlaces from "../../components/FooterEnlaces/FooterEnlaces";

import InfoAboutUs from "../../components/AboutUs/InfoAboutUs";
import BloqueFinalAboutUs from "../../components/BloqueFinalAboutUs/InfoFinalAboutUs";

export default function Home() {
  const heroRef = useRef(null);
  const whyUs = useRef(null);
  const prensaRef = useRef(null);
  const infoRef = useRef(null);
  const finalRef = useRef(null);
  const faqsRef = useRef(null);
  const location = useLocation();

  const refs = { heroRef, whyUs, prensaRef, faqsRef, infoRef, finalRef };

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
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
    <div className="Home grid grid-nogutter nested-grid gap-1">
      <nav className="col-12 border-round mb-8">
        <NavBar />
      </nav>
      <section ref={heroRef} className="col-12">
        <Portada />
      </section>

      <section className="col-12 mb-3 md:mb-8">
        <SummaryServices />
      </section>

      <section ref={infoRef} className="col-12">
        <InfoAboutUs />
      </section>

      <section ref={finalRef}>
        <BloqueFinalAboutUs />
      </section>

      <section ref={whyUs} className="col-12 mb-3 md:mb-8">
        <WhyChooseUs />
      </section>

      <section ref={prensaRef} className="col-12 mb-3 md:mb-8">
        <NewsComponent />
      </section>

      <section ref={faqsRef} className="col-12 mb-3 md:mb-8">
        <FAQs />
      </section>

      <section className="col-12 bg-blue-dark">
        <FooterContacto />
        <FooterEnlaces />
      </section>
    </div>
  );
}
