
import React from 'react';
import './SummaryServices.css';

import icon1 from '../../../assets/icons/icons-services/icon-1.png';
import icon2 from '../../../assets/icons/icons-services/icon-2.png';
import icon3 from '../../../assets/icons/icons-services/icon-3.png';
import SummaryServicesCards from '../SummaryServicesCards/SummaryServicesCards';

export default function SummaryServices() {

  const services = [
    {
      icon: icon1,
      description: 'Assistance with Corporate Bank Account Opening',
      link: '/services/1',
    },
    {
      icon: icon2,
      description: 'Company Formation in the Most Suitable Free Zone for Your Business',
      link: '/services/2',
    },
    {
      icon: icon3,
      description: 'Conducting Market Studies to Evaluate Business Opportunities',
      link: '/services/3',
    }
  ]

  return (
    <div className="SummaryServices grid grid-nogutter nested-grid  border-round gap-4 md:gap-8 p-3 relative fadein animation-duration-1000 animation-iteration-1 animation-ease-in-out">
      {services.map((service, index) =>
        <SummaryServicesCards service={service} />
      )}
    </div>
  );
};