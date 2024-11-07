import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import './ContactUs.css';
import NavBar from '../../components/NavBar/NavBar';
import CustomDivider from '../../utils/Divider/CustomDivider/CustomDivider';
import { Toast } from 'primereact/toast';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const toast = useRef(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
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
    if (!isFormComplete) return;

    emailjs.send(
      'service_bzybkt4',
      'template_ryg77db',
      {
        user_name: formData.fullName,
        user_email: formData.email,
        message: formData.message,
      },
      'iLrqW7rFdKP20vKjx'
    )
      .then(response => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Email sent successfully' });
        setFormData({ fullName: '', email: '', message: '' });
      })
      .catch(err => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to send email' });
      });
  };

  const isFormComplete = formData.fullName && formData.email && formData.message && isEmailValid;

  const handleToInsta = () => {
    window.open('https://www.instagram.com/popladubai/', '_blank');
  };

  return (
    <div className="ContactUs grid grid-nogutter nested-grid justify-content-center align-content-center gap-1 my-4"
      style={{ minHeight: "calc(100vh - 50px)" }}
    >
      <nav className="col-12 border-round mb-8">
        <NavBar />
      </nav>

      <div className='col-10 grid grid-nogutter nested-grid gap-3'>
        <section className="col-12 md:col-5 flex align-items-center">
          <div className="w-full px-4 md:px-6 grid grid-nogutter nested-grid justify-content-start align-items-center border-round">
            <p className='w-full flex gap-3 align-items-center text-white'><i className='text-js-yellow pi pi-map-marker'></i>Opus Tower, C101, Business Bay. Dubai, UAE</p>
            <p className='w-full flex gap-3 align-items-center text-white'><i className='text-js-yellow pi pi-phone'></i>+971 585661300</p>
            <p className='w-full flex gap-3 align-items-center text-white'><i className='text-js-yellow pi pi-envelope'></i>patricio@poplavskydubaioffices.com</p>
            <p className='w-full flex gap-3 align-items-center text-white cursor-pointer' onClick={handleToInsta}><i className='text-js-yellow pi pi-instagram'></i>Follow us @poplavsky</p>
          </div>
        </section>

        <section className="col-12 md:col border-round bg-trl-blue border-1 border-js-yellow">
          <div className="w-full px-4 md:px-6 grid grid-nogutter nested-grid justify-content-start align-items-center border-round">
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
      <Toast ref={toast} />
    </div>
  );
}
