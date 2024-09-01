import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li><Link to="details">Details</Link></li> {/* Links to nested routes */}
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* The Outlet renders the child routes */}
    </div>
  );
};
export default Profile;
