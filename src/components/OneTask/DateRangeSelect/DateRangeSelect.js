import React from 'react';
import { useEffect, useState } from 'react';
import './DateRangeSelect.css';

const DateRangeSelect = ({value, onChange }) => {

  const [startDate, setStartDate] = useState(value.startDate);
  const [endDate, setEndDate] = useState(value.endDate);

  useEffect(() => {
    setStartDate(value.startDate);
    setEndDate(value.endDate);
  }, [value]);

  const handleDateChange = (e) => {
    const { id, value: newValue } = e.target;
  
    if (id === 'startDate') {
      setStartDate(newValue);      // Refresh Local state
    } else if (id === 'endDate') {
      setEndDate(newValue);        // Refresh Local state
    }  
    if (onChange) {
      onChange({ startDate: id === 'startDate' ? newValue : startDate, endDate: id === 'endDate' ? newValue : endDate });
    }
  };


  return (
    <div className="date-range-select">
      <div className="date-select">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="date-select">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default DateRangeSelect;
