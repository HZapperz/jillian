import React, { Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import AvatarScene from '../three/AvatarScene';
import './About.css';

const About = () => {
  const skills = [
    'Adobe XD', 'Figma', 'Sketch', 'User Research', 
    'Wireframing', 'Prototyping', 'Visual Design'
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <Suspense fallback={<div className="avatar-loading">Loading avatar...</div>}>
              <AvatarScene />
            </Suspense>
            
            <p className="about-intro">
              I'm a passionate UI/UX designer with experience from my internship at <span>[Previous Company Name]</span>. 
              I specialize in creating intuitive, user-friendly designs.
            </p>
            
            <div className="about-education">
              <h3>Education</h3>
              <p>B.Sc. in Design, <span>[University Name]</span></p>
            </div>
            
            <div className="about-links">
              <a 
                href="/files/resume.pdf" 
                className="btn" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDownload} className="icon" />
                Download Resume
              </a>
              <a 
                href="https://linkedin.com/in/jillianhohman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" />
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 