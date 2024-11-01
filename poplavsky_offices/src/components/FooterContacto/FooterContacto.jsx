import React from "react";
import "./FooterContacto.css";

import { Button } from "primereact/button";
import fondo from "../../assets/fondos/fondo3.webp";

export default function FooterContacto() {
  return (
    <div className="FooterContacto grid grid-nogutter nested-grid flex-column md:flex-row p-3 m-2 gap-3 justify-content-center md:h-15rem bg-blue">
      <img
        src={fondo}
        alt="diseño de fondo"
        className="background-image w-full h-full"
      />
      <div className="col-12 md:col-8 p-1 flex flex-column align-items-start justify-content-center relative z-2">
        <h2 className="text-white text-2xl md:text-4xl m-2">
          Start Your Journey to Success in Dubai
        </h2>
        <p className="m-0 text-xs md:text-base w-full font-normal text-gray-300">
          The opportunity you’ve been waiting for is just a click away. Whether
          you’re looking to establish your business, apply for your Residence
          Visa, or seek market guidance, Poplavsky is here to guide you. Take
          the first step toward your goals in the United Arab Emirates and
          discover how we can help you, or reach out to our team for
          personalized assistance.
        </p>
      </div>
      <div className="col-12 md:col-2 flex align-items-center justify-content-center md:justify-content-end">
        <Button
          label="Contact Us"
          size="small"
          className="shadow-2 py-2 md:py-3 px-2 md:px-4"
        />
      </div>
    </div>
  );
}
