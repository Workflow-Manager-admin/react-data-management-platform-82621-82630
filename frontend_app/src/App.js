import React, { useState, useEffect } from "react";
import "./App.css";
import TopNavBar from "./components/TopNavBar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";

// PUBLIC_INTERFACE
function App() {
  // Light/dark theme
  const [theme, setTheme] = useState("light");
  // Simulated auth state (replace with real backend logic as needed)
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  // Simple logout
  const handleLogout = () => {
    setUser(null);
  };

  // Simple login handler (replace with real logic)
  const handleLogin = (userObj) => {
    setUser(userObj);
  };

  return (
    <div className="App">
      <header className="App-header" style={{height: "unset", minHeight: 0, padding: 0}}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <TopNavBar onLogout={handleLogout} user={user} />
      </header>
      <div className="main-layout">
        {user ? (
          <>
            <Sidebar user={user} />
            <main className="main-content">
              <Dashboard />
            </main>
          </>
        ) : (
          <div className="auth-wall">
            <Auth onLogin={handleLogin} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
