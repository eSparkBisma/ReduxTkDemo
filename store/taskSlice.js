import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.data.push(action.payload);
    },
    removeTask: (state, action) => {
      const indexToRemove = action.payload;
      // state.data = state.data.filter(index => index !== action.payload);
      state.data.splice(indexToRemove, 1);
    },
    editTask: (state, action) => {
      const {index, newText} = action.payload;
      state.data[index] = newText;
    },
  },
});

export const {addTask, removeTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;
