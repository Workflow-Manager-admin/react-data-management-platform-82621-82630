import React from "react";
import "./Sidebar.css";

// PUBLIC_INTERFACE
function Sidebar({ user }) {
  /** Sidebar for navigation */
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <span className="sidebar-title">Main</span>
        <ul className="sidebar-links">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
      </div>
      <div className="sidebar-section">
        <span className="sidebar-title">Account</span>
        <ul className="sidebar-links">
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
