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
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/issa-m-sroor-828217235/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <i className="fab fa-linkedin"></i>
        LinkedIn
      </a>
    </div>
  </div>
</div>

);

export default Hero;
