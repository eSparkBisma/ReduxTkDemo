import {configureStore} from '@reduxjs/toolkit';
import taskSlice from '../store/taskSlice';

const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});

export default store;
