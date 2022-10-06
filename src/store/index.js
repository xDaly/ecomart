import { configureStore } from '@reduxjs/toolkit';
import staticSlice from './reducers/staticReducers';

export const store = configureStore({
  reducer: {
    static: staticSlice,
  },
});
