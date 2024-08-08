import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, filterTasks, sortTasks } from '../TaskController/TaskControllerSlice';
import FilterPanel from '../FilterPanel/FilterPanel';
import ModalWnd from '../ModalWindow/ModalWnd';
import OneTask from '../OneTask/OneTask';
import './ShowTask.css';

const ShowTask = () => {
    const [activeButton, setActiveButton] = useState('button1');
    const [selectedRow, setSelectedRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get tasks from the store
    const tasks = useSelector((state) => state.taskController.tasks);

    // Find the selected task based on selectedRow
    const selectedTask = tasks.find(task => task.taskID === selectedRow?.taskID); // Ensure selectedRow has taskID

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        if (buttonId === 'button1') {
            navigate('show-individual-tasks');
        } else if (buttonId === 'button2') {
            navigate('show-corporate-tasks');
        }
    };

    const handleRowSelect = (rowID) => {
        setSelectedRow(rowID);
    };

    const handleEditClick = () => {
        if (selectedRow) {
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    const handleDeleteClick = () => {
        if (selectedRow) {
            dispatch(deleteTask(selectedRow.taskID));
            setSelectedRow(null);
        }
    };

    return (
        <div className="show-task-container">
            <div className="button-panel">
                <button
                    className={`button ${activeButton === 'button1' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('button1')}
                >
                    Show individual tasks
                </button>
                <button
                    className={`button ${activeButton === 'button2' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('button2')}
                >
                    Show corporate tasks
                </button>
                <button
                    className={`button button-edit ${selectedRow ? 'active' : 'disabled'}`}
                    onClick={handleEditClick}
                    disabled={!selectedRow}
                >
                    Edit
                </button>
                <button
                    className={`button button-delete ${selectedRow ? 'active' : 'disabled'}`}
                    onClick={handleDeleteClick}
                    disabled={!selectedRow}
                >
                    Delete
                </button>
            </div>
            <div className="filter-panel-container">
                <FilterPanel />
            </div>
            <div className="content">
                <Outlet context={{ onRowSelect: handleRowSelect }} />
                {selectedTask && (
                    <ModalWnd isOpen={isModalOpen} onClose={handleCloseModal}>
                        <OneTask
                            taskForEdit={selectedTask}  // Передайте правильний пропс
                            onSave={() => {
                                handleCloseModal(); // Close modalWindow after save
                            }}
                        />
                    </ModalWnd>
                )}
            </div>
        </div>
    );
};

export default ShowTask;
