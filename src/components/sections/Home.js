import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-content">
          <h1>Jillian Hohman</h1>
          <h2>UI/UX Designer</h2>
          <p>Crafting user-centered digital experiences.</p>
          <Link to="/portfolio" className="btn">View My Work</Link>
        </div>
        <div className="home-decoration">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Home; 