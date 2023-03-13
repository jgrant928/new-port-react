import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Footer from './components/footer/Footer'
import { useState } from 'react';



function App() {
  const categories = [];
  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  
  return (
    <div>
      <Header 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        ></Header>
      <main>
        <div>
        {!contactSelected && !resumeSelected && !aboutSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
          </>
        ) : !contactSelected && !aboutSelected ? (
          <Resume></Resume>
        ): !aboutSelected ? (
          <Contact></Contact>
        ): (
        <About></About>)}
        </div>
      </main>
        <Footer></Footer>

    </div>
  );
}


export default App
