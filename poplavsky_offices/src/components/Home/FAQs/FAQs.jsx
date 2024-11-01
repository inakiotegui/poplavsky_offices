import React, { useState } from "react";
import "./FAQs.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Carousel } from "primereact/carousel";

import CustomDivider from "../../../utils/Divider/CustomDivider/CustomDivider";

import faqs from "../../../utils/jsons/FAQs/faqs.json";

export default function FAQs() {
  const [visible, setVisible] = useState(false);
  const [faq, setFaq] = useState({});

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const noticiaTemplate = (item) => {
    return (
      <div
        className="card-news grid grid-nogutter nested-grid gap-3 bg-trl-blue border-round m-3 p-3 border-1 border-gray-500 hover:shadow-2 cursor-pointer"
        style={{ minHeight: "10rem" }}
        onClick={() => {}}
      >
        <div className="col-12 border-round flex align-items-center gap-3">
          <span
            className="custom-badge w-1rem h-1rem bg-gray-500"
            style={{ borderRadius: "100%" }}
          ></span>
          <p className="w-11 card-title m-0 text-xs text-gray-500">
            {item.title}
          </p>
        </div>

        <p className="w-full col-12 description text-xs text-white">
          {item.question}
        </p>

        <div className="col-12 flex justify-content-start align-items-center">
          <Button
            label="Read More"
            size="small"
            outlined
            className="shadow-2 py-1 px-2 text-xs hover:shadow-6"
            onClick={() => {
              setVisible(true);
              setFaq(item);
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="FAQs grid grid-nogutter nested-grid  border-round gap-3 p-3 relative fadein animation-duration-1000 animation-iteration-1 animation-ease-in-out">
      <div className="col-12 grid grid-nogutter nested-grid justify-content-start align-items-center  border-round pb-2">
        <div className="col-12 px-4 md:px-6">
          <CustomDivider />
          <h2 className="text-white text-2xl md:text-4xl m m-2">FAQ's</h2>
          <h4 className="m-0 text-xs md:text-lg w-full font-normal text-gray-500">
            Find answers to frequently asked questions about the comprehensive
            consulting services Poplavsky offers, including company formation,
            residency visa processing, bank account opening, and relocation. We
            are here to provide clarity and support you every step of the way,
            ensuring that your path to success in the United Arab Emirates is
            quick, secure, and hassle-free.
          </h4>
        </div>
      </div>

      <div className="col-12 grid grid-nogutter nested-grid justify-content-center align-items-center  border-round gap-3 md:p-4 md:px-8">
        <Carousel
          value={faqs}
          numVisible={4}
          numScroll={4}
          responsiveOptions={responsiveOptions}
          className="block md:hidden w-full"
          circular
          autoplayInterval={10000}
          itemTemplate={noticiaTemplate}
          showNavigators={false}
          indicatorsContentClassName="flex flex-nowrap overflow-scroll"
        />

        <Carousel
          value={faqs}
          numVisible={4}
          numScroll={4}
          responsiveOptions={responsiveOptions}
          className="hidden md:block w-full"
          circular
          autoplayInterval={10000}
          itemTemplate={noticiaTemplate}
        />
      </div>

      <Dialog
        header={faq.question}
        visible={visible}
        style={{ width: "40vw" }}
        onHide={() => {
          setVisible(false);
          setFaq({});
        }}
        contentClassName="bg-blue-dark text-white"
        headerClassName="bg-blue-dark text-white"
        className="border-1 border-js-yellow"
        dismissableMask={true}
        modal={true}
        closable={true}
      >
        <p className="m-0 text-xs font-light">{faq.answer}</p>
      </Dialog>
    </div>
  );
}
