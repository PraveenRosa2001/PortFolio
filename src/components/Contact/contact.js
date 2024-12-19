import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import React Icons
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5hdokac', 'template_i4j7fn5', form.current, {
        publicKey: 'k3Y4sVLkESb1uC4jc',
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="Projects">
        <h2 className="contactPageTitle">Latest Projects</h2>
        <p className="clientsDesc">
          I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with include:
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Walmart" className="clientImg" />
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" />
          <input type="email" className="email" placeholder="Your Email" name="your_email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" value="Send" className="submitBtn">Submit</button>
          <div className="links">
            <a href="https://www.facebook.com/praveen.rosa.39/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="link" />
            </a>
            <a href="https://x.com/PravDil2001" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="link" />
            </a>
            <a href="https://www.youtube.com/@ThishmiAmaya" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="link" />
            </a>
            <a href="https://www.instagram.com/mr.pd_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
