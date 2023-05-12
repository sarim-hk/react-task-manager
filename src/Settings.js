import React from "react";
import "./Settings.css";
import { Link } from 'react-router-dom';


function Settings() {
    return (
        <div className="settings">
            <div className="settings-category">
                <h3>Account</h3>
                <div className="settings-option">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                </div>
                <div className="settings-option">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" />
                </div>
            </div>
            <div className="settings-category">
                <h3>Interface</h3>
                <div className="settings-option">
                    <label htmlFor="theme">Theme:</label>
                    <select id="theme">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
            </div>
            <div className="settings-category">
                <h3>Date / Time</h3>
                <div className="settings-option">
                    <label htmlFor="time-format">Time Format:</label>
                    <select id="time-format">
                        <option value="12">12-hour</option>
                        <option value="24">24-hour</option>
                    </select>
                </div>
                <div className="settings-option">
                    <label htmlFor="work-week-starts">Work Week Starts:</label>
                    <select id="work-week-starts">
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                    </select>
                </div>
                <div className="settings-footer">
                    <Link to="/dashboard" className="back-button">
                        Back
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Settings;