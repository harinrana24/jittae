import React from 'react';
import { useRef } from 'react';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uf48xgt', 'template_nzneqxo', form.current, {
        publicKey: 'xP1_QEFyKfMSYxSWL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );e.target.reset()
  };
  return (
    <section id="contact" className="contact">
      <div className="contact-box">
        <div className="contact-links">
          <h2>CONTACT</h2>
          <div className="links">
            <div className="link">
              <a href='https://www.linkedin.com/in/j1t3sh/' target="_blank" ><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
            </div>
            <div className="link">
              <a href='https://github.com/j1t3sh' target="_blank" ><img  src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
            </div>
            <div className="link">
              <a href='https://www.instagram.com/jiteshkumarrr/' target="_blank"><img  src="https://i.postimg.cc/W4Znvrry/instagram.png" alt="instagram"/></a>
            </div>
            
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form  ref={form} onSubmit={sendEmail}  >
            <div className="form-item">
              <input type="text" name="user" required/>
              <label>Name:</label>
            </div>
            <div className="form-item">
              <input type="text" name="user_email" required/>
              <label>Email:</label>
            </div>
            <div className="form-item">
              <textarea className="" name="message" required></textarea>
              <label>Message:</label>
            </div>
            <button  className="submit-btn">Send</button>  
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
