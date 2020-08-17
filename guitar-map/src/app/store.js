import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import controlReducer from '../features/controls/controlSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    controls: controlReducer,
  },
});
