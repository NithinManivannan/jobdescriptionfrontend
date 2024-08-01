// src/redux/qualificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const qualificationsSlice = createSlice({
  name: 'qualifications',
  initialState: { list: [] },
  reducers: {
    addQualification: (state, action) => {
      state.list.push({ id: state.list.length + 1, value: action.payload.value });
    },
    updateQualification: (state, action) => {
      const index = state.list.findIndex(qual => qual.id === action.payload.id);
      if (index !== -1) {
        state.list[index].value = action.payload.value;
      }
    },
    removeQualification: (state, action) => {
      state.list = state.list.filter(qual => qual.id !== action.payload);
    },
  },
});

export const { addQualification, updateQualification, removeQualification } = qualificationsSlice.actions;

export default qualificationsSlice.reducer;
