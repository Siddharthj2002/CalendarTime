// Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      Calendar
      <div className="notification-bar">
        <i className="fas fa-bell"></i>
      </div>
      <div className="toggle-container">
        <button className="toggle">Toggle Week</button>
        <button className="create-event">Create Event</button>
      </div>
    </div>
  );
};

export default Header;
