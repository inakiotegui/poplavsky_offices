
import React from 'react';
import './Services.css';

import NavBar from '../../components/NavBar/NavBar';


export default function Services() {
  return (
    <div className="Services grid grid-nogutter nested-grid p-3">
      <nav className="col-12 bg-bluegray-800 border-round">
        <NavBar />
      </nav>
      <section className='col-12'>
        <h1>Services</h1>
      </section>
    </div>
  );
};