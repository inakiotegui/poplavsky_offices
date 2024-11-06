import React from "react";
import "./FooterEnlaces.css";
import logo from '../../assets/logos/popOffices-logo.png';


export default function FooterEnlaces() {
  return (
    <div className="grid grid-nogutter col-12 text-sm justify-content-center mt-4 p-0 text-white">
      <div className="flex flex-column md:flex-row w-10 h-auto md:h-15rem align-items-start text-left m-0 p-0">
        <div className='flex justify-content-center align-items-center h-6rem w-full md:w-3 fadeinup animation-duration-200 animation-iteration-1 cursor-pointer'>
          <img src={logo} className='w-4rem md:w-2rem' alt="Pop Offices Logo" />
          <div className='hidden h-full md:flex flex-column justify-content-center align-items-center'>
            <p className='m-0 uppercase text-gray-200 white-space-nowrap' style={{ fontSize: '.5rem', letterSpacing: '2px' }}>Poplavsky</p>
            <p className='m-0 uppercase text-gray-200 white-space-nowrap' style={{ fontSize: '.30rem', letterSpacing: '2px' }}>International Offices</p>
            <p className='m-0 uppercase text-js-yellow white-space-nowrap' style={{ fontSize: '.25rem', letterSpacing: '2px' }}>DUBAI - UAE</p>
          </div>
          <div className='flex h-full md:hidden flex-column justify-content-center align-items-center'>
            <p className='m-0 uppercase text-gray-200 white-space-nowrap' style={{ fontSize: '.8rem', letterSpacing: '2px' }}>Poplavsky</p>
            <p className='m-0 uppercase text-gray-200 white-space-nowrap' style={{ fontSize: '.50rem', letterSpacing: '2px' }}>International Offices</p>
            <p className='m-0 uppercase text-js-yellow white-space-nowrap' style={{ fontSize: '.45rem', letterSpacing: '2px' }}>DUBAI - UAE</p>
          </div>
        </div>

        <div className="flex flex-column w-full md:w-3 align-items-start m-2">
          <p className="urbanist-medium m-1 mb-2 text-base text-gray-400">
            Home
          </p>
          <div className="m-1 text-sm">
            <p>Hero</p>
            <p>Prensa</p>
            <p>FAQ´s</p>
          </div>
        </div>

        <div className="flex flex-column w-full md:w-3 align-items-start m-2">
          <p className="urbanist-medium m-1 mb-2 text-base text-gray-400">
            About Us
          </p>
          <div className="m-1 text-sm">
            <p>-----</p>
            <p>-----</p>
            <p>-----</p>
          </div>
        </div>

        <div className="flex flex-column w-full md:w-3 align-items-start m-2">
          <p className="urbanist-medium m-1 mb-2 text-base text-gray-400">
            Services
          </p>
          <div className="m-1 text-sm">
            <p>-----</p>
            <p>-----</p>
            <p>-----</p>
            <p>-----</p>
            <p>-----</p>
          </div>
        </div>

        <div className="flex flex-column w-full md:w-3 justify-content-start items-center m-2">
          <p className="urbanist-medium m-1 mb-2 text-base text-gray-400">
            Contact Us
          </p>
          <div className="m-1 text-sm">
            <p>Contact Form</p>
            <p>Our Offices</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-content-around border-round w-full p-0 bg-black-alpha-60">
        <div className="flex flex-column md:flex-row justify-content-center align-content-start md:align-items-center gap-2 md:gap-3 p-4">
          <p className="text-lefttext-sm m-0">
            ©2024 Poplavsky. Todos los derechos reservados.
          </p>
          <p className="text-lefttext-sm m-0">Términos y condiciones</p>
        </div>
        <div className="flex flex-row justify-content-center align-items-center gap-2 md:gap-3 p-4">
          <div>
            <i
              className="cursor-pointer pi pi-facebook pr-1"
              style={{ fontSize: "1rem" }}
            ></i>
          </div>
          <div>
            <i
              className="cursor-pointer pi pi-twitter pr-1"
              style={{ fontSize: "1rem" }}
            ></i>
          </div>
          <div>
            <i
              className="cursor-pointer pi pi-linkedin pr-1"
              style={{ fontSize: "1rem" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
