import React from 'react';
import '../styles/style.css';

const Header = () => (
  <div className="div-nav">
    <div className="logo-div">
      <img src="images/logo.png" alt="logo" />
    </div>
    <div className="list-div" id="top">
      <ul className="list">
        <li className="list-items"><a href="#about">About</a></li>
        <li className="list-items"><a href="#skills">Skills</a></li>
        <li className="list-items"><a href="#projects">Projects</a></li>
        <li className="list-items"><a href="#contact">Contact me</a></li>
      </ul>
    </div>
  </div>
);

export default Header;
