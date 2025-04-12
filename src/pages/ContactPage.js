import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>You can contact me through my email or phone number:</p>

      <div className="contact-info">
        <a href="mailto:erolerutik9@gmail.com" className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h3>erolerutik9@gmail.com</h3>
        </a>

        <a href="tel:+918652677526" className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <h3>+91 8652677526</h3>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
