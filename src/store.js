import { configureStore } from '@reduxjs/toolkit';
import oneTaskReducer from "./components/OneTask/OneTaskSlice";
import taskControllerReducer from './components/TaskController/TaskControllerSlice';

const store = configureStore({
reducer:{
  oneTask: oneTaskReducer,
  taskController: taskControllerReducer,
}
});

export default store;
