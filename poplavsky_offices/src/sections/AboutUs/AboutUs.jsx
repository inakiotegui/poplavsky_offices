import React from "react";
import "./AboutUs.css";

import NavBar from "../../components/NavBar/NavBar";
import FooterContacto from "../../components/FooterContacto/FooterContacto";
import FooterEnlaces from "../../components/FooterEnlaces/FooterEnlaces";

export default function AboutUs() {
  return (
    <div className="AboutUs grid grid-nogutter nested-grid p-3">
      <nav className="col-12  border-round">
        <NavBar />
      </nav>
      <section className="col-12">
        <h1>AboutUs</h1>
      </section>
      <section className="col-12 mb-3 md:mb-8 bg-blue-dark">
        <FooterContacto />
        <FooterEnlaces />
      </section>
    </div>
  );
}
