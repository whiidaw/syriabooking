import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contactus.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
     
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = 
      `New Contact Form Submission%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Message: ${formData.message}`;

    const phoneNumber = '963992957700';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_hih2cvb",     // Replace with your EmailJS service ID
      "template_p6l4xak",    // Replace with your template ID
      formData,
      '9mNU3GvRahaXf7Prg'         // Replace with your EmailJS public key (user ID)
    )
    .then((result) => {
      alert('Email sent successfully!');
    }, (error) => {
      alert('Failed to send email. Please try again later.');
      console.error(error);
    });
  };

  return (
    <div>
      <Navbar />
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>

        <div className="button-group">
          <button onClick={handleWhatsAppSubmit}>
            <svg className="whatsapp-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="..."/>
            </svg>
            Send via WhatsApp
          </button>

          <button onClick={handleEmailSubmit} type="button" className="email-button">
            📧 Send via Email
          </button>
        </div>
      </form>
    </div>
    
    <Footer />
    </div>
  );
};

export default ContactForm;
