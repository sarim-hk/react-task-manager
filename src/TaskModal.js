import React, { useState } from 'react';
import './TaskModal.css';
import './TaskItem.css';

function TaskModal({ onClose, targetDay, labels }) {
  const [taskName, setTaskName] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');

  function addTaskToDashboard() {
    const newTaskElement = document.createElement("div");
    newTaskElement.classList.add("task-item"); // Add a class for styling
    newTaskElement.setAttribute("data-task-id", `task-${Date.now()}`);

    const checkbox = document.createElement("input", { type: 'checkbox', defaultChecked: true });
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    newTaskElement.appendChild(checkbox); // Append the checkbox to the task item element

    const taskText = document.createElement("span");
    taskText.textContent = taskName;
    newTaskElement.appendChild(taskText); // Append the text to the task item element

    // Add drag and drop attributes to the task item
    newTaskElement.draggable = true;
    newTaskElement.addEventListener("dragstart", handleDragStart);
    newTaskElement.addEventListener("dragend", handleDragEnd);

    const dashboardTasksDiv = document.getElementById(targetDay);
    dashboardTasksDiv.appendChild(newTaskElement);
    onClose();
  }

  function handleDragStart(event) {
    // Set the dragged data (task ID)
    const taskItem = event.target;
    const taskId = taskItem.dataset.taskId;
    event.dataTransfer.setData("text/plain", taskId);

    // Add a class to the dragged task item
    taskItem.classList.add("dragging");
  }

  function handleDragEnd(event) {
    // Remove the dragging class from the task item
    event.target.classList.remove("dragging");
  }

  function handleLabelChange(event) {
    setSelectedLabel(event.target.value);
  }

  function handleTaskNameChange(event) {
    setTaskName(event.target.value);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Task</h3>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <div className="task-name">
            <input
              className="task-name-text"
              type="text"
              placeholder="Task name"
              value={taskName}
              onChange={handleTaskNameChange}
            />
          </div>
          <div className="task-details">
            <div className="description">
              <label htmlFor="description">Description:</label>
              <textarea id="description" />
            </div>
            <div className="priority">
              <label htmlFor="priority">Priority:</label>
              <select id="priority">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="label">
              <label htmlFor="label">Label:</label>
              <select id="label" value={selectedLabel} onChange={handleLabelChange}>
                <option value="">Select label</option>
                {labels.map((label) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="time">
              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" />
            </div>
          </div>
          <button className="add-button" onClick={addTaskToDashboard}>Add Task</button>
        </div>
      </div>
    </div>
  );
}


export default TaskModal;

