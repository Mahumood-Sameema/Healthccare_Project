import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./components/ui/Home";
import Dashboard from "./components/ui/Dashboard";
import Records from "./components/ui/Records";
import Settings from "./components/ui/Settings";
import Login from "./components/ui/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state

  return (
    <Router>
      <Routes>
        {/* Show login page first */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* If not logged in, redirect to login */}
        <Route
          path="/*"
          element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}
        />

        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const MainLayout = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/records" element={<Records />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </div>
);

export default App;
