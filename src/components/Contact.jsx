import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>Get in touch with us</p>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon">✉️</span>
          <a href="mailto:info@fossmeet.net">info@fossmeet.net</a>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <a href="tel:+919400430812">+91 94004 30812</a>
        </div>
      </div>
      <div className="social-media">
        <a href="#" className="social-icon">Telegram</a>
        <a href="#" className="social-icon">Instagram</a>
        <a href="#" className="social-icon">Twitter</a>
        <a href="#" className="social-icon">Mastodon</a>
        <a href="#" className="social-icon">LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;
