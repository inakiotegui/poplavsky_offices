
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
      description: 'Asistencia en la apertura de Cuentas Bancaria Corporativas',
      link: '/services/1',
    },
    {
      icon: icon2,
      description: 'Constitución de Empresas en la Zona Franca Más Adecuada para Su Negocio',
      link: '/services/2',
    },
    {
      icon: icon3,
      description: 'Realización de Estudios de Mercado para Evaluar Oportunidades Comerciales',
      link: '/services/3',
    }
  ]

  return (
    <div className="SummaryServices grid grid-nogutter nested-grid  border-round gap-8 p-3 relative fadein animation-duration-1000 animation-iteration-1 animation-ease-in-out">
      {services.map((service, index) =>
        <SummaryServicesCards service={service} />
      )}
    </div>
  );
};