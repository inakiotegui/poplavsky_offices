import React from "react";
import "./Portada.css";

import logo from "../../../assets/logos/logo-png-02.png";

import { Button } from "primereact/button";

export default function Portada() {
  return (
    <div
      className="Portada grid grid-nogutter nested-grid bg-bluegray-800 border-round gap-3 p-3 relative fadein animation-duration-1000 animation-iteration-1 animation-ease-in-out"
      style={{ minHeight: "calc(100vh - 8rem)" }}
    >
      <div
        className="hidden absolute w-8rem h-8rem bg-bluegray-100 md:flex justify-content-center align-items-center shadow-4"
        style={{
          borderRadius: "100%",
          left: "50.5%",
          top: "3rem",
          transform: "translateX(-50.5%)",
        }}
      >
        <div
          className="border-3 border-js-yellow w-4rem h-4rem flex justify-content-center align-items-center"
          style={{ borderRadius: "100%" }}
        >
          <i className="pi pi-arrow-up-right text-2xl font-light text-js-yellow"></i>
        </div>
      </div>

      <section className="bg-bluegray-400 border-round col-12 md:col-6 grid grid-nogutter nested-grid justify-content-center align-content-center align-items-center">
        <div
          className="col-12 md:col-10 bg-bluegray-200 border-round p-3 grid grid-nogutter nested-grid justify-content-between fadeinleft animation-duration-1000 animation-iteration-1 animation-ease-in-out"
          style={{ minHeight: "25rem" }}
        >
          <div className="w-full">
            <h1 className="m-0 text-3xl md:text-5xl w-full">
              Somos tu puerta de acceso a Dubai
            </h1>
            <h4 className="m-0 text-xs md:text-md w-full font-normal text-gray-500">
              Se parte del HUB numero uno en negocios internacionales.
            </h4>
          </div>

          <div className="col-12 grid grid-nogutter nested-grid justify-content-center align-content-end gap-6 mt-4 md:mt-0 ">
            <div className="col-12" style={{ height: "fit-content" }}>
              <Button
                label="Ver Mas"
                size="small"
                outlined
                className="shadow-2 py-2 md:py-3 px-2 md:px-4 mr-2  md:mr-3"
              />
              <Button
                label="Buscar Servicios"
                size="small"
                className="shadow-2 py-2 md:py-3 px-2 md:px-4"
              />
            </div>

            <div className="col-12 grid grid-nogutter nested-grid gap-3 h-auto">
              <div
                className="col border-round bg-bluegray-300 border-white border-1 grid grid-nogutter nested-grid px-3 py-2 shadow-2 "
                style={{ height: "fit-content" }}
              >
                <p className="m-0 col-12 font-semibold text-white text-3xl md:text-5xl">
                  200+
                </p>
                <span className="text-gray-500 text-xs font-light col-12">
                  Clientes Felices
                </span>
              </div>

              <div
                className="col border-round bg-bluegray-300 border-white border-1 grid grid-nogutter nested-grid px-3 py-2 shadow-2 "
                style={{ height: "fit-content" }}
              >
                <p className="m-0 col-12 font-semibold text-white text-3xl md:text-5xl">
                  10k+
                </p>
                <span className="text-gray-500 text-xs font-light col-12">
                  Servicios Aplicados
                </span>
              </div>

              <div
                className="col border-round bg-bluegray-300 border-white border-1 grid grid-nogutter nested-grid px-3 py-2 shadow-2 "
                style={{ height: "fit-content" }}
              >
                <p className="m-0 col-12 font-semibold text-white text-3xl md:text-5xl">
                  16+
                </p>
                <span className="text-gray-500 text-xs font-light col-12">
                  Años De Experiencia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-logo-portada bg-bluegray-400 border-round col grid grid-nogutter nested-grid justify-content-center align-content-center">
        <div
          className="col-12 md:col-10 bg-bluegray-200 border-round p-3 grid grid-nogutter nested-grid justify-content-center align-content-start gap-3 fadeinright animation-duration-1000 animation-iteration-1 animation-ease-in-out"
          style={{ minHeight: "25rem" }}
        >
          <div
            className="col-12 bg-bluegray-400 h-20rem w-20rem border-2 border-js-yellow container-shadow-js fadein animation-duration-1000 animation-iteration-1 animation-ease-in-out"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "80%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "100%",
            }}
          ></div>

          <div className="col-12 bg-bluegray-400 h-auto w-full border-round flex flex-column md:flex-row justify-content-evenly align-items-center">
            <p className="flex text-xs md:text-md m-2 w-6 md:w-full justify-content-between md:justify-content-center align-items-center text-white">
              <i className="text-js-yellow text-xl md:text-2xl mr-2 pi pi-file"></i>{" "}
              Apertura Compañias
            </p>
            <p className="flex text-xs md:text-md m-2 w-6 md:w-full justify-content-between md:justify-content-center align-items-center text-white">
              <i className="text-js-yellow text-xl md:text-2xl mr-2 pi pi-id-card"></i>
              Visa De Residencia
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
