import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/services" style={{ textDecoration: 'none', color: '#333' }}>Services</Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;