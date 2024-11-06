
import React from 'react';
import './SummaryServices.css';
import { Carousel } from "primereact/carousel";
import servicesInfo from "../../../utils/jsons/ServicesInfo/SummaryServices";
import SummaryServicesCards from '../SummaryServicesCards/SummaryServicesCards';

export default function SummaryServices() {

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

  const summaryServiceTemplate = (item) => {
    return (
      <div className='mx-2 md:mx-6'>
        <SummaryServicesCards service={item} />
      </div>
    );
  };


  return (
    <div className="SummaryServices grid grid-nogutter nested-grid  border-round gap-4 md:gap-8 p-3 relative fadein animation-duration-1000 animation-iteration-1 animation-ease-in-out">
      <Carousel
        value={servicesInfo}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        showIndicators={false}
        showNavigators={false}
        className="w-full"
        contentClassName=''
        circular
        autoplayInterval={5000}
        itemTemplate={summaryServiceTemplate}
      />
    </div>
  );
};