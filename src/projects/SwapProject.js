import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import './ProjectStyles.css';

const SwapProject = () => {
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
          <h1>Swap</h1>
          <h2>An Online Trading Platform</h2>
        </div>
      </div>

      <div className="project-content">
        <div className="container">
          <section className="project-section">
            <h3>Project Overview</h3>
            <p>
              Swap is a dynamic trading platform designed to empower users to save money, reduce waste, and foster sustainable consumption habits. 
              This case study delves into crafting user-centric interfaces, streamlining navigation, and ensuring cross-platform responsiveness for web and mobile. 
              By prioritizing user convenience and environmental consciousness, Swap endeavors to revolutionize online shopping experiences while promoting a culture of resourcefulness and sustainability.
            </p>
            
            <div className="project-meta">
              <div className="meta-item">
                <h4>Tools Used</h4>
                <p>Figma, Figjam, Trello, Visual Studio Code</p>
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
              Team Members: Jillian Hohman, Ivana Milencovici, Erik Palacios
            </p>
            <p>
              In this project, I had the opportunity to contribute to user research through conducting interviews and creating surveys, 
              which provided essential insights for our design process. As the information architect, I crafted the user flow, ensuring intuitive navigation and seamless interaction paths. 
              Additionally, I took charge of designing the high-fidelity prototype in Figma, translating conceptual ideas into visually compelling and user-friendly interfaces.
            </p>
          </section>

          <section className="project-section">
            <h3>Phase 1 - User Research</h3>
            <p>
              Meet our ideal user persona: Kimberly Jackson, a 25-year-old graphic designer from Austin, Texas. 
              Kimberly epitomizes our user base, driven by a dual ambition to curtail waste and cultivate an eco-conscious lifestyle. 
              With Kimberly's profile as our guiding light, we embarked on a series of insightful interviews, seeking to deepen our understanding and refine Swap's user experience.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="User Persona - Kimberly Jackson" />
              <p className="image-caption">User Persona - Kimberly Jackson</p>
            </div>
            
            <p>
              We introduced a chat feature for seamless communication, enabling trust and smooth transactions. 
              To enhance local engagement, we added a feature to connect with nearby traders, promoting convenience and community interaction. 
              To ensure safety, we established a dedicated moderation team to protect user experiences and maintain platform integrity.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Key Interview Findings" />
              <p className="image-caption">Key Interview Findings</p>
            </div>
          </section>

          <section className="project-section">
            <h3>Phase 2 - Definition & Ideation</h3>
            <p>
              That leads to our problem statement, rampant spending and waste exacerbate environmental degradation and financial burdens. 
              Swap aims to tackle these issues by establishing an online trading platform that facilitates direct exchange of goods without monetary transactions. 
              By doing so, Swap promotes sustainability, enables cost savings, and actively reduces waste, aligning with our vision of fostering a more environmentally conscious and financially responsible society.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Problem Statement" />
              <p className="image-caption">Problem Statement</p>
            </div>
            
            <p>
              Swap should offer seamless navigation, a powerful search function, and communication options, such as direct messaging. 
              Verified reviews, and incentives for maintaining high ratings to foster accountability and trust among users.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Solution Statement" />
              <p className="image-caption">Solution Statement</p>
            </div>
            
            <p>
              Through comprehensive competitor analysis we discovered that our competitors are in the nascent stages of establishment within the industry. 
              This realization underscores the opportunity for us to leverage our expertise and experience, positioning us as leaders in delivering innovative design solutions and setting a high standard for user experience in the market.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Competitor Analysis" />
              <p className="image-caption">Competitor Analysis</p>
            </div>
          </section>

          <section className="project-section">
            <h3>Phase 3 - Prototyping</h3>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="User Flow Diagram" />
              <p className="image-caption">User Flow</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x300" alt="User Flow Snippet" />
              <p className="image-caption">Snippet of User Flow</p>
            </div>
            
            <p>
              In crafting the user flow, my objective was to maintain consistency across various stages while ensuring seamless navigation for users. 
              By delicately structuring each step with a uniform approach, I aimed to organize information effectively, optimizing the user journey for intuitive interaction and streamlined access to key features and content.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Style Tile" />
              <p className="image-caption">Style Tile</p>
            </div>
            
            <p>
              For the style tile, I selected a color palette inspired by wildflowers to embody the essence of nature and community in our design. 
              The chosen fonts prioritize simplicity, with the Against typeface specifically reserved for titles due to its intricate nature, ensuring readability and visual impact in our design compositions.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Lo-fi Wireframes" />
              <p className="image-caption">Lo-fi Wireframes</p>
            </div>
            
            <p>
              Ivana developed the lo-fi wireframes for our mobile prototype, focusing on outlining the structural framework of our design without incorporating any design elements. 
              This approach enabled us to initiate usability testing early in the process, ensuring that the foundation of our user experience was robust before refining and enhancing the visual aspects.
            </p>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Mid-fi Iterations" />
              <p className="image-caption">Mid-fi Iterations</p>
            </div>
            
            <p>
              Our mid-fi iterations began with another round of user interviews, revealing that the "Explore" button on the tab was causing confusion among users regarding its function. 
              To address this, we made a strategic adjustment by replacing "Explore" with the more commonly understood term "Home" on the tab. 
              This change aimed to enhance clarity and ensure that users could easily navigate the app's interface without encountering any ambiguity.
            </p>
            
            <h4>Hi-fi Wireframes</h4>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Hi-fi Desktop Homepage" />
              <p className="image-caption">Hi-fi Desktop Homepage</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Hi-fi Desktop Event Page" />
              <p className="image-caption">Hi-fi Desktop Event Page</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Hi-fi Desktop Profile Page" />
              <p className="image-caption">Hi-fi Desktop Profile Page</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Hi-fi Desktop Coaching Screen" />
              <p className="image-caption">Hi-fi Desktop Coaching Screen</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Hi-fi Mobile Onboarding" />
              <p className="image-caption">Hi-fi Mobile Onboarding</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Hi-fi Mobile Profile Creation" />
              <p className="image-caption">Hi-fi Mobile Profile Creation</p>
            </div>
            
            <div className="project-image">
              <img src="https://via.placeholder.com/800x500" alt="Hi-fi Mobile 'Faves and Saves' Screens" />
              <p className="image-caption">Hi-fi Mobile 'Faves and Saves' Screens</p>
            </div>
          </section>

          <section className="project-section">
            <h3>Final Thoughts</h3>
            <p>
              Throughout working on this project, I've deepened my understanding of user-centric design principles and the iterative nature of the design process. 
              Looking ahead, there are promising opportunities on the horizon:
            </p>
            <ul>
              <li>
                Collaboration with Donation Centers presents a compelling avenue to enhance our platform's impact, 
                fostering partnerships that amplify our mission of social good.
              </li>
              <li>
                Additionally, by expanding the versatility for items, we can broaden the scope of our platform, 
                catering to diverse user needs and preferences.
              </li>
              <li>
                Furthermore, prioritizing the integration of improved security features underscores our commitment to safeguarding user data and ensuring a trustworthy experience for all. 
                These future endeavors signify our continued dedication to innovation and excellence, as we strive to create meaningful and sustainable solutions that resonate with our users and communities alike.
              </li>
            </ul>
          </section>

          <div className="project-footer">
            <h3>Thank you for your time!</h3>
            <div className="other-projects">
              <h4>Other projects:</h4>
              <div className="project-links">
                <Link to="/projects/getgolden">GetGolden</Link>
                <Link to="/projects/hummingbird">Hummingbird</Link>
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

export default SwapProject; 