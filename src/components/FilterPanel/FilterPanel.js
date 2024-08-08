import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { queryTask, filterTasks, sortTasks } from '../TaskController/TaskControllerSlice';

import './FilterPanel.css';

const FilterPanel = () => {
  const [showTypeFilter, setShowTypeFilter] = useState(true);
  const [showSortOptions, setShowSortOptions] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const handleTypeFilterChange = (e) => {
    dispatch(filterTasks(e.target.value))
  };



  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(queryTask(value));
  }
  const handleClearSearch = () => {
    setSearchTerm("");
    dispatch(queryTask(''));
  };


  const handleSortChange = (e) => {
    dispatch(sortTasks(e.target.value));
  }

  return (
    <div className="filter-panel">

      {/* search */}
      <div className="filter-item">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleClearSearch}>Сlear search</button>
      </div>

      <div className="filter-item">
        {/* chekbox */}
        <input
          type="checkbox"
          id="typeFilterCheckbox"
          checked={showTypeFilter}
          onChange={() => setShowTypeFilter(!showTypeFilter)}
        />
        {/* type´s select */}
        <label htmlFor="typeFilterCheckbox">Show Type Filter</label>
        <select
          onChange={handleTypeFilterChange}
          disabled={!showTypeFilter}
          className={showTypeFilter ? '' : 'disabled'}
        >
          <option value="">Select Type</option>
          <option value="0">All tasks</option>
          <option value="1">Home</option>
          <option value="2">Education</option>
          <option value="3">Children</option>
          <option value="4">Individual</option>
          <option value="5">General</option>
        </select>
      </div>

      <div className="filter-item">
        {/* chekbox */}
        <input
          type="checkbox"
          id="sortOptionsCheckbox"
          checked={showSortOptions}
          onChange={() => setShowSortOptions(!showSortOptions)}
        />

        {/* sort´s select */}
        <label htmlFor="sortOptionsCheckbox">Show Sort Options</label>
        <select onChange={handleSortChange}
          disabled={!showSortOptions}
          className={showSortOptions ? '' : 'disabled'}
        >
          <option value="">Sort By</option>
          <option value="taskName">Sort by Name</option>
          <option value="taskDate">Sort by Date</option>
          <option value="taskDescription">Description</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
