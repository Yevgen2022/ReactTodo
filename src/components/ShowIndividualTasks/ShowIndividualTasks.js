import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import './ShowIndividualTasks.css';

const ShowIndividualTasks = () => {

  const tasks = useSelector((state) => {
    return state.taskController.isFiltered ? state.taskController.filterTasks : state.taskController.tasks;
    
  });
  // Context from parent component 
  const { onRowSelect } = useOutletContext();

  // Local state for saving choosing´s row
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  //Sets the new selected row in the local state "selectedTaskId"
  const handleRowClick = (taskID) => {
    const newSelectedTaskId = selectedTaskId === taskID ? null : taskID;
    setSelectedTaskId(newSelectedTaskId);

    // Call the context function to update the parent component's state
    onRowSelect(newSelectedTaskId ? { taskID: newSelectedTaskId } : null);

   // onRowSelect(newSelectedTaskId);//if we are using props
  };

  return (
    <div className="tasks-table">
      <h2>Individual Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Priority</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.taskID}

              className={`${
                task.taskID === selectedTaskId ? 'selected' : ''
              } ${
                task.taskCompleted ? 'complete' : 'incomplete'
              }`}


              onClick={() => handleRowClick(task.taskID)}
            >
              <td>{task.taskID}</td>
              <td>{task.taskName}</td>
              <td>{task.taskDescription}</td>
              <td>{task.taskType.textType}</td>
              <td>{task.taskPriority.textPriority}</td>
              <td>{task.taskDate.startDate}</td>
              <td>{task.taskDate.endDate}</td>
              <td>{task.taskCompleted ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowIndividualTasks;
