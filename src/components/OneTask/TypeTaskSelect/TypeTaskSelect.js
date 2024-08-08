import React from 'react';
import { useEffect, useState } from 'react';

import './TypeTaskSelect.css'; 

const TypeTaskSelect = ({ value, onChange }) => {
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    setSelectedType(value.textType);
  }, [value]);


  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectedType(newValue);         // Refresh Local state

    const dataValue = e.target.options[e.target.selectedIndex].getAttribute('data-value');
    setSelectedType(newValue);        // Refresh Local state
    if (onChange) {                   //props onChange
      onChange({ numberType: Number(dataValue), textType: newValue });
    }
  };

  return (
    <div className="priority-select">
      <label htmlFor="taskType">Task Type:</label>
      <select
        id="taskType"
        value={selectedType}
        onChange={handleChange}
      >
        <option value="" data-value = {0} >Select a type</option>
        <option value="Home" data-value = {1}>Home</option>
        <option value="Education" data-value = {2}>Education</option>
        <option value="Children" data-value = {3}>Children</option>
        <option value="Individual" data-value = {4}>Individual</option>
        <option value="General" data-value = {5}>General</option>
      </select>
    </div>
  );
};

export default TypeTaskSelect;
