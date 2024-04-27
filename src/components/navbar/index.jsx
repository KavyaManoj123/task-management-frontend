import React, { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    // Implement logout functionality here (e.g., clear session, redirect, etc.)
    console.log('Logging out...');
    // Perform logout actions (e.g., redirect to login page)
  };

  // Example user name (replace with actual user name)
  const userName = "Kavya";
  const userInitial = userName ? userName[0].toUpperCase() : '';

  return (
    <div className="navbartop">
      <div className="logs">
        <i className="fa-solid fa-boxes-stacked"></i>
        <h1>TaskSync</h1>
      </div>
      <div className="users" onClick={toggleLogout}>
        <div className="userIcon">{userInitial}</div>
        {showLogout && (
          <div className="logoutOption" onClick={handleLogout}>
            Logout
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
