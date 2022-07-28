import React from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import {MdOutlineEmail} from 'react-icons/md';
import {BsTelephone} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v10yxch', 'template_o0q54zp', form.current, 'z25wWsHDBD9nfkFed')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>lukakavtaradze<br />@gmail.com</h5>
              <a href="mailto:lukakavtaradze@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
              <BsTelephone className='contact__option-icon'/>
              <h4>Telephone</h4>
              <h5>+995 555 702 988</h5>
              <a href="tel:+995555702988" target="_blank">Make a call</a>
            </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact