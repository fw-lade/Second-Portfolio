import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineWhatsapp } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">OLOLADE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/bello-ololade-85b033233" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/fw-lade" target='_blank'><FaGithub /></a>
        <a href="https://instagram.com/lade.xy?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><FaInstagram /></a>
        <a href="https://api.whatsapp.com/send?phone=2348098765428"><MdOutlineWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; OLOLADE. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer