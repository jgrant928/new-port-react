import React from 'react';
import './nav.css';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
    aboutSelected,
    setAboutSelected
  } = props;
  

  return (
<nav>
      <ul className="flex-row">
        {categories.map((category) => (
          <li className={`mx-1 ${currentCategory === category && !contactSelected && !resumeSelected && !aboutSelected && 'navActive'}`} key={category}>
            <span onClick={() => {
              setCurrentCategory(category);
              setContactSelected(false);
              setResumeSelected(false);
              setAboutSelected(false);
            }}>
              {category}
            </span>
          </li>
        ))}
        <li className="nav-buttons">
            <span onClick={() => {
              setAboutSelected(true);
              setContactSelected(false);
              setResumeSelected(false);
              }} className={`${aboutSelected && 'navActive'}`}>About Me</span>
        </li>
        <li className="mx-2">
            <span onClick={() => {
              setContactSelected(true);
              setAboutSelected(false);
              setResumeSelected(false);
              }} className={`${contactSelected && 'navActive'}`}>Contact</span>
        </li>
        <li className="mx-2">
            <span onClick={() => {
              setResumeSelected(true);
              setAboutSelected(false);
              setContactSelected(false);}} className={`${resumeSelected && 'navActive'}`}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;