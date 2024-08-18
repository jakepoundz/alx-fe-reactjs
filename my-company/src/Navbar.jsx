// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;