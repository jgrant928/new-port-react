import React from 'react';
import './resume.css';
import MyPDF from '../../assets/My_Resume.pdf';


export const Resume = () => {
  
  return (
    <section>
    <div className='resume-section'>
      <h2>Resume</h2>
      <p>Download my<a href={MyPDF} download="My_Resume.pdf">resume. </a></p>
      
      <section>
        <h3>Front-End Proficiencies:</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </section>
      <section>
        <h3>Back-End Proficiencies:</h3>
        <ul className="proficiencies">
          <li>APIs</li>
          <li>Node JS</li>
          <li>Express</li>
          <li>mySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>React</li>
        </ul>
      </section>
    </div>
    </section>
  )
}

export default Resume;