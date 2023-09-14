import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  title: '',
  isEditing: false,
  currentIndex: 0,
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
      state.data[state.currentIndex] = state.title;
    },
    editingTask: (state, action) => {
      state.title = action.payload;
    },
    isEditingTask: (state, action) => {
      state.currentIndex = action.payload;
      state.title = state.data[state.currentIndex];
      state.isEditing = true;
    },
  },
});

export const {
  addTask,
  removeTask,
  editTask,
  addingTask,
  editingTask,
  isEditingTask,
} = taskSlice.actions;
export default taskSlice.reducer;
