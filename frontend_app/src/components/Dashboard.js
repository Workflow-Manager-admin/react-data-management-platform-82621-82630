import React from "react";
import "./Dashboard.css";

// PUBLIC_INTERFACE
function Dashboard() {
  /** Main dashboard content area */
  return (
    <div className="dashboard-container">
      <h1>Welcome to your Dashboard</h1>
      <div className="dashboard-content">
        <div className="card">
          <h3>Quick Overview</h3>
          <p>Here you will see latest stats or quick access modules.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
