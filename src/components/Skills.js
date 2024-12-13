import React from 'react';
import '../styles/style.css';

const skills = [
  { src: 'images/Group 12.png', alt: 'html-logo', name: 'HTML5' },
  { src: 'images/Group 13.png', alt: 'css-logo', name: 'CSS3' },
  { src: 'images/Group.png', alt: 'js-logo', name: 'JavaScript' },
  { src: 'images/git.png', alt: 'github-logo', name: 'GitHub' },
  { src: 'images/figma.png', alt: 'figma-logo', name: 'Figma' },
  { src: 'images/PHP.jpg', alt: 'PHP-logo', name: 'PHP' },
  { src: 'images/laravel.jpg', alt: 'laravel-logo', name: 'laravel' },
  { src: 'images/Group 14.png', alt: 'react-logo', name: 'React' },
  { src: 'images/Vector (1).png', alt: 'sql-logo', name: 'SQL' },
];

const Skills = () => (
  <div className="parent-two" id="skills">
    <div className="skills-title">
      <h2>SKILLS</h2>
    </div>
    <div className="skills-items">
      {skills.map((skill, index) => (
        <div key={index}>
          <img src={skill.src} alt={skill.alt} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
