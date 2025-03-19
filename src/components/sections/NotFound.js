import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist or has been moved.</p>
          <Link to="/" className="btn">Return Home</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound; 