import { configureStore } from '@reduxjs/toolkit';
import jobSlice from '../features/jobSlice';
import wordsSlice from '../features/wordsSlice';

export const store = configureStore({
  reducer: {
    job: jobSlice,
    words: wordsSlice,

  }
});
