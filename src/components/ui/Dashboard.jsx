import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css'

const Dashboard = () => {

  const [heartRate, setHeartRate] = useState(80);
  const [systolicBP, setSystolicBP] = useState(120);
  const [diastolicBP, setDiastolicBP] = useState(80);
  const [prediction, setPrediction] = useState("");

  // Simulate real-time data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(60 + Math.floor(Math.random() * 40));
      setSystolicBP(100 + Math.floor(Math.random() * 40));
      setDiastolicBP(60 + Math.floor(Math.random() * 40));
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="dashboard">
      <div className="dashboard-header">
        Welcome, Sam! Here’s your health summary.
      </div>

      

      <div className="dashboard-content">
        {/* Profile */}
      <div className="card profile-info">
          <h3>My Profile</h3>
          <div className="profile-pic"></div>
          <p>Sam | Age: 25</p>
          <p>Email: sam@example.com</p>
        </div>
        
        {/* Medical Expenses */}
        <div className="card medical-expenses">
          <h3>Medical Expenses</h3>
          <p>Total Spent: ₹15,000</p>
          <select>
            <option>January</option>
            <option>February</option>
            <option>March</option>
          </select>
        </div>

        {/* Upcoming Appointments */}
        <div className="card appointments">
          <h3>Upcoming Appointments</h3>
          <ul>
            <li><span className="dot green"></span> Dr. Mehta - 20 Mar, 10:30 AM</li>
            <li><span className="dot blue"></span> Dr. Kapoor - 25 Mar, 2:00 PM</li>
          </ul>
        </div>

        {/* Consultation Hours */}
        <div className="card consultation-hours">
          <h3>Consultation Hours</h3>
          <div className="days">
            <span className="active">Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>
          <p className="avg-hour">Avg: 2 Hours/Week</p>
        </div>

        {/* Health Insights */}
        <div className="card health-insights">
          <h3>My Health Insights</h3>
          <p>BMI: 22.5 (Normal)</p>
          <p>Blood Pressure: 120/80</p>
          <p>Heart Rate: 72 BPM</p>
        </div>

        

        {/* Medical Records */}
        <div className="card medical-records">
          <h3>My Medical Records</h3>
          <ul>
            <li>Blood Test - Jan 2025</li>
            <li>Eye Checkup - Feb 2025</li>
            <li>X-ray - Mar 2025</li>
          </ul>
        </div>
        <div className='card heart-rate'>
          <h2>Heart Rate: {heartRate} BPM</h2>
          <h2>Blood Pressure: {systolicBP}/{diastolicBP} mmHg</h2>
        </div>
      </div>
      

    </div>
  )
}

export default Dashboard
