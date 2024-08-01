import { configureStore } from '@reduxjs/toolkit';
import jobSlice from '../features/jobSlice';
import wordsSlice from '../features/wordsSlice';
import responsibilitiesSlice from '../features/responsibilitiesSlice';
import qualificationsSlice from '../features/qualificationsSlice';

export const store = configureStore({
  reducer: {
    job: jobSlice,
    words: wordsSlice,
    responsibilities: responsibilitiesSlice,
    qualifications: qualificationsSlice,

  }
});
