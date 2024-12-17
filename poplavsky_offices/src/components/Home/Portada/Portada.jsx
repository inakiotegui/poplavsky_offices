import React from "react";
import "./Portada.css";
import { Button } from "primereact/button";
import { portadaData } from "../../../utils/jsons/Portada/PortadaData";
import { useNavigate } from "react-router-dom";

export default function Portada() {
  const navigate = useNavigate();

  const handleNavigation = (section, path) => {
    navigate(path, { state: { section } });
  };

  return (
    <div
      className="Portada container-logo-total grid grid-nogutter nested-grid border-round gap-3 p-3 relative fadein animation-duration-1000 animation-iteration-1 animation-ease-in-out"
      style={{ minHeight: "calc(100vh - 8rem)" }}
    >
      <section className="border-round col-12 lg:col-6 grid grid-nogutter nested-grid justify-content-center align-content-center align-items-center">
        <div
          className="container-texto-portada col-12 md:col-10 border-round p-4 grid grid-nogutter nested-grid justify-content-between fadeinleft animation-duration-1000 animation-iteration-1 animation-ease-in-out"
          style={{ minHeight: "25rem" }}
        >
          <div className="w-full">
            <h1 className="text-white m-0 text-3xl md:text-6xl w-full">
              {portadaData.title}
            </h1>
            <h4 className="m-0 text-xs md:text-lg w-full font-normal">
              {portadaData.subtitle}
            </h4>
          </div>

          <div className="col-12 grid grid-nogutter nested-grid justify-content-center align-content-end gap-6 mt-4 md:mt-0 ">
            <div className="col-12" style={{ height: "fit-content" }}>
              {portadaData.buttons.map((btn, index) => (
                <Button
                  key={index}
                  label={btn.label}
                  size="small"
                  outlined={index === 0}
                  className="shadow-2 py-2 md:py-3 px-2 md:px-4 mr-2 md:mr-3 hover:shadow-6"
                  onClick={() => handleNavigation(btn.section, btn.path)}
                />
              ))}
            </div>

            <div className="col-12 grid grid-nogutter nested-grid gap-3 h-auto">
              <p className="m-0 text-xs md:text-lg w-full font-normal">
                At Poplavsky International Offices DMCC, we help entrepreneurs
                bring their business vision to the United Arab Emirates. We turn
                your vision into reality with comprehensive support, from
                company incorporation and banking to obtaining residency visas,
                tax consultancy, market research, and business representation.
                We accompany you every step of the way, ensuring a smooth and
                successful entry into this dynamic market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-logo-portada border-round col grid grid-nogutter nested-grid justify-content-center align-content-center">
        <div
          className="col-12 md:col-10 border-round p-3 grid grid-nogutter nested-grid justify-content-center align-content-center gap-3"
          style={{ minHeight: "25rem" }}
        >
          <div
            className="col-12 bg-trl-blue h-17rem md:h-20rem w-17rem md:w-20rem fadein animation-duration-1000 animation-iteration-1 animation-ease-in-out"
            style={{
              backgroundImage: `url(${portadaData.logo})`,
              backgroundSize: "80%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "100%",
            }}
          ></div>
        </div>
      </section>
    </div>
  );
}
