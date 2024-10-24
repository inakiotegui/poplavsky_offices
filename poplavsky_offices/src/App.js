import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

/* PRIME REACT */
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


import Home from './sections/Home/Home';
import AboutUs from './sections/AboutUs/AboutUs';
import Services from './sections/Services/Services';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
