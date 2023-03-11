import React from 'react'
import './about.css'


const About = () => {
  return (
    <section className='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          </div>
        </div>

        <div className="about__content">
          <p>
          My name is John Grant and I am a content strategist, designer, writer and full-stack developer          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect!</a>
        </div>
      </div>
    </section>
  )
}

export default About