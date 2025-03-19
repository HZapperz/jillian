import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './ProjectStyles.css';

const HummingbirdProject = () => {
  return (
    <div className="project-detail-container">
      <div className="project-header">
        <div className="container">
          <h1>Hummingbird</h1>
          <h2>A Solo Travel App</h2>
        </div>
      </div>

      <div className="project-content">
        <div className="container">
          <Link to="/portfolio" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
          </Link>
          
          <section className="project-section">
            <h3>Project Overview</h3>
            <p>
              Solo travelers often feel unsafe and struggle to find compatible travel companions in unfamiliar areas, 
              impacting their overall solo travel experience. To address this challenge, the project focused on creating Hummingbird, 
              a mobile app designed to facilitate safe connections between solo travelers with shared interests and destinations. 
              Through background checks and safety features, Hummingbird aims to provide a platform where solo travelers can 
              confidently connect with suitable travel buddies.
            </p>
            
            <div className="project-meta">
              <div className="meta-item">
                <h4>Tools Used</h4>
                <p>Figma, Figjam, Whimsical, Trello</p>
              </div>
              <div className="meta-item">
                <h4>Time & Scope</h4>
                <p>2 Weeks</p>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h3>Responsibilities</h3>
            <p>
              As the lead designer in this project, I collaborated with two other team members to conduct user research and testing, 
              gaining insights into solo travelers' needs. Developed wireframes and iteratively designed the app interface. 
              Created a mid-fidelity clickable prototype to demonstrate app functionality. Incorporated feedback from testing sessions 
              and stakeholders throughout the process to refine the design effectively.
            </p>
          </section>

          <section className="project-section">
            <h3>Phase 1 - User Research</h3>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Key User Insights" />
              <p className="image-caption">Key User Insights</p>
            </div>
            
            <p>
              During Phase 1 of the project, the focus was on conducting thorough user research to understand solo travelers' needs and preferences. 
              This involved creating an interview plan and conducting interviews to gather insights into various travel styles and preferences.
            </p>
          </section>

          <section className="project-section">
            <h3>Phase 2 - Definition & Ideation</h3>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Prioritization Matrix" />
              <p className="image-caption">Prioritization Matrix</p>
            </div>
            
            <p>
              Phase 2 of the project was focused on refining the project scope and generating innovative solutions to address user needs. 
              Following brainstorming sessions, I took the lead in creating a feature prioritization matrix to evaluate the cost and impact of potential solutions.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Snippet of User Story" />
              <p className="image-caption">Snippet of User Story</p>
            </div>
            
            <p>
              I then created a storyboard to provide a visual narrative of the user's journey with the product, 
              mapping out their interactions from start to finish. These efforts laid a solid foundation for the subsequent 
              design and development phases of the project.
            </p>
          </section>

          <section className="project-section">
            <h3>Phase 3 - Prototyping</h3>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="User Flow" />
              <p className="image-caption">User Flow</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x300" alt="Snippet of User Flow" />
              <p className="image-caption">Snippet of User Flow</p>
            </div>
            
            <p>
              I began by creating and iterating a user flow, outlining the sequential actions a user would take within the app. 
              While doing this, I gained a deeper understanding of the app's navigation structure and user journey, facilitating more informed design decisions.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Paper Wireframe" />
              <p className="image-caption">Paper Wireframe</p>
            </div>
            
            <p>
              Concurrently, I brainstormed and sketched out the necessary screens for the app's interface, 
              ensuring a clear visualization of the design direction.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Hummingbird Onboarding (Mid-Fi)" />
              <p className="image-caption">Hummingbird Onboarding (Mid-Fi)</p>
            </div>
            
            <p>
              Transitioning to digital tools, I crafted a mid-fidelity prototype using Whimsical, streamlining the design process. 
              Being my first time working on a UI/UX design project, creating a mid-fidelity prototype in Whimsical allowed me to 
              efficiently iterate on design concepts and visualize the app's layout and functionality before committing to high-fidelity designs. 
              This process also enabled me to identify design flaws early on, refine user interactions, and streamline the overall user experience effectively.
            </p>
            
            <p>
              Subsequently, I transferred the prototype to Figma, enhancing its interactivity by making it clickable, 
              allowing for seamless user navigation and testing. This phase marked a crucial step in the development process, 
              bringing the app concept closer to reality and facilitating further refinement based on user feedback.
            </p>
          </section>

          <section className="project-section">
            <h3>Final Thoughts</h3>
            <p>
              In the concluding phase of the project, a comprehensive review was conducted to assess the overall progress 
              and identify potential areas for enhancement. This involved scrutinizing the prototype's functionality and 
              design elements to ensure alignment with project objectives and user needs.
            </p>
            <p>
              Additionally, an exploration of final opportunities was undertaken to uncover possibilities for future iterations 
              or feature enhancements. By leveraging insights gained throughout the project lifecycle, valuable lessons were extracted, 
              providing a foundation for continued innovation and refinement in subsequent iterations.
            </p>
            
            <h4>Future Opportunities</h4>
            <ul>
              <li>
                <strong>Integration of Additional Safety Features:</strong>
                Improve user trust and security by incorporating optional but robust safety features during onboarding, 
                such as two-factor authentication, emergency contact sharing, and location tracking with user consent.
              </li>
              <li>
                <strong>Gamification Elements:</strong>
                Introduce gamification elements within the app to incentivize user engagement and participation, 
                such as achievement badges, leaderboards, or rewards for active participation in community events and interactions.
              </li>
            </ul>
          </section>

          <div className="project-footer">
            <h3>Thank you for your time!</h3>
            <div className="other-projects">
              <h4>Other projects:</h4>
              <div className="project-links">
                <Link to="/projects/getgolden">GetGolden</Link>
                <Link to="/projects/swap">Swap</Link>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://linkedin.com/in/jillianhohman" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
              <span>Made in Webflow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HummingbirdProject; 