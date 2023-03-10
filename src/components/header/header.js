import React from 'react';
import Nav from '../nav/Nav';
import './header.css'


function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
    aboutSelected,
    setAboutSelected,
  } = props;

  return (
    <header>
      <h1>
      <a href="#home">John Grant</a>
      </h1>
      <Nav categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        ></Nav>
        
    </header>
  );
}

export default Header;