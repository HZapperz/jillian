import React from 'react';
import { Link } from 'react-router-dom';
import HomeScene from '../three/HomeScene';
import AnimatedText from '../three/AnimatedText';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <HomeScene>
        <div className="home-container">
          <div className="flowing-blob-container">
            <div className="flowing-blob"></div>
          </div>
          <div className="home-content-wrapper">
            <div className="home-content">
              <div className="name-container">
                <AnimatedText text="Jillian Hohman" tag="h1" />
              </div>
              <AnimatedText text="UI/UX Designer" tag="h2" delay={0.3} />
              <AnimatedText 
                text="Crafting user-centered digital experiences." 
                tag="p" 
                delay={0.6} 
              />
              <Link to="/portfolio" className="btn">View My Work</Link>
            </div>
          </div>
        </div>
      </HomeScene>
    </section>
  );
};

export default Home; 