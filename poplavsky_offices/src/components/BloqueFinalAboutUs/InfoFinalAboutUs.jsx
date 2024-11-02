import React from "react";
import "./InfoFinalAboutUs.css";

export default function InfoFinalAboutUs() {
  return (
    <div className="grid grid-nogutter nested-grid flex-column md:flex-row p-2 gap-6 justify-content-center">
      <div className="cont-left col-12 md:col-5">
        <div className="p-2 md:p-4 flex flex-column align-items-start justify-content-start text-white border-1 border-solid border-round border-bluegray-900">
          <div>
            <h2 className="text-2xl md:text-4xl m-2">
              Comprehensive Solutions and a Global Network for Business Growth
            </h2>
            <p className="m-0 pb-4 text-xs md:text-base w-full font-normal text-gray-300">
              Thanks to our extensive global network of partnerships with
              businesses and authorities across multiple countries, we are
              uniquely positioned to offer the best possible solutions for your
              business’s expansion into the UAE.
            </p>
          </div>
          <div className="benefits-container w-full flex flex-column md:flex-row justify-content-around align-content-center pt-3 m-0">
            <p className="flex p-3 m-0 text-sm">
              <i className="pi pi-globe pr-2 text-eh-yellow"></i> Global Network
            </p>
            <p className="flex benefit p-3 m-0 text-sm">
              <i className="pi pi-users pr-2 text-eh-yellow"></i>Comprehensive
              Services
            </p>
            <p className="flex  benefit p-3 m-0 text-sm">
              <i className="pi pi-chart-line pr-2 text-eh-yellow"></i>Long-Term
              Growth
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 md:col-5 flex flex-column align-items-center justify-content-start border-1 border-solid border-round border-bluegray-900 text-white p-3">
        <p>
          In addition to our core services, we provide a comprehensive suite of
          business solutions, including:
        </p>
        <div className="flex flex-column gap-3 w-full text-bluegray-300 p-2">
          <p className="solution p-3 m-0">
            Expert company formation in the UAE’s most suitable free zone for
            your business.
          </p>
          <p className="solution p-3 m-0">
            Seamless assistance with opening corporate bank accounts
          </p>
          <p className="solution p-3 m-0">
            In-depth market research to identify and capitalize on business
            opportunities
          </p>
          <p className="solution p-3 m-0">
            Professional debt collection services for unpaid invoices
          </p>
          <p className="solution p-3 m-0">
            Strategic commercial representation, connecting you with key buyers
            in the UAE
          </p>
        </div>
      </div>
    </div>
  );
}
