import React from "react";
import "./InfoFinalAboutUs.css";
import InfoBloque from "../InfoBloque/InfoBloque";

export default function InfoFinalAboutUs() {
  return (
    <div className="grid grid-nogutter nested-grid flex-column md:flex-row p-2 gap-6 justify-content-center align-items-center mt-3 mb-4">
      <div className="flex flex-column md:flex-row w-full align-items-start justify-content-center gap-6">
        <div className="cont-left col-12 md:col-5 p-0">
          <InfoBloque
            title="Comprehensive Solutions and a Global Network for Business Growth"
            text="Thanks to our extensive global network of partnerships with
                businesses and authorities across multiple countries, we are
                uniquely positioned to offer the best possible solutions for
                your business’s expansion into the UAE."
          />
        </div>

        <div className="col-12 md:col-5 flex flex-column align-items-center justify-content-start border-1 border-solid border-round border-bluegray-900 text-white p-3">
          <p>
            In addition to our core services, we provide a comprehensive suite
            of business solutions, including:
          </p>
          <div className="flex flex-column gap-3 w-full text-gray-400 text-sm md:text-base p-2">
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
              Strategic commercial representation, connecting you with key
              buyers in the UAE
            </p>
          </div>
        </div>
      </div>
      <div className="col-8 justify-content-center align-items-center text-center text-white text-sm md:text-base">
        <p>
          We are dedicated to supporting you at every step of your business
          journey in the UAE, ensuring not just entry, but sustained growth and
          success.
        </p>
      </div>
    </div>
  );
}
