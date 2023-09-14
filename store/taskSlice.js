import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  title: '',
  editTitle: '',
};
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: state => {
      if (state.title !== '') {
        state.data.push(state.title);
        state.title = '';
      }
    },
    addingTask: (state, action) => {
      state.title = action.payload;
    },
    removeTask: (state, action) => {
      const indexToRemove = action.payload;
      state.data.splice(indexToRemove, 1);
    },
    editTask: (state, action) => {
      if (state.editTitle !== '') {
        const {index, newText} = action.payload;
        state.data[index] = newText;
        state.editTitle = '';
      }
    },
    editingTask: (state, action) => {
      state.editTitle = action.payload;
    },
  },
});

export const {addTask, removeTask, editTask, addingTask, editingTask} =
  taskSlice.actions;
export default taskSlice.reducer;
