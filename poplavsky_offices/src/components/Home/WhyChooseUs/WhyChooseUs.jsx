import React from "react";
import "./WhyChooseUs.css";
import data from "../../../utils/jsons/WhyChooseUs/whyChooseUs-data.json";

import CustomDivider from "../../../utils/Divider/CustomDivider/CustomDivider";

export default function WhyChooseUs() {
  return (
    <div
      className="WhyChooseUs grid grid-nogutter nested-grid  border-round gap-3 p-3 relative fadein animation-duration-1000 animation-iteration-1 animation-ease-in-out"
      style={{ minHeight: "30rem" }}
    >
      <div className="col-12 md:col-5 px-4 md:px-6 grid grid-nogutter nested-grid justify-content-center align-items-center  border-round">
        <div>
          <CustomDivider />
          <h2 className="text-white text-2xl md:text-4xl m-2">{data.sectionTitle}</h2>
          <p className="text-sm md:text-lg text-gray-500">
            {data.intro}
          </p>
        </div>
      </div>
      <div className="col grid grid-nogutter nested-grid bg-trl-blue justify-content-center border-round gap-3 md:gap-0 p-3 border-2 border-js-yellow">
        {data.reasons.map((reason, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? "col-12 md:col-6" : "col-12 md:col"}
            ${index === 0 || index === 1 ? 'border-bottom-1 border-js-yellow md:pb-3 md:mb-3' : ''}
            py-3  grid grid-nogutter align-content-center px-5`}
          >
            <div className="flex flex-column justify-content-start" style={{ height: '90%' }}>
              <div className="w-full flex align-items-center gap-3 mb-3">
                <div
                  className="w-3rem h-3rem bg-trl-black flex justify-content-center align-items-center border-1 border-pop-yellow"
                  style={{ borderRadius: "100px" }}
                >
                  <i className={`${reason.icon} text-xl text-pop-gold`}></i>
                </div>
                <p className="text-white text-xl m-0">{reason.title}</p>
              </div>
              <p className="text-sm m-0 text-gray-500">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
