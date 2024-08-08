import { createSlice } from '@reduxjs/toolkit';

const initialTasks = [
  {
    taskID: '77986',
    taskName: 'Shopping',
    taskDescription: 'I will do it in "OCEAN" centre',
    taskType: { numberType: 1, textType: 'Home' },
    taskPriority: { numberPriority: 2, textPriority: 'Medium' },
    taskDate: { startDate: '2024-08-07', endDate: '2024-08-07' },
    taskCompleted: false
  },
  {
    taskID: '23145',
    taskName: 'Gym',
    taskDescription: 'Morning workout session',
    taskType: { numberType: 4, textType: 'Individual' },
    taskPriority: { numberPriority: 3, textPriority: 'High' },
    taskDate: { startDate: '2024-08-08', endDate: '2024-08-08' },
    taskCompleted: true
  },
  {
    taskID: '87964',
    taskName: 'Study',
    taskDescription: 'Complete React tutorial',
    taskType: { numberType: 2, textType: 'Education' },
    taskPriority: { numberPriority: 1, textPriority: 'Low' },
    taskDate: { startDate: '2024-08-09', endDate: '2024-08-09' },
    taskCompleted: false
  },
  {
    taskID: '54632',
    taskName: 'Project Meeting',
    taskDescription: 'Discuss project requirements with team',
    taskType: { numberType: 5, textType: 'General' },
    taskPriority: { numberPriority: 4, textPriority: 'Urgent' },
    taskDate: { startDate: '2024-08-10', endDate: '2024-08-10' },
    taskCompleted: true
  },
  {
    taskID: '21458',
    taskName: 'Grocery Shopping',
    taskDescription: 'Buy vegetables and fruits',
    taskType: { numberType: 1, textType: 'Home' },
    taskPriority: { numberPriority: 2, textPriority: 'Medium' },
    taskDate: { startDate: '2024-08-11', endDate: '2024-08-11' },
    taskCompleted: false
  },
  {
    taskID: '96325',
    taskName: 'Dentist Appointment',
    taskDescription: 'Annual dental check-up',
    taskType: { numberType: 4, textType: 'Individual' },
    taskPriority: { numberPriority: 3, textPriority: 'High' },
    taskDate: { startDate: '2024-08-12', endDate: '2024-08-12' },
    taskCompleted: true
  },
  {
    taskID: '65478',
    taskName: 'Parent-Teacher Meeting',
    taskDescription: 'Discuss child’s progress',
    taskType: { numberType: 3, textType: 'Children' },
    taskPriority: { numberPriority: 1, textPriority: 'Low' },
    taskDate: { startDate: '2024-08-13', endDate: '2024-08-13' },
    taskCompleted: false
  },
  {
    taskID: '32657',
    taskName: 'Car Service',
    taskDescription: 'Routine car maintenance',
    taskType: { numberType: 1, textType: 'Home' },
    taskPriority: { numberPriority: 2, textPriority: 'Medium' },
    taskDate: { startDate: '2024-08-14', endDate: '2024-08-14' },
    taskCompleted: true
  },
  {
    taskID: '74125',
    taskName: 'Office Work',
    taskDescription: 'Complete monthly report',
    taskType: { numberType: 5, textType: 'General' },
    taskPriority: { numberPriority: 3, textPriority: 'High' },
    taskDate: { startDate: '2024-08-15', endDate: '2024-08-15' },
    taskCompleted: false
  },
  {
    taskID: '82563',
    taskName: 'Birthday Party',
    taskDescription: 'Organize birthday party for friend',
    taskType: { numberType: 5, textType: 'General' },
    taskPriority: { numberPriority: 2, textPriority: 'Medium' },
    taskDate: { startDate: '2024-08-16', endDate: '2024-08-16' },
    taskCompleted: true
  },
  {
    taskID: '77987',
    taskName: 'Gym',
    taskDescription: 'Leg day workout',
    taskType: { numberType: 4, textType: 'Individual' },
    taskPriority: { numberPriority: 3, textPriority: 'High' },
    taskDate: { startDate: '2024-08-08', endDate: '2024-08-08' },
    taskCompleted: false
  },
  {
    taskID: '77988',
    taskName: 'Project Meeting',
    taskDescription: 'Discuss project scope and milestones',
    taskType: { numberType: 2, textType: 'Education' },
    taskPriority: { numberPriority: 1, textPriority: 'Low' },
    taskDate: { startDate: '2024-08-09', endDate: '2024-08-09' },
    taskCompleted: false
  },
  {
    taskID: '77989',
    taskName: 'Grocery Shopping',
    taskDescription: 'Buy fruits and vegetables',
    taskType: { numberType: 1, textType: 'Home' },
    taskPriority: { numberPriority: 2, textPriority: 'Medium' },
    taskDate: { startDate: '2024-08-10', endDate: '2024-08-10' },
    taskCompleted: true
  },
  {
    taskID: '77990',
    taskName: 'Dentist Appointment',
    taskDescription: 'Routine check-up',
    taskType: { numberType: 4, textType: 'Individual' },
    taskPriority: { numberPriority: 3, textPriority: 'High' },
    taskDate: { startDate: '2024-08-11', endDate: '2024-08-11' },
    taskCompleted: false
  },
  {
    taskID: '77991',
    taskName: 'Homework',
    taskDescription: 'Complete math assignments',
    taskType: { numberType: 2, textType: 'Education' },
    taskPriority: { numberPriority: 1, textPriority: 'Low' },
    taskDate: { startDate: '2024-08-12', endDate: '2024-08-12' },
    taskCompleted: true
  },
  {
    taskID: '77992',
    taskName: 'Birthday Party',
    taskDescription: 'Attend friend\'s birthday party',
    taskType: { numberType: 3, textType: 'Children' },
    taskPriority: { numberPriority: 2, textPriority: 'Medium' },
    taskDate: { startDate: '2024-08-13', endDate: '2024-08-13' },
    taskCompleted: false
  },
  {
    taskID: '77993',
    taskName: 'Doctor Appointment',
    taskDescription: 'General health check-up',
    taskType: { numberType: 4, textType: 'Individual' },
    taskPriority: { numberPriority: 3, textPriority: 'High' },
    taskDate: { startDate: '2024-08-14', endDate: '2024-08-14' },
    taskCompleted: true
  },
  {
    taskID: '77994',
    taskName: 'Team Meeting',
    taskDescription: 'Weekly team sync-up',
    taskType: { numberType: 5, textType: 'General' },
    taskPriority: { numberPriority: 2, textPriority: 'Medium' },
    taskDate: { startDate: '2024-08-15', endDate: '2024-08-15' },
    taskCompleted: false
  },
  {
    taskID: '77995',
    taskName: 'Laundry',
    taskDescription: 'Wash clothes and linens',
    taskType: { numberType: 1, textType: 'Home' },
    taskPriority: { numberPriority: 1, textPriority: 'Low' },
    taskDate: { startDate: '2024-08-16', endDate: '2024-08-16' },
    taskCompleted: true
  }, {
    taskID: '77996',
    taskName: 'Shopping',
    taskDescription: 'I will do it in "FORUM" centre',
    taskType: { numberType: 1, textType: 'Home' },
    taskPriority: { numberPriority: 2, textPriority: 'Medium' },
    taskDate: { startDate: '2024-08-07', endDate: '2024-08-07' },
    taskCompleted: false
  },

]

const initialState = {
  tasks: initialTasks,
  filterTasks: [],
  filterType: "",
  sortBy: "",
  isFiltered: false
};

const taskControllerSlice = createSlice({
  name: 'taskController',
  initialState,
  reducers: {

    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      const taskIdToDelete = action.payload;
      state.tasks = state.tasks.filter(task => task.taskID !== taskIdToDelete);

      state.isFiltered = false;////////////////////////////////////////////isFiltered
    },

    updateTask: (state, action) => {
      const updatedTask = action.payload;
      const index = state.tasks.findIndex(task => task.taskID === action.payload.taskID);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
      state.filterType = false;

      state.isFiltered = false;//////////////////////////////////////////isFiltered
    },


    filterTasks: (state, action) => {
      state.filterType = action.payload;

      if (parseInt(state.filterType) === 0) {

        state.isFiltered = false;////////////////////////////////isFiltered

        state.filterTasks = state.tasks; // if filterType == 0, assign all array tasks
      } else {

        state.isFiltered = true;////////////////////////////////isFiltered

        state.filterTasks = state.tasks.filter(task =>
          task.taskType.numberType === parseInt(state.filterType)
        );
      }
    },


    sortTasks: (state, action) => {
      const sortBy = action.payload;
      state.sortBy = sortBy;
      if (state.isFiltered) {
        state.filterTasks = sortArray(state.filterTasks, sortBy);
      } else {
        state.tasks = sortArray(state.tasks, sortBy);
      }
    },

    queryTask: (state, action) => {
      const word = action.payload;
      state.filterTasks = state.tasks.filter(task =>
        task.taskName.toLocaleLowerCase().includes(word.toLowerCase()))

      state.isFiltered = true;////////////////////////////////isFiltered
    }



  },
});


const sortArray = (array, sortBy) => {
  switch (sortBy) {
    case 'taskName':
      return [...array].sort((a, b) => a.taskName.localeCompare(b.taskName));
    case 'taskDate':
      return [...array].sort((a, b) => new Date(a.taskDate.startDate) - new Date(b.taskDate.startDate));
    case 'taskDescription':
      return [...array].sort((a, b) => a.taskDescription.localeCompare(b.taskDescription));
    default:
      return array;
  }
};


export const { addTask, deleteTask, updateTask, filterTasks, sortTasks, queryTask } = taskControllerSlice.actions;

export default taskControllerSlice.reducer;
