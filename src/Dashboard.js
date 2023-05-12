import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaTrashAlt, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Dashboard.css';
import TaskModal from './TaskModal';
import NotificationShade from './NotificationShade';
import LabelModal from './LabelModal';

function Dashboard() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLabelModalOpen, setIsLabelModalOpen] = useState(false);

  const toggleLabelModal = () => {
    setIsLabelModalOpen(!isLabelModalOpen);
  };

  const closeLabelModal = () => {
    setIsLabelModalOpen(false);
  };


  const [modalStates, setModalStates] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false
  });

  const handleModalClick = (targetDay) => {
    setSelectedDay(targetDay);
    setModalStates((prevStates) => ({
      ...prevStates,
      [targetDay]: true
    }));
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
    setModalStates((prevStates) => ({
      ...prevStates,
      [selectedDay]: false
    }));
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskItem) {
      taskItem.remove();
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="dashboard">
      <div className="dashboard__sidebar">
        <div className="dashboard__sidebar-header">
          <h2>Sarim Khalil</h2>
        </div>

        <div className="dashboard__sidebar-buttons__label-buttons" id="labels">
          <button className="dashboard__sidebar-button" onClick={toggleLabelModal}>
            Add / Edit Label
          </button>
          {isLabelModalOpen && <LabelModal onClose={closeLabelModal} />}
        </div>


        <div className="dashboard__sidebar-buttons">
          <Link to="/settings">
            <button className="dashboard__sidebar-button">
              <FaCog /> Settings
            </button>
          </Link>
          <Link to="/index.html">
            <button className="dashboard__sidebar-button">
              <FaSignOutAlt /> Logout
            </button>
          </Link>
        </div>
      </div>

      <div className="dashboard__content">
        <div className="dashboard__day">
          <div className="dashboard__day-name">Monday</div>
          <div className="dashboard__day-tasks" id="Monday">
            <button onClick={() => handleModalClick("Monday")} className="dashboard__day-button">
              Add Task
            </button>
            {modalStates.Monday && <TaskModal onClose={handleCloseModal} targetDay="Monday" />}
          </div>
        </div>

        <div className="dashboard__day">
          <div className="dashboard__day-name">Tuesday</div>
          <div className="dashboard__day-tasks" id="Tuesday">
            <button onClick={() => handleModalClick("Tuesday")} className="dashboard__day-button">
              Add Task
            </button>
            {modalStates.Tuesday && <TaskModal onClose={handleCloseModal} targetDay="Tuesday" />}
          </div>
        </div>

        <div className="dashboard__day">
          <div className="dashboard__day-name">Wednesday</div>
          <div className="dashboard__day-tasks" id="Wednesday">
            <button onClick={() => handleModalClick("Wednesday")} className="dashboard__day-button">
              Add Task
            </button>
            {modalStates.Wednesday && <TaskModal onClose={handleCloseModal} targetDay="Wednesday" />}
          </div>
        </div>

        <div className="dashboard__day">
          <div className="dashboard__day-name">Thursday</div>
          <div className="dashboard__day-tasks" id="Thursday">
            <button onClick={() => handleModalClick("Thursday")} className="dashboard__day-button">
              Add Task
            </button>
            {modalStates.Thursday && <TaskModal onClose={handleCloseModal} targetDay="Thursday" />}
          </div>
        </div>

        <div className="dashboard__day">
          <div className="dashboard__day-name">Friday</div>
          <div className="dashboard__day-tasks" id="Friday">
            <button onClick={() => handleModalClick("Friday")} className="dashboard__day-button">
              Add Task
            </button>
            {modalStates.Friday && <TaskModal onClose={handleCloseModal} targetDay="Friday" />}
          </div>
        </div>

        <div className="dashboard__day">
          <div className="dashboard__day-name">Saturday</div>
          <div className="dashboard__day-tasks" id="Saturday">
            <button onClick={() => handleModalClick("Saturday")} className="dashboard__day-button">
              Add Task
            </button>
            {modalStates.Saturday && <TaskModal onClose={handleCloseModal} targetDay="Saturday" />}
          </div>
        </div>

        <div className="dashboard__day">
          <div className="dashboard__day-name">Sunday</div>
          <div className="dashboard__day-tasks" id="Sunday">
            <button onClick={() => handleModalClick("Sunday")} className="dashboard__day-button">
              Add Task
            </button>
            {modalStates.Sunday && <TaskModal onClose={handleCloseModal} targetDay="Sunday" />}
          </div>
        </div>

        <div className="dashboard__bottom-navbar">
          <div className="dashboard__searchbar">
            <input type="text" placeholder="Search..." />
            <button className="dashboard__searchbar-button"><FaSearch /></button>
          </div>
          <div className="dashboard__icons">

            <div className="dashboard__icon-button" onDrop={handleDrop} onDragOver={handleDragOver}>
              <FaTrashAlt />
            </div>
            <div className="dashboard__icon-button" onClick={toggleNotification}>
              <FaBell />
            </div>
            {isNotificationOpen && <NotificationShade />}
            
          </div>
        </div>
      </div>
    </div>
    );
}

export default Dashboard;