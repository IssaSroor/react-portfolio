import React from 'react';
import '../styles/style.css';

const projects = [
  {
    imgSrc: 'images/steamProject.png',
    tech: 'HTML5, CSS3, JS',
    title: 'Steam Project',
    link: 'https://github.com/shahedaltrakiah/SteamProject.github.io.git',
  },
  {
    imgSrc: 'images/revolyCake.png',
    tech: 'HTML5, CSS3, PHP',
    title: 'Revoly Cake',
    link: 'https://github.com/IssaSroor/cakeProject.git',
  },
  {
    imgSrc: 'images/uniqueStore.png',
    tech: 'Laravel, React',
    title: 'Unique Store',
    link: 'https://github.com/shahedaltrakiah/UniqueProject.git',
  },
];

const Projects = () => (
  <div className="parent-three" id="projects">
    <div className="projects-title">
      <h2>PROJECTS</h2>
    </div>
    <div className="projects-items">
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <img src={project.imgSrc} alt="project-img" />
          <div className='project-details'>
          <p>{project.tech}</p>
          <h4>{project.title}</h4>
          <button className="project-item-btn">
            <a href={project.link} target='blank'>GitHub</a>
          </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
