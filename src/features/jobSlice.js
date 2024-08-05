// src/features/jobSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    jobTitle: '',
    responsibilities: [],
    qualifications: [],
  },
  reducers: {
    setJobTitle: (state, action) => {
        state.jobTitle = action.payload;
    },
}

});

export const { 
    setJobTitle, 
} = jobSlice.actions;


export default jobSlice.reducer;
