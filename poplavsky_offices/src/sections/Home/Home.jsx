
import React from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar';
import Portada from '../../components/Home/Portada/Portada';
import SummaryServices from '../../components/services/SummaryServices/SummaryServices';
export default function Home() {
  return (
    <div className="Home grid grid-nogutter nested-grid p-3 gap-1">
      <nav className="col-12 bg-bluegray-800 border-round">
        <NavBar />
      </nav>
      <section className='col-12'>
        <Portada />
      </section>

      <section className='col-12'>
        <SummaryServices />
      </section>
    </div>
  );
};