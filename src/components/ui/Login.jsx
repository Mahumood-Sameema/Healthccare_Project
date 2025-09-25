import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [activeTab, setActiveTab] = useState("patient");
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true); // Mark user as logged in
    navigate("/"); // Navigate to Home
  };

  return (
    <div className="login-container">
      <div className="toggle-buttons">
        <button className={activeTab === "patient" ? "active" : ""} onClick={() => setActiveTab("patient")}>
          Patient Services
        </button>
        <button className={activeTab === "corporate" ? "active" : ""} onClick={() => setActiveTab("corporate")}>
          Corporate Services
        </button>
      </div>

      <div className="login-box">
        <h2>{activeTab === "patient" ? "Patient Login" : "Corporate Services"}</h2>
        <p>Please enter your credentials to access the portal.</p>
        <label>Username</label>
        <input type="text" placeholder="Enter your username" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <div className="forgot-links">
          <a href="#">Forgot Password?</a>
          <a href="#">Forgot Username?</a>
        </div>
        <button className="login-btn" onClick={handleLogin}>Login</button>
        <button className="aadhaar-login">Login with Aadhaar Card</button>
        <p>Don't have an account? <a href="#">Register Here</a></p>
      </div>
    </div>
  );
};

export default Login;
