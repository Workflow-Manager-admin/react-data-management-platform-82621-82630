import React, { useState } from "react";
import "./Auth.css";

// PUBLIC_INTERFACE
function Auth({ onLogin }) {
  /** Authentication form for sign in/register simulation */
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  // Dummy submit handler to mock auth (real integration can be swapped in)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && pass) {
      // Fake auth: accept any non-empty credentials
      setMsg("");
      onLogin({ email });
    } else {
      setMsg("Please enter both email and password.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isRegister ? "Register" : "Login"}</h2>
        <input
          type="email"
          placeholder="Email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete={isRegister ? "new-password" : "current-password"}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button className="auth-btn" type="submit">
          {isRegister ? "Register" : "Login"}
        </button>
        {msg ? <div className="auth-error">{msg}</div> : null}
        <div className="toggle-link">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <span
                className="auth-link"
                onClick={() => {
                  setIsRegister(false);
                  setMsg("");
                }}
              >
                Login here
              </span>
            </>
          ) : (
            <>
              No account?{" "}
              <span
                className="auth-link"
                onClick={() => {
                  setIsRegister(true);
                  setMsg("");
                }}
              >
                Register now
              </span>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default Auth;
