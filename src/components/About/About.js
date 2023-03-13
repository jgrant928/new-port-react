import React from 'react'
import './about.css'
import ME from '../../assets/avatar-pic-2.jpg'


const About = () => {
  return (
    <section className='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          </div>
        </div>

        <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        <div className="about__content">
          <h3> My name is John Grant and I am a content strategist, designer, writer and full-stack developer      
        </h3>
      </div>
      </div>
    </section>
  )
}

export default About