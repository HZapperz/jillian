import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ margin: 0, padding: 0 }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout; 