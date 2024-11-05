import React from "react";
import "./InfoBloque.css";

export default function InfoBloque({ title, text }) {
  return (
    <div className="p-2 md:p-4 flex flex-column align-items-start justify-content-start text-white border-1 border-solid border-round border-bluegray-900">
      <div>
        <h2 className="text-2xl md:text-4xl m-2">{title}</h2>
        <p className="m-0 pb-4 text-sm md:text-base w-full font-normal text-gray-400">
          {text}
        </p>
      </div>
      <div className="benefits-container w-full flex flex-column md:flex-row justify-content-around align-content-center pt-3 m-0 text-gray-400">
        <p className="flex p-3 m-0 text-sm">
          <i className="pi pi-globe pr-2 text-eh-yellow"></i> Global Network
        </p>
        <p className="flex benefit p-3 m-0 text-sm">
          <i className="pi pi-users pr-2 text-eh-yellow"></i>Comprehensive
          Services
        </p>
        <p className="flex benefit p-3 m-0 text-sm">
          <i className="pi pi-chart-line pr-2 text-eh-yellow"></i> Long-Term
          Growth
        </p>
      </div>
    </div>
  );
}
