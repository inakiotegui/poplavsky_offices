
import React from 'react';
import './SummaryServicesCards.css';

export default function SummaryServicesCards({ service }) {
  return (
    <div className='SummaryServicesCards col-12 md:col grid grid-nogutter nested-grid bg-trl-blue border-round gap-3 p-3 border-gray-500 hover:border-js-yellow border-1 relative cursor-pointer'>
      <i className='pi pi-arrow-up-right absolute text-xl text-gray-500' style={{ right: '10px', top: '10px' }}></i>

      <div className='col-12 flex justify-content-center align-items-center'
        style={{ height: 'fit-content' }}
      >
        <img src={service.icon} alt="icon" className='w-4rem h-4rem' />
      </div>
      <div className='col-12  border-round h-4rem flex justify-content-center align-items-center'>
        <p className='m-0 text-center text-white'>
          {service.description}
        </p>
      </div>
    </div>
  );
};