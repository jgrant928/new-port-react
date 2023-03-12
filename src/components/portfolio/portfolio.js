import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/BrewsNChews.png'
import IMG2 from '../../assets/getMoving.png'
import IMG3 from '../../assets/professionalPortfolio.png'
import IMG4 from '../../assets/QuarterArcade.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Brews 'N Chews: A Brewery and Restaurant Locator",
        github: 'https://github.com/mdh1080/Brews-and-Chews',
        demo: 'https://mdh1080.github.io/Brews-and-Chews/'
      },
      {
        id: 2,
        image: IMG2,
        title: "Get Moving! A Moving Checklist App",
        github: 'https://github.com/jicard/Project-3-Repo',
        demo: 'https://projectthreemern.herokuapp.com/'
      },
      {
        id: 3,
        image: IMG3,
        title: 'Professional Portfolio: HTML, CSS, and JavaScript',
        github: 'https://github.com/jgrant928/professional-portfolio',
        demo: 'https://jgrant928.github.io/Professional-Portfolio/'
      },
      {
        id: 4,
        image: IMG4,
        title: 'Quarter Arcade',
        github: 'https://github.com/galegro2022/Arcade-',
        demo: 'https://quarterarcade.herokuapp.com/login-signup'
      }
]

const Portfolio = () => {
    return (
      <section className='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
  
        <div className="container portfolio__container">
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
              )
            })
          }
        </div>
      </section>
    )
  }
  
  export default Portfolio