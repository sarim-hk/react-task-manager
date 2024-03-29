import React, { useState } from 'react';
import './LabelModal.css';

function LabelModal({ onClose }) {
    const [label, setLabel] = useState('');

    function addLabelToDashboard(event) {
        const newTaskElement = document.createElement("div");
        newTaskElement.classList.add("task-item"); // Add a class for styling
        newTaskElement.setAttribute("data-task-id", `task-${Date.now()}`);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("checked", true);
        checkbox.classList.add("task-checkbox");
        newTaskElement.appendChild(checkbox); // Append the checkbox to the task item element

        const taskText = document.createElement("span");
        taskText.textContent = label;
        newTaskElement.appendChild(taskText); // Append the text to the task item element

        // Add drag and drop attributes to the task item
        newTaskElement.draggable = true;
        newTaskElement.addEventListener("dragstart", handleDragStart);
        newTaskElement.addEventListener("dragend", handleDragEnd);

        const dashboardTasksDiv = document.getElementById("labels");
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


    const handleLabelChange = (event) => {
        setLabel(event.target.value);
    };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Label</h3>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <form onSubmit={addLabelToDashboard}>
            <input
              className="label-name"
              type="text"
              value={label}
              onChange={handleLabelChange}
              placeholder="Enter label"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LabelModal;
