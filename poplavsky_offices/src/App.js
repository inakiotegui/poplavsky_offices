import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

/* PRIME REACT */
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Home from "./sections/Home/Home";
import AboutUs from "./sections/AboutUs/AboutUs";
import Services from "./sections/Services/Services";
import ContactUs from "./sections/ContactUs/ContactUs";

import wsp from "./assets/icons/general/wsp.png";

function App() {
  const location = useLocation();

  useEffect(() => {
    const whatsappButton = document.querySelector(".whatsapp-button");

    if (location.pathname === "/contact-us") {
      whatsappButton.classList.add("show");
    } else if (window.scrollY > 100) {
      whatsappButton.classList.add("show");
    } else {
      whatsappButton.classList.remove("show");
    }

    const handleScroll = () => {
      if (window.scrollY > 100 || location.pathname === "/contact-us") {
        whatsappButton.classList.add("show");
      } else {
        whatsappButton.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <a
        href="https://wa.me/971585661300"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={wsp} alt="WhatsApp" />
      </a>
    </div>
  );
}

export default App;
