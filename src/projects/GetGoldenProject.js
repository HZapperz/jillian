import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import './ProjectStyles.css';

const GetGoldenProject = () => {
  return (
    <div className="project-detail-container">
      <div className="project-navigation">
        <div className="container">
          <div className="project-nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <Link to="/portfolio" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
          </Link>
        </div>
      </div>

      <div className="project-header">
        <div className="container">
          <h1>GetGolden</h1>
          <h2>A Social Media Platform for Perennials</h2>
        </div>
      </div>

      <div className="project-content">
        <div className="container">
          <section className="project-section">
            <h3>Project Overview</h3>
            <p>
              GetGolden is a mobile app concept aimed at addressing the digital divide among seniors, 
              fostering inclusivity and combating loneliness in this demographic. 
              GetGolden endeavors to enrich the lives of seniors by facilitating meaningful connections 
              and engagements within their communities.
            </p>
            
            <div className="project-meta">
              <div className="meta-item">
                <h4>Tools Used</h4>
                <p>Figma, Figjam, Trello, Whimsical</p>
              </div>
              <div className="meta-item">
                <h4>Time & Scope</h4>
                <p>1-2 Weeks</p>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h3>Roles and Responsibilities</h3>
            <p>
              Team Members - Jillian Hohman, Thomas Turner, and Jordyn Patterson
            </p>
            <p>
              I played a central role as a user researcher and in designing the information architecture, 
              organizing content in a logical manner to enhance user navigation and experience. 
              This involved creating user flows and developing low-fidelity wireframes to facilitate 
              collaborative design discussions and ensure a user-centered approach at every stage of the project.
            </p>
          </section>

          <section className="project-section">
            <h3>Phase 1 - User Research</h3>
            <p>
              I conducted interviews and surveys with older adults, aiming to understand their technological needs 
              and preferences, ultimately identifying "perennial" as the most resonant term.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Key Interview Insights" />
              <p className="image-caption">Key Interview Insights</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Affinity Diagram" />
              <p className="image-caption">Affinity Diagram</p>
            </div>
            
            <p>
              By clustering related observations and themes from our interviews, we gained a deeper understanding 
              of user needs and pain points, guiding our design decisions effectively.
            </p>
          </section>

          <section className="project-section">
            <h3>Phase 2 - Definition and Ideation</h3>
            <p>
              Devising a defined problem statement based on insights derived from user interviews proved 
              instrumental in aligning our design efforts with the genuine needs and pain points of our users, 
              ensuring that our solutions were purposeful, and directly treated their most pressing concerns.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Defined Problem Statement" />
              <p className="image-caption">Defined Problem Statement</p>
            </div>
            
            <p>
              Crafting a feature prioritization matrix helped us to systematically evaluate and rank 
              potential features based on their impact and feasibility, ensuring that our efforts were 
              focused on the most critical aspects of the product.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Feature Prioritization Matrix" />
              <p className="image-caption">Feature Prioritization Matrix</p>
            </div>
          </section>

          <section className="project-section">
            <h3>Phase 3 - Design & Prototyping</h3>
            <p>
              Forming a user flow before designing our wireframes provided a roadmap of the user's journey, 
              helped anticipate interactions and enhance the functional intuitiveness of our designs.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="User Flow" />
              <p className="image-caption">User Flow</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x300" alt="Snippet of User Flow" />
              <p className="image-caption">Snippet of User Flow</p>
            </div>
            
            <p>
              We then each created our own lo-fi prototypes to explore a range of design ideas efficiently, 
              enabling rapid iteration and feedback, ultimately leading to more measured, user-friendly solutions. 
              Opting for Whimsical over Figma for my lo-fi prototype allowed me to focus on conveying user flow effectively, 
              leveraging its built-in components to prioritize clarity and coherence over intricate design details.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Jillian's Lo-fi Prototype" />
              <p className="image-caption">Jillian's Lo-fi Prototype</p>
            </div>
            
            <p>
              In our final prototype, artfully crafted by Thomas, we harmoniously blended the most impactful 
              design elements discovered through extensive user testing, resulting in a cohesive and deeply user-centric solution.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="GetGolden Hi-fi Onboarding" />
              <p className="image-caption">GetGolden Hi-fi Onboarding</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="GetGolden Hi-fi Activity Form" />
              <p className="image-caption">GetGolden Hi-fi Activity Form</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="GetGolden Hi-fi Screens" />
              <p className="image-caption">GetGolden Hi-fi Screens</p>
            </div>
          </section>

          <section className="project-section">
            <h3>Conclusion</h3>
            <p>
              Looking ahead, GetGolden has boundless potential for expansion and enhancement, 
              with a range of future opportunities poised to further enrich the lives of seniors.
            </p>
            
            <h4>Future Opportunities</h4>
            <ul>
              <li>
                <strong>Audio Messages for Easier Communication:</strong> Introducing audio messaging functionality 
                to GetGolden offers perennials a convenient and accessible way to connect with their peers, 
                particularly those with physical challenges like arthritis, who may find typing difficult. 
                By enabling voice-based communication, GetGolden fosters more meaningful social interactions 
                and reduces the risk of isolation, promoting a sense of community and belonging among users.
              </li>
              <li>
                <strong>Integrated Lifestyle Services:</strong> By integrating essential services such as grooming, 
                pet care, transportation, and personal shopping, etc. directly into the GetGolden app, 
                perennials can access these vital resources with ease, simplifying their daily lives and enhancing 
                their independence. This holistic approach not only addresses the diverse needs of seniors but 
                also promotes a sense of convenience and security, empowering them to live life on their own terms.
              </li>
              <li>
                <strong>Interactive Mental Health Check-ins and Guided Journaling:</strong> Implementing engaging 
                mental health check-ins and guided journaling options within GetGolden provides seniors with 
                valuable tools for managing their emotional well-being and fostering a sense of connection with their peers.
              </li>
            </ul>
            
            <h4>Insights Gained</h4>
            <p>
              In the journey of developing this project, I delved deeply into the realm of information architecture, 
              honing my skills in crafting intuitive user flows to ensure a seamless and effortless user experience. 
              Through meticulous planning and iterative refinement, I discovered the importance of organizing content 
              in a logical and user-centric manner, enhancing usability and navigation throughout the application.
            </p>
            <p>
              Furthermore, my exploration into user research methodologies expanded my understanding of gathering 
              valuable insights to inform design decisions. By leveraging diverse platforms such as surveys and polls, 
              I uncovered nuanced user preferences and behaviors, enabling me to tailor the product to meet their needs effectively. 
              This hands-on experience not only enriched my knowledge of user-centric design principles but also equipped me 
              with practical strategies for maximizing the impact of user research in shaping meaningful and impactful user experiences.
            </p>
          </section>

          <div className="project-footer">
            <h3>Thank you for your time!</h3>
            <div className="other-projects">
              <h4>Other projects:</h4>
              <div className="project-links">
                <Link to="/projects/hummingbird">Hummingbird</Link>
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

export default GetGoldenProject; 