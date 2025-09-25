import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navElement">
        <h1 className="navText">India Health</h1>
        <div className='navLink'>
          <Link to="/" >Home</Link>
          <Link to="/dashboard" >Dashboard</Link>
          <Link to="/records" >Records</Link>
          <Link to="/settings" >Settings</Link>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar
