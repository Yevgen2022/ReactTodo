import React from 'react';
import { useEffect, useState } from 'react';
import './PrioritySelect.css'; 

const PrioritySelect = ({ value, onChange }) => {

  const [selectedPriority, setSelectedValue] = useState(value.textPriority);

  useEffect(() => {
    setSelectedValue(value.textPriority);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    const dataValue = e.target.options[e.target.selectedIndex].getAttribute('data-value');
    // Refresh Local state
    setSelectedValue(newValue);

    if (onChange) {
      onChange({ numberPriority: Number(dataValue), textPriority: newValue });
    }
  };

  return (
    <div className="priority-select">
      <label htmlFor="priority">Priority:</label>
      <select
        id="priority"
        value={selectedPriority}
        onChange={handleChange}
      >
        <option value="" data-value={0}>Select a priority</option>
        <option value="Low" data-value={1}>Low</option>
        <option value="Medium" data-value={2}>Medium</option>
        <option value="High" data-value={3}>High</option>
        <option value="Urgent" data-value={4}>Urgent</option>
      </select>
    </div>
  );
};

export default PrioritySelect;
