import React from "react";
import "./FooterEnlaces.css";
import logo from "../../assets/logos/logo-footer.png";

export default function FooterEnlaces() {
  return (
    <div className="grid grid-nogutter col-12 text-sm justify-content-center mt-4 p-0 text-white">
      <div className="flex flex-column md:flex-row w-10 h-auto md:h-15rem align-items-start text-left m-0 p-0">
        <div className="flex flex-column w-full md:w-3 text-left align-items-start m-2">
          <div>
            <img src={logo} alt="icono" className="w-5rem md:w-8rem ml-2" />
          </div>
        </div>

        <div className="flex flex-column w-full md:w-3 align-items-start m-2">
          <p className="urbanist-medium m-1 mb-2 text-base text-gray-400">
            Home
          </p>
          <div className="m-1 text-sm">
            <p>Hero</p>
            <p>Prensa</p>
            <p>FAQ´s</p>
          </div>
        </div>

        <div className="flex flex-column w-full md:w-3 align-items-start m-2">
          <p className="urbanist-medium m-1 mb-2 text-base text-gray-400">
            About Us
          </p>
          <div className="m-1 text-sm">
            <p>-----</p>
            <p>-----</p>
            <p>-----</p>
          </div>
        </div>

        <div className="flex flex-column w-full md:w-3 align-items-start m-2">
          <p className="urbanist-medium m-1 mb-2 text-base text-gray-400">
            Services
          </p>
          <div className="m-1 text-sm">
            <p>-----</p>
            <p>-----</p>
            <p>-----</p>
            <p>-----</p>
            <p>-----</p>
          </div>
        </div>

        <div className="flex flex-column w-full md:w-3 justify-content-start items-center m-2">
          <p className="urbanist-medium m-1 mb-2 text-base text-gray-400">
            Contact Us
          </p>
          <div className="m-1 text-sm">
            <p>Contact Form</p>
            <p>Our Offices</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-content-around w-full p-0 bg-black-alpha-60">
        <div className="flex flex-column md:flex-row justify-content-center align-content-start md:align-items-center gap-2 md:gap-3 p-4">
          <p className="text-lefttext-sm m-0">
            ©2024 Poplavsky. Todos los derechos reservados.
          </p>
          <p className="text-lefttext-sm m-0">Términos y condiciones</p>
        </div>
        <div className="flex flex-row justify-content-center align-items-center gap-2 md:gap-3 p-4">
          <div>
            <i
              className="cursor-pointer pi pi-facebook pr-1"
              style={{ fontSize: "1rem" }}
            ></i>
          </div>
          <div>
            <i
              className="cursor-pointer pi pi-twitter pr-1"
              style={{ fontSize: "1rem" }}
            ></i>
          </div>
          <div>
            <i
              className="cursor-pointer pi pi-linkedin pr-1"
              style={{ fontSize: "1rem" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
