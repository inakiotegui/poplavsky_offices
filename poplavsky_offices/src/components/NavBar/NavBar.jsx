
import React from 'react';
import './NavBar.css';

import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="NavBar grid grid-nogutter nested-grid h-full p-2 justify-content-between">
      <div className='col-2 bg-bluegray-400 border-round flex justify-content-center align-items-center'>Logo</div>
      <div className='col-5 bg-bluegray-400 border-round grid grid-nogutter justify-content-between align-items-center px-2'>
        <Button label="Home" outlined onClick={() => navigate('/')} className='text-yellow-500 py-2 px-4' />
        <Button label="About Us" outlined onClick={() => navigate('/about-us')} className='text-yellow-500 py-2 px-4' />
        <Button label="Services" outlined onClick={() => navigate('/services')} className='text-yellow-500 py-2 px-4' />
      </div>
      <div className='col-2 bg-bluegray-400 border-round flex justify-content-center align-items-center'>
        <Button label="Contact" outlined onClick={() => navigate('/')} className='text-yellow-500 py-2 px-4' />
      </div>
    </div>
  );
};