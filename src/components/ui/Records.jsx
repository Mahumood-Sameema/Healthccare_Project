import React from 'react';
import { FaVial, FaHeartbeat, FaLungs, FaBrain, FaEye, FaDna, FaMicroscope, FaBone, FaUserMd, FaSyringe } from 'react-icons/fa';
import '../css/Record.css';

const Records = () => {
  const medicalTests = [
    { id: 1, name: "Blood Test", icon: <FaVial />, result: "Normal", date: "18 Mar 2025", time: "10:15 AM" },
    { id: 2, name: "ECG", icon: <FaHeartbeat />, result: "No abnormalities", date: "17 Mar 2025", time: "02:30 PM" },
    { id: 3, name: "Lung Function", icon: <FaLungs />, result: "Healthy", date: "16 Mar 2025", time: "11:45 AM" },
    { id: 4, name: "Brain MRI", icon: <FaBrain />, result: "No issues detected", date: "15 Mar 2025", time: "09:00 AM" },
    { id: 5, name: "Eye Test", icon: <FaEye />, result: "Mild myopia", date: "14 Mar 2025", time: "01:10 PM" },
    { id: 6, name: "Genetic Test", icon: <FaDna />, result: "No inherited diseases", date: "13 Mar 2025", time: "03:40 PM" },
    { id: 7, name: "Microscopy Test", icon: <FaMicroscope />, result: "No infections", date: "12 Mar 2025", time: "08:25 AM" },
    { id: 8, name: "Bone Density Test", icon: <FaBone />, result: "Normal", date: "11 Mar 2025", time: "12:50 PM" },
    { id: 9, name: "Thyroid Test", icon: <FaUserMd />, result: "TSH levels normal", date: "10 Mar 2025", time: "04:15 PM" },
    { id: 10, name: "Diabetes Test", icon: <FaSyringe />, result: "Sugar levels normal", date: "09 Mar 2025", time: "07:30 AM" }
  ];
  return (
    <div className="medical-records-container">
      <h2>My Medical Records</h2>
      <div className="records-grid">
        {medicalTests.map((test) => (
          <div className="record-card" key={test.id}>
            <div className="record-icon">{test.icon}</div>
            <h3>{test.name}</h3>
            <p>{test.result}</p>
            <span className="record-date">{test.date} - {test.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Records
