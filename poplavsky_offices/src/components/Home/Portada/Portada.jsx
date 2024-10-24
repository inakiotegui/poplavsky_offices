
import React from 'react';
import './Portada.css';

import { Button } from 'primereact/button';


export default function Portada() {
  return (
    <div className="Portada grid grid-nogutter nested-grid bg-bluegray-800 border-round gap-3 p-3 relative"
      style={{ height: 'calc(100vh - 7rem)' }}>

      <div className='absolute w-10rem h-10rem bg-bluegray-100'
        style={{ borderRadius: '100%', left: '51rem', top: '10rem' }}></div>


      <section className='bg-bluegray-400 border-round col-6 grid grid-nogutter nested-grid justify-content-center align-content-center align-items-center'>
        <div className='col-10 bg-bluegray-200 border-round h-30rem p-3 grid grid-nogutter nested-grid justify-content-between'>

          <div className='w-full'>
            <h1 className='m-0 text-6xl w-full'>Somos tu puerta de acceso a Dubai</h1>
            <h4 className='m-0 w-full text-gray-500'>Se parte del HUB numero uno en negocios internacionales.</h4>
          </div>

          <div className='col-12 grid grid-nogutter nested-grid'>
            <div className='col-12' style={{ height: 'fit-content' }}>
              <Button label="Ver Mas" size='small' outlined className='text-yellow-500 py-3 px-6 mr-3' />
              <Button label="Buscar Servicios" size='small' className='bg-yellow-500 border-yellow-500 py-3 px-6' />
            </div>

            <div className='col-12 grid grid-nogutter nested-grid gap-3 h-auto'>
              <div className='col border-round bg-bluegray-300 border-white border-1 grid grid-nogutter nested-grid px-3 py-2 ' style={{ height: 'fit-content' }}>
                <p className='m-0 col-12 font-semibold text-white text-5xl'>200+</p>
                <span className='text-gray-500 text-xs font-light col-12'>Clientes Felices</span>
              </div>


              <div className='col border-round bg-bluegray-300 border-white border-1 grid grid-nogutter nested-grid px-3 py-2 ' style={{ height: 'fit-content' }}>
                <p className='m-0 col-12 font-semibold text-white text-5xl'>10k+</p>
                <span className='text-gray-500 text-xs font-light col-12'>Servicios Aplicados</span>
              </div>

              <div className='col border-round bg-bluegray-300 border-white border-1 grid grid-nogutter nested-grid px-3 py-2 ' style={{ height: 'fit-content' }}>
                <p className='m-0 col-12 font-semibold text-white text-5xl'>16+</p>
                <span className='text-gray-500 text-xs font-light col-12'>Años De Experiencia</span>
              </div>

            </div>
          </div>
        </div>
      </section >
      <section className='bg-bluegray-400 border-round col'></section>

    </div >
  );
};