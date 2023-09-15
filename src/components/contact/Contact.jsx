import React from 'react'
import './contact.css'
import { MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qh543an', 'template_1awstp9', form.current, 'd4XaxNEsPTJRQXMkr')

    e.target.reset()
  };
  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>b.ololade03@gmail.com</h5>
            <a href="mailto:b.ololade03@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <FaInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>@lade.xy</h5>
            <a href="https://ig.me/m/lade.xy" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <MdOutlineWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+2348098765428</h5>
            <a href="https://api.whatsapp.com/send?phone=2348098765428" target='_blank'>Send a Message</a>
            {/* https://wa.link/7c6kih */}
          </article>
        </div>

        {/* END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact