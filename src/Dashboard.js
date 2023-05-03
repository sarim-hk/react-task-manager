import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaTrashAlt, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard">      
      <div className="dashboard__sidebar">
        <div className="dashboard__sidebar-header">
          <h2>Sarim Khalil</h2>
        </div>

        <div className="dashboard__sidebar-buttons__label-buttons">
          <button className="dashboard__sidebar-button">Add / Edit Label</button>
        </div>

        <div className="dashboard__sidebar-buttons">
          <Link to="/settings"><button className="dashboard__sidebar-button"><FaCog /> Settings</button></Link>
          <Link to="/"><button className="dashboard__sidebar-button"><FaSignOutAlt /> Logout</button></Link>
        </div>
      </div>

      <div className="dashboard__content">
        <div className="dashboard__day">
          <div className="dashboard__day-name">Monday</div>
          <div className="dashboard__day-tasks"></div>
        </div>
        <div className="dashboard__day">
          <div className="dashboard__day-name">Tuesday</div>
          <div className="dashboard__day-tasks"></div>
        </div>
        <div className="dashboard__day">
          <div className="dashboard__day-name">Wednesday</div>
          <div className="dashboard__day-tasks"></div>
        </div>
        <div className="dashboard__day">
          <div className="dashboard__day-name">Thursday</div>
          <div className="dashboard__day-tasks"></div>
        </div>
        <div className="dashboard__day">
          <div className="dashboard__day-name">Friday</div>
          <div className="dashboard__day-tasks"></div>
        </div>
        <div className="dashboard__day">
          <div className="dashboard__day-name">Saturday</div>
          <div className="dashboard__day-tasks"></div>
        </div>
        <div className="dashboard__day">
          <div className="dashboard__day-name">Sunday</div>
          <div className="dashboard__day-tasks"></div>
        </div>
      </div>
      <div className="dashboard__bottom-navbar">
        <div className="dashboard__searchbar">
          <input type="text" placeholder="Search..." />
          <button className="dashboard__searchbar-button"><FaSearch /></button>
        </div>
        <div className="dashboard__icons">
          <button className="dashboard__icon-button"><FaTrashAlt /></button>
          <button className="dashboard__icon-button"><FaBell /></button>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;