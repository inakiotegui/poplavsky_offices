
import React, { useEffect, useState } from 'react';
import './NavBar.css';

import { useNavigate, useLocation } from 'react-router-dom';

import { Button } from 'primereact/button';

export default function NavBar() {
  const [actualPath, setActualPath] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('Current path:', location.pathname);
    setActualPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="NavBar grid grid-nogutter nested-grid h-5rem p-2 justify-content-between">
      <div className='col-2 bg-bluegray-400 border-round flex justify-content-center align-items-center'>
        <p className='m-0 fadeinup animation-duration-200 animation-iteration-1'>
          Logo
        </p>
      </div>
      <div className='col-5 bg-bluegray-400 border-round grid grid-nogutter justify-content-center align-items-center px-2 gap-4'>
        <Button label="Home" size='small' outlined={actualPath === '/' || actualPath === ''} text={actualPath !== '/' && actualPath !== ''} onClick={() => navigate('/')} className='fadeinup animation-duration-300 animation-iteration-1 text-yellow-500 py-3 px-4' />
        <Button label="About Us" size='small' outlined={actualPath === '/about-us'} text={actualPath !== '/about-us'} onClick={() => navigate('/about-us')} className='fadeinup animation-duration-400 animation-iteration-1 text-yellow-500 py-3 px-4' />
        <Button label="Services" size='small' outlined={actualPath === '/services'} text={actualPath !== '/services'} onClick={() => navigate('/services')} className='fadeinup animation-duration-500 animation-iteration-1 text-yellow-500 py-3 px-4' />
      </div>
      <div className='col-2 bg-bluegray-400 border-round flex justify-content-center align-items-center'>
        <Button label="Contact Us" size='small' onClick={() => navigate('/')} className='fadeinup animation-duration-1000 animation-iteration-1 bg-yellow-500 border-yellow-500 py-3 px-4' />
      </div>
    </div>
  );
};