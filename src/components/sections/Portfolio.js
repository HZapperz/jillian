import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.altText} />
                <div className="project-overlay">
                  <Link 
                    to={project.link} 
                    className="btn view-details-btn"
                  >
                    View Details
                  </Link>
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