import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid4 } from "uuid";

const initialState = {
    taskID: 0,
    taskName: "",
    taskDescription: "",
    taskType: {
        numberType: 0,
        textType: ""
    },
    taskPriority: {
        numberPriority: 0,
        textPriority: "",
    },
    taskDate: {
        startDate: "",
        endDate: ""
    },
    taskCompleted: false
}

const generateShortID = () => {
    const uuid = uuid4(); // Генеруємо UUID
    return uuid.slice(0, 5); // Використовуємо перші 5 символів UUID як короткий ID
}


export const oneTaskSlice = createSlice({

    name: "OneTask",
    initialState,
    reducers: {
        createName: (state, action) => {
            state.taskName = action.payload;
        },

        createDescription: (state, action) => {
            state.taskDescription = action.payload;
        },

        createID: (state) => {
            state.taskID = generateShortID();
        },

        createTaskType: (state, action) => {
            state.taskType = action.payload;
        },

        createPriority: (state, action) => {
            state.taskPriority = action.payload;
        },

        createDate: (state, action) => {
            state.taskDate = action.payload;
        },

        createCompleted: (state,action) =>{
            state.taskCompleted = action.payload;
        },
    }
})

export const { createName,
               createDescription,
               createID,
               createTaskType,
               createPriority,
               createDate,
               createCompleted,
               resetTaskState } = oneTaskSlice.actions;

export {generateShortID};
export default oneTaskSlice.reducer;