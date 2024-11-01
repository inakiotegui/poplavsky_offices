import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Portada from "../../components/Home/Portada/Portada";
import SummaryServices from "../../components/services/SummaryServices/SummaryServices";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";
import NewsComponent from "../../components/Home/News/NewsComponent/NewsComponent";
import FooterContacto from "../../components/FooterContacto/FooterContacto";
import FooterEnlaces from "../../components/FooterEnlaces/FooterEnlaces";

export default function Home() {
  return (
    <div className="Home grid grid-nogutter nested-grid p-3 gap-1">
      <nav className="col-12  border-round">
        <NavBar />
      </nav>
      <section className="col-12">
        <Portada />
      </section>

      <section className="col-12 mb-3 md:mb-8">
        <SummaryServices />
      </section>

      <section className="col-12 mb-3 md:mb-8">
        <WhyChooseUs />
      </section>
      <section className="col-12 mb-3 md:mb-8">
        <NewsComponent />
      </section>
      <FooterContacto />
      <FooterEnlaces />
    </div>
  );
}
