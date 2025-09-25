import React, { useState } from "react";
import "../css/Settings.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="settings-container">
      {/* Sidebar Navigation */}
      <aside className="settings-sidebar">
        <h2>Settings</h2>
        <ul>
          <li className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}>Profile</li>
          <li className={activeTab === "security" ? "active" : ""} onClick={() => setActiveTab("security")}>Security & Privacy</li>
          <li className={activeTab === "insurance" ? "active" : ""} onClick={() => setActiveTab("insurance")}>Insurance Details</li>
          <li className={activeTab === "medical" ? "active" : ""} onClick={() => setActiveTab("medical")}>Medical Preferences</li>
          <li className={activeTab === "language" ? "active" : ""} onClick={() => setActiveTab("language")}>Language & Accessibility</li>
          <li className={activeTab === "devices" ? "active" : ""} onClick={() => setActiveTab("devices")}>Connected Devices</li>
          <li className={activeTab === "appointments" ? "active" : ""} onClick={() => setActiveTab("appointments")}>Appointments</li>
          <li className={activeTab === "billing" ? "active" : ""} onClick={() => setActiveTab("billing")}>Billing & Payments</li>
        </ul>
      </aside>

      {/* Content Area */}
      <section className="settings-content">
        {activeTab === "profile" && (
          <div>
            <h3>Profile Settings</h3>
            <label>Name:</label>
            <input type="text" placeholder="Your Name" />
            <label>Email:</label>
            <input type="email" placeholder="Your Email" />
            <button>Save Changes</button>
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h3>Security & Privacy</h3>
            <label>Change Password:</label>
            <input type="password" placeholder="New Password" />
            <button>Update Password</button>
          </div>
        )}

        {activeTab === "insurance" && (
          <div>
            <h3>Insurance Details</h3>
            <p>View and manage your health insurance plans.</p>
            <button>Update Insurance</button>
          </div>
        )}

        {activeTab === "medical" && (
          <div>
            <h3>Medical Preferences</h3>
            <label>Emergency Contact:</label>
            <input type="text" placeholder="Enter Contact Number" />
            <button>Save Preferences</button>
          </div>
        )}

        

        {activeTab === "language" && (
          <div>
            <h3>Language & Accessibility</h3>
            <label>Select Language:</label>
            <select>
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Bengali</option>
            </select>
            <button>Save Changes</button>
          </div>
        )}

        {activeTab === "devices" && (
          <div>
            <h3>Connected Devices</h3>
            <p>Manage your logged-in devices and remove unwanted sessions.</p>
            <button>View Devices</button>
          </div>
        )}

        {activeTab === "appointments" && (
          <div>
            <h3>Appointments</h3>
            <p>View and manage upcoming medical appointments.</p>
            <button>Manage Appointments</button>
          </div>
        )}

        {activeTab === "billing" && (
          <div>
            <h3>Billing & Payments</h3>
            <p>Manage your saved payment methods and view billing history.</p>
            <button>Update Billing Info</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Settings;
