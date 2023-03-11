import React from 'react';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        <h1>John Grant</h1>
        <h5 className="text-light">Fullstack Developer</h5>
      </div>
    </header>
  )
}

export default Header