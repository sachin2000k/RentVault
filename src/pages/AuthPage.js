// src/pages/AuthPage.js
import React from "react";
import "./AuthPage.css";

function AuthPage() {
  // This is just a placeholder for authentication
  const handleLogin = () => {
    alert("Login successful (dummy)!");
  };

  const handleSignup = () => {
    alert("Signup successful (dummy)!");
  };

  return (
    <div className="auth-page">
      <h2>Login or Sign Up</h2>
      <div className="auth-forms">
        <div className="login-form">
          <h3>Login</h3>
          <input type="text" placeholder="Email or Username" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="signup-form">
          <h3>Sign Up</h3>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
