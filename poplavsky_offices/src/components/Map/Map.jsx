import React from "react";
import "./Map.css";

import Divider from "../../utils/Divider/CustomDivider/CustomDivider";

export default function Map({ contacto }) {
  return (
    <div
      className={`grid grid-nogutter justify-content-center align-content-center ${
        !contacto ? "p-4 mb-4" : " p-0 m-0"
      } `}
    >
      <div className="flex flex-column w-full justify-content-center align-items-center">
        {!contacto && (
          <div className="col-12 px-4 md:px-6">
            <Divider />
            <h2 className="text-white text-2xl md:text-4xl m-2">Location</h2>
          </div>
        )}
        <div
          className={`flex justify-content-center w-full md:w-10 map-container mt-2 ${
            !contacto ? "h-25rem" : "h-18rem"
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.428212239713!2d55.2670773!3d25.188777800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69be86f26347%3A0xc3405c66facfcc1d!2sPoplavsky%20International%20Offices%20Dubai!5e0!3m2!1ses-419!2sar!4v1731673381482!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing location at Opus Tower, C101, Business Bay. Dubai, UAE"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
