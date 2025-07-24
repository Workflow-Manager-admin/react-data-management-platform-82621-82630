import React from "react";
import "./TopNavBar.css";

// PUBLIC_INTERFACE
function TopNavBar({ onLogout, user }) {
  /** Top navigation bar with app branding, optional user actions */
  return (
    <nav className="topnav-bar">
      <div className="brand">DataPlatform</div>
      <div className="topnav-actions">
        {user ? (
          <button className="nav-btn" onClick={onLogout}>
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
}

export default TopNavBar;
