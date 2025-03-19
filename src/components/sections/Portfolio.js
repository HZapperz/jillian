import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleSelectProject = (index) => {
    setSelectedProject(index);
    
    // Optionally, scroll to the project card for mobile users
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards[index]) {
      projectCards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className="featured-project">
          {selectedProject !== null && (
            <div className="featured-card">
              <div className="featured-image">
                <img src={projects[selectedProject].image} alt={projects[selectedProject].altText} />
              </div>
              <div className="featured-content">
                <h3>{projects[selectedProject].title}</h3>
                <p className="featured-description">{projects[selectedProject].description}</p>
                <p className="featured-role"><strong>Role:</strong> {projects[selectedProject].role}</p>
                <div className="featured-tools">
                  <strong>Tools:</strong>
                  <div className="tools-list">
                    {projects[selectedProject].tools.map((tool, i) => (
                      <span key={i} className="tool-item">{tool}</span>
                    ))}
                  </div>
                </div>
                <Link to={projects[selectedProject].link} className="btn view-details-btn">
                  View Project Details
                </Link>
              </div>
            </div>
          )}
          {selectedProject === null && (
            <div className="no-selection">
              <p>Select a project below to see more details</p>
            </div>
          )}
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className={`project-card ${selectedProject === index ? 'selected' : ''}`} 
              key={project.id}
              onClick={() => handleSelectProject(index)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.altText} />
                <div className="project-overlay">
                  <span className="view-project">View Project</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 