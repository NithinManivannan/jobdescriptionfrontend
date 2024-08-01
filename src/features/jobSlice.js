// src/features/jobSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    jobRole: '',
    responsibilities: [],
    qualifications: [],
  },
  reducers: {
    setJobRole: (state, action) => {
        state.jobRole = action.payload;
    },
}

});

export const { 
    setJobRole, 
} = jobSlice.actions;


export default jobSlice.reducer;
