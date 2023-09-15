import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bello-ololade-85b033233" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/fw-lade" target='_blank'><FaGithub /></a>
        <a href="https://instagram.com/lade.xy?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank'><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials