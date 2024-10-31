import React from "react";
import "./Services.css";

import NavBar from "../../components/NavBar/NavBar";
import FooterContacto from "../../components/FooterContacto/FooterContacto";
import FooterEnlaces from "../../components/FooterEnlaces/FooterEnlaces";

export default function Services() {
  return (
    <div className="Services grid grid-nogutter nested-grid p-3">
      <nav className="col-12  border-round">
        <NavBar />
      </nav>
      <section className="col-12">
        <h1>Services</h1>
      </section>
      <FooterContacto />
      <FooterEnlaces />
    </div>
  );
}
