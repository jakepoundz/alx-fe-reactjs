import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li><Link to="details">Details</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* This is where the nested routes are rendered */}
    </div>
  );
};
export default Profile;
