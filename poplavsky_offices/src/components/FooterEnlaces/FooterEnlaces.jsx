import React from "react";
import "./FooterEnlaces.css";
import logo from "../../assets/logos/popOffices-logo.png";
import { useNavigate } from "react-router-dom";

import footerLinks from "../../utils/jsons/Footer/FooterEnlaces";

// Reusable component for each section
const FooterSection = ({ title, links, sectionName }) => {
  const navigate = useNavigate();

  const handleNavigation = (section, path) => {
    navigate(path, { state: { section } });
  };


  return (
    <div className="flex flex-column w-full md:w-3 align-items-start m-2">
      <p className="urbanist-medium m-1 mb-2 text-base text-gray-400">{title}</p>
      <div className="m-1 text-sm">
        {links.map((link) => (
          <p
            key={link.text}
            className="m-1 mb-2 text-white cursor-pointer"
            onClick={() => handleNavigation(link.section, link.path)}
          >
            {link.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default function FooterEnlaces() {
  const navigateTo = (path) => {
    window.open(path, "_blank");
  };

  return (
    <div className="grid grid-nogutter col-12 text-sm justify-content-center mt-4 p-0 text-white">
      <div className="flex flex-column md:flex-row w-10 h-auto md:h-15rem align-items-start text-left m-0 p-0">
        <div className="flex justify-content-center align-items-center h-6rem w-full md:w-3 fadeinup animation-duration-200 animation-iteration-1 cursor-pointer">
          <img src={logo} className="w-4rem md:w-2rem" alt="Pop Offices Logo" />
          <div className="hidden h-full md:flex flex-column justify-content-center align-items-center">
            <p className="m-0 uppercase text-gray-200 white-space-nowrap" style={{ fontSize: ".5rem", letterSpacing: "2px" }}>Poplavsky</p>
            <p className="m-0 uppercase text-gray-200 white-space-nowrap" style={{ fontSize: ".30rem", letterSpacing: "2px" }}>International Offices</p>
            <p className="m-0 uppercase text-js-yellow white-space-nowrap" style={{ fontSize: ".25rem", letterSpacing: "2px" }}>DUBAI - UAE</p>
          </div>
          <div className="flex h-full md:hidden flex-column justify-content-center align-items-center">
            <p className="m-0 uppercase text-gray-200 white-space-nowrap" style={{ fontSize: ".8rem", letterSpacing: "2px" }}>Poplavsky</p>
            <p className="m-0 uppercase text-gray-200 white-space-nowrap" style={{ fontSize: ".50rem", letterSpacing: "2px" }}>International Offices</p>
            <p className="m-0 uppercase text-js-yellow white-space-nowrap" style={{ fontSize: ".45rem", letterSpacing: "2px" }}>DUBAI - UAE</p>
          </div>
        </div>

        {/* Rendering Footer Sections */}
        {footerLinks.map((section, index) => (
          <FooterSection key={index} title={section.title} links={section.links} />
        ))}
      </div>

      <div className="flex flex-row justify-content-around border-round w-full p-0 bg-black-alpha-60">
        <div className="flex flex-column md:flex-row justify-content-center align-content-start md:align-items-center gap-2 md:gap-3 p-4">
          <p className="text-left text-sm m-0">©2024 Poplavsky International Offices. All rights reserved.</p>
          {/* <p className="text-left text-sm m-0">Terms and Conditions</p> */}
        </div>
        <div className="flex flex-row justify-content-center align-items-center gap-2 md:gap-3 p-4">
          <i className="cursor-pointer pi pi-instagram pr-1" onClick={() => navigateTo('https://www.instagram.com/popladubai/')} style={{ fontSize: "1rem" }}></i>
          <i className="cursor-pointer pi pi-linkedin pr-1" onClick={() => navigateTo('https://www.linkedin.com/company/poplavskydubai/')} style={{ fontSize: "1rem" }}></i>
        </div>
      </div>
    </div>
  );
}
