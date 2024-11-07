import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import './ContactUs.css';
import NavBar from '../../components/NavBar/NavBar';
import CustomDivider from '../../utils/Divider/CustomDivider/CustomDivider';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validar formato de email si el campo es 'email'
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(value));
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí podrías manejar el envío de datos (ej: enviar a un servidor)
  };

  // Verificar si todos los campos tienen valores y el email es válido
  const isFormComplete = formData.fullName && formData.email && formData.message && isEmailValid;

  return (
    <div className="ContactUs grid grid-nogutter nested-grid justify-content-center align-content-center gap-1"
      style={{ minHeight: "calc(100vh - 50px)" }}
    >
      <nav className="col-12 border-round mb-8">
        <NavBar />
      </nav>

      <section className="col-11 md:col-6 border-round bg-trl-blue border-1 border-js-yellow">
        <div className="w-full px-4 md:px-6 grid grid-nogutter nested-grid justify-content-start align-items-center  border-round">
          <div>
            <CustomDivider />
            <h2 className="text-white text-2xl md:text-4xl m-2">Contact Us</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form py-4 flex flex-column align-content-center">
          <div className="field px-4">
            <label className='text-white' htmlFor="fullName">Full Name</label>
            <InputText
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full"
            />
          </div>
          <div className="field px-4">
            <label className='text-white' htmlFor="email">Email</label>
            <InputText
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full"
            />
            {!isEmailValid && <small className="p-error">Please enter a valid email address.</small>}
          </div>
          <div className="field px-4">
            <label className='text-white' htmlFor="message">Message</label>
            <InputTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows={5}
              className="w-full"
            />
          </div>
          <div className='px-4'>
            <Button
              type="submit"
              label="Send Message"
              className="mt-4 w-full"
              disabled={!isFormComplete}
            />
          </div>
        </form>
      </section>
    </div>
  );
}
