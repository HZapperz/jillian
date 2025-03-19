import React, { Suspense } from 'react';
import AnimatedBackground from './AnimatedBackground';
import './HomeScene.css';

const HomeScene = ({ children }) => {
  return (
    <div className="home-scene">
      <div className="home-canvas-container">
        <Suspense fallback={<div className="loading">Loading 3D scene...</div>}>
          <AnimatedBackground />
        </Suspense>
      </div>
      
      <div className="home-scene-content">
        {children}
      </div>
    </div>
  );
};

export default HomeScene; 