import React from 'react'
import './about.css'
import ME from '../../assets/about2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ completed projects</small>
            </article>
          </div>

          <p>
            Hello, I'm Bello Ololade Enoch, a dedicated Web Developer with a passion for both Front-end and Back-end Development.  <br />
            <b> Front-end Development:</b> I specialize in creating engaging and responsive web interfaces using HTML, CSS, Bootstrap, JavaScript, and React JS. 
            <b> Back-end Development:</b> I'm also skilled in Python and Django for building robust server-side solutions.
            I hold a Bachelor's degree in Computer Science from Caleb University, Lagos, providing me with a solid foundation and a thirst for knowledge. I'm driven to create innovative and impactful web solutions. 
            <br /> Explore my work to see my skills in action.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About