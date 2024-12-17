import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AboutUs.css";

import NavBar from "../../components/NavBar/NavBar";
import FooterContacto from "../../components/FooterContacto/FooterContacto";
import FooterEnlaces from "../../components/FooterEnlaces/FooterEnlaces";
import InfoAboutUs from "../../components/AboutUs/InfoAboutUs";
import BloqueFinalAboutUs from "../../components/BloqueFinalAboutUs/InfoFinalAboutUs";
import BannerAboutUs from "../../components/AboutUs/BannerAboutUs/BannerAboutUs";
import OurTeam from "../../components/AboutUs/OurTeam/OurTeam";
import Map from "../../components/Map/Map";

import CustomDivider from "../../utils/Divider/CustomDivider/CustomDivider";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";

export default function AboutUs() {
  const bannerRef = useRef(null);
  const finalRef = useRef(null);
  const teamRef = useRef(null);
  const location = useLocation();

  const refs = { bannerRef, finalRef, teamRef };

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
    <div className="AboutUs grid grid-nogutter nested-grid">
      <nav className="col-12 border-round mb-8">
        <NavBar />
      </nav>
      <section ref={bannerRef} className="col-12">
        <BannerAboutUs />
      </section>

      <section className="col-12 my-6">
        <div className="grid grid-nogutter gap-3 nested-grid justify-content-start align-items-center  border-round pb-2">
          <div className="col-12 md:col-6 px-4 md:px-6">
            <CustomDivider />
            <h2 className="text-white text-2xl md:text-4xl m m-2">
              Our Vision
            </h2>
            <h4 className="m-0 text-xs md:text-lg w-full font-normal text-gray-500">
              To be the leading partner for entrepreneurs expanding to the UAE,
              known for unlocking global opportunities and delivering excellence
              in advisory services.
            </h4>
          </div>

          <div className="col-12 md:col px-4 md:px-6">
            <CustomDivider />
            <h2 className="text-white text-2xl md:text-4xl m m-2">
              Our Mission
            </h2>
            <h4 className="m-0 text-xs md:text-lg w-full font-normal text-gray-500">
              To empower entrepreneurs in their expansion to the UAE, providing
              comprehensive support at every step to ensure a successful and
              seamless market entry.
            </h4>
          </div>
        </div>
      </section>

      <section className="col-12">
        <WhyChooseUs />
      </section>

      <section ref={teamRef}>
        <OurTeam />
      </section>

      <section ref={finalRef}>
        <BloqueFinalAboutUs />
      </section>
      <section className="col-12">
        <Map />
      </section>
      <section className="col-12 bg-blue-dark">
        <FooterContacto />
        <FooterEnlaces />
      </section>
    </div>
  );
}
