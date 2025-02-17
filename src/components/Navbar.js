import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/members">Members</Link>
    </nav>
  );
}

export default Navbar; 