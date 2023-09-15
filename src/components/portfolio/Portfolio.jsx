import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Resume(CV)',
    github: 'https://github.com/fw-lade/Resume',
    demo: 'https://fw-lade.github.io/Resume/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Budget Monitoring App',
    github: 'https://github.com/fw-lade/Budget-Monitoring-App',
    demo: 'https://naija-budget.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Task Tracker App',
    github: 'https://github.com/fw-lade/Track-yourTask',
    demo: 'https://track-yourtasks.netlify.app/',
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, title, image, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target='_blank'>Github</a>
              <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        }
       )}     


      </div>
    </section>
  )
}

export default Portfolio