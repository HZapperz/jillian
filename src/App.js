import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import NotFound from './components/sections/NotFound';

// Import project detail pages
import SwapProject from './projects/SwapProject';
import GetGoldenProject from './projects/GetGoldenProject';
import HummingbirdProject from './projects/HummingbirdProject';

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Project detail routes */}
          <Route path="/projects/swap" element={<SwapProject />} />
          <Route path="/projects/getgolden" element={<GetGoldenProject />} />
          <Route path="/projects/hummingbird" element={<HummingbirdProject />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
