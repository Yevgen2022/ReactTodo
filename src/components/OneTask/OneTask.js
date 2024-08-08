import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TypeTaskSelect from './TypeTaskSelect/TypeTaskSelect';
import PrioritySelect from './PrioritySelect/PrioritySelect';
import DateRangeSelect from './DateRangeSelect/DateRangeSelect';
import { generateShortID,} from './OneTaskSlice';

import { addTask, updateTask } from '../TaskController/TaskControllerSlice';

import './oneTask.css'

const OneTask = ({ taskForEdit, onSave }) => {

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskType, setTaskType] = useState({ numberType: 0, textType: "" });
  const [taskPriority, setTaskPriority] = useState({ numberPriority: 0, textPriority: "" })
  const [taskDate, setTaskDate] = useState({ startDate: '', endDate: '' });
  const [taskCompleted, setTaskCompleted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (taskForEdit) {
      setTaskName(taskForEdit.taskName);
      setTaskDescription(taskForEdit.taskDescription);
      setTaskType(taskForEdit.taskType);
      setTaskPriority(taskForEdit.taskPriority);
      setTaskDate(taskForEdit.taskDate);
      setTaskCompleted(taskForEdit.taskCompleted);
    }
  }, [taskForEdit]);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleTaskTypeChange = (typeObj) => {
    setTaskType(typeObj);
  };

  const handleTaskPriorityChange = (priorityObj) => {
    setTaskPriority(priorityObj);
  }

  const handleTaskDate = (taskDateObj) => {
    setTaskDate(taskDateObj);
  }

  const handleTaskCompletedChange = (e) => {
    setTaskCompleted(e.target.checked);
  };

  const handleSave = () => {
    if (taskForEdit) {
      const updatedTask = {
        taskID: taskForEdit.taskID,
        taskName,
        taskDescription,
        taskType,
        taskPriority,
        taskDate,
        taskCompleted
      };
      dispatch(updateTask(updatedTask));
      onSave();
    } else {
      if (taskName.trim() && taskDescription.trim()) {
        const newTask = {
          taskID: generateShortID(),
          taskName,
          taskDescription,
          taskType,
          taskPriority,
          taskDate,
          taskCompleted
        };
        dispatch(addTask(newTask));

        setTaskName("");
        setTaskDescription("");
        setTaskType({ numberType: 0, textType: "" });
        setTaskPriority({ numberPriority: 0, textPriority: "" });
        setTaskDate({ startDate: "", endDate: "" });
        setTaskCompleted(false);

        alert("Task is saved");
        onSave();
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    }
  }

  return (
    <section className="task__form">
      <form className='form__one__task' onSubmit={(e) => { e.preventDefault(); handleSave() }} onKeyDown={handleKeyDown}>

        <input
          className="task__name"
          value={taskName}
          onChange={handleTaskNameChange}
          placeholder="Enter task name"
        />

        <textarea
          className="task__description"
          value={taskDescription}
          onChange={handleTaskDescriptionChange}
          placeholder="Enter task description"
        />

        <div className='type__priority__select'>
          <TypeTaskSelect value={taskType} onChange={handleTaskTypeChange} />
          <PrioritySelect value={taskPriority} onChange={handleTaskPriorityChange} />
        </div>
        <DateRangeSelect value={taskDate} onChange={handleTaskDate} />

        <div className='completed-div'>
          <label className='completed-label'>
            <input
              type="checkbox"
              checked={taskCompleted}
              onChange={handleTaskCompletedChange}
              className="completed-checkbox"
            />
            Completed
          </label>
        </div>

        <button className="save__task" type='submit'>Save</button>

      </form>
    </section>
  );
};

export default OneTask;
