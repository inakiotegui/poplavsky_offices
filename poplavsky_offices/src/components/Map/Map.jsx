import React from "react";
import "./Map.css";

import Divider from "../../utils/Divider/CustomDivider/CustomDivider";

export default function Map() {
  return (
    <div className="grid grid-nogutter justify-content-center align-content-center p-4 mb-4">
      <div className="flex flex-column w-full justify-content-center align-items-center">
        <div className="col-12 px-4 md:px-6">
          <Divider />
          <h2 className="text-white text-2xl md:text-4xl m-2">Location</h2>
        </div>
        <div className="flex justify-content-center w-full md:w-10 h-25rem map-container mt-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.430309586653!2d55.26428602444142!3d25.18870703204632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6926edcc98b1%3A0x43a67efe17c6af45!2sOpus%20tower!5e0!3m2!1ses!2sar!4v1730949822261!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing location at Opus Tower, Of 1101, Business Bay. Dubai, UAE"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
