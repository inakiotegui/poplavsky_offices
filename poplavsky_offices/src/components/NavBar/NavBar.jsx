
import React, { useEffect, useState } from 'react';
import './NavBar.css';

import { useNavigate, useLocation } from 'react-router-dom';

import logo from '../../assets/logos/popOffices-logo.png';
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
    <div className="NavBar grid grid-nogutter nested-grid h-5rem p-2 justify-content-between gap-1">
      <div className='col-3 md:col-2 bg-bluegray-400 border-round flex justify-content-center align-items-center'>
        <p className='m-0 fadeinup animation-duration-200 animation-iteration-1'>
          <img src={logo} className='w-4rem' alt="Pop Offices Logo" />
        </p>
      </div>
      <div className='col md:col-5 bg-bluegray-400 border-round grid grid-nogutter justify-content-center align-items-center md:px-2'>
        <span className='hidden md:flex gap-4'>
          <Button label="Home" size='small' outlined={actualPath === '/' || actualPath === ''} text={actualPath !== '/' && actualPath !== ''} onClick={() => navigate('/')} className='fadeinup animation-duration-300 animation-iteration-1 text-yellow-500 py-3 px-4' />
          <Button label="About Us" size='small' outlined={actualPath === '/about-us'} text={actualPath !== '/about-us'} onClick={() => navigate('/about-us')} className='fadeinup animation-duration-400 animation-iteration-1 text-yellow-500 py-3 px-4' />
          <Button label="Services" size='small' outlined={actualPath === '/services'} text={actualPath !== '/services'} onClick={() => navigate('/services')} className='fadeinup animation-duration-500 animation-iteration-1 text-yellow-500 py-3 px-4' />
        </span>
        <span className='flex md:hidden gap-2'>
          <Button icon="pi pi-home" size='small' outlined={actualPath === '/' || actualPath === ''} text={actualPath !== '/' && actualPath !== ''} onClick={() => navigate('/')} className='fadeinup animation-duration-300 animation-iteration-1 text-yellow-500 w-3rem h-2rem p-0' />
          <Button icon="pi pi-user" size='small' outlined={actualPath === '/about-us'} text={actualPath !== '/about-us'} onClick={() => navigate('/about-us')} className='fadeinup animation-duration-400 animation-iteration-1 text-yellow-500 w-3rem h-2rem p-0' />
          <Button icon="pi pi-file-check" size='small' outlined={actualPath === '/services'} text={actualPath !== '/services'} onClick={() => navigate('/services')} className='fadeinup animation-duration-500 animation-iteration-1 text-yellow-500 w-3rem h-2rem p-0' />
        </span>
      </div>
      <div className='col-2 bg-bluegray-400 border-round flex justify-content-center align-items-center'>
        <span className='hidden md:block'>
          <Button label="Contact Us" size='small' onClick={() => navigate('/')} className='fadeinup animation-duration-1000 animation-iteration-1 bg-yellow-500 border-yellow-500 py-3 px-4' />
        </span>
        <span className='block md:hidden'>
          <Button icon="pi pi-envelope" size='small' onClick={() => navigate('/')} className='fadeinup animation-duration-1000 animation-iteration-1 bg-yellow-500 border-yellow-500 w-3rem h-2rem p-0' />
        </span>
      </div>
    </div>
  );
};