import React from 'react';
import photo from '../../assets/images/photo.jpg';

function About() {
    return (
        <section>
            <div className="aboutMe">
                <h2 id="about">About Me</h2>
                <p>I am a website developer and content strategist who has been building websites for the past 7 years</p>
                <img src={photo} alt="A photo of me" className="myPhoto" />
            </div>
        </section>
    )
};

export default About;