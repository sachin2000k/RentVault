// src/pages/LoginPage.js
import React, { useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [role, setRole] = useState(location.state?.role || "customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Dummy "loggedIn" state
  const handleLogin = () => {
    if (email && password) {
      // For real usage, you'd do an API call here.
      // We'll store the user's role in localStorage or a global store.
      localStorage.setItem("userRole", role);
      alert(`Logged in as ${role} (dummy)`);
      if (role === "provider") {
        navigate("/dashboard");
      } else {
        navigate("/browse"); // or whichever route
      }
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <p>Select your role</p>
      <div className="role-selection">
        <label>
          <input
            type="radio"
            name="role"
            value="provider"
            checked={role === "provider"}
            onChange={() => setRole("provider")}
          />
          Provider
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="customer"
            checked={role === "customer"}
            onChange={() => setRole("customer")}
          />
          Customer
        </label>
      </div>
      <div className="login-inputs">
        <input
          type="text"
          placeholder="Email or Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
}

export default LoginPage;
