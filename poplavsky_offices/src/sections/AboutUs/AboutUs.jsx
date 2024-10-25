
import React from 'react';
import './AboutUs.css';

import NavBar from '../../components/NavBar/NavBar';


export default function AboutUs() {
  return (
    <div className="AboutUs grid grid-nogutter nested-grid p-3">
      <nav className="col-12 bg-bluegray-800 border-round">
        <NavBar />
      </nav>
      <section className='col-12'>
        <h1>AboutUs</h1>
      </section>
    </div>
  );
};