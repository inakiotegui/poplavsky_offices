
import React from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar';

export default function Home() {
  return (
    <div className="Home grid grid-nogutter nested-grid p-3">
      <nav className="col-12 bg-bluegray-800 h-4rem border-round">
        <NavBar />
      </nav>
      <section className='col-12'>
        <h1>Home Component</h1>
      </section>
    </div>
  );
};