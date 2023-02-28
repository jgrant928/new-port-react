import React from 'react';
import MyPDF from '../files/2021_resume_ncunanan.pdf';


function Resume() {
  
  return (
    <div>
      <h1>Resume</h1>
      <p>Download <a href={MyPDF} download="My_File.pdf">Resume. </a></p>
      
      <section>
        <h5>Front-End Proficiencies:</h5>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Responsive Design</li>
          <li>jQuery</li>         
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </section>
      <section>
        <h5>Back-End Proficiencies:</h5>
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
  )
}

export default Resume;
