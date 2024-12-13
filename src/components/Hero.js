import React from 'react';
import '../styles/style.css';

const Hero = () => (
  <div className="div-hero">
    <div className="per-Image">
      <img src="images/personalImage.png" alt="personal image" />
    </div>
    <div className="intro">
      <div className="hi">
        <p id="typewriter">
          <b>Hi, I am </b><br />
          <h1>Issa Sroor</h1>
          <span style={{ color: 'gray' }}>Full-Stack Developer</span>
        </p>
      </div>
      <div className="icon">
        <button className="icon-frame">
          <a style={{ color: '#000' }} href="mailto:issasroorofficial@gmail.com">
            <i className="fa-solid fa-at"></i>
          </a>
        </button>
        <button className="icon-frame">
          <a style={{ color: '#000' }} href="https://github.com/IssaSroor">
            <i className="fa-brands fa-github"></i>
          </a>
        </button>
        <button className="icon-frame">
          <a style={{ color: '#000' }} href="https://www.linkedin.com/in/issa-sroor-828217235/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </button>
      </div>
    </div>
  </div>
);

export default Hero;
