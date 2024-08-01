// src/redux/responsibilitiesSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const responsibilitiesSlice = createSlice({
  name: 'responsibilities',
  initialState: {
    list: []
  },
  reducers: {
    addResponsibility: (state, action) => {
      // Ensure the structure matches what you expect
      state.list.push({ id: state.list.length + 1, value: action.payload.value });
    },
    updateResponsibility: (state, action) => {
      const index = state.list.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.list[index].value = action.payload.value;
      }
    },
    removeResponsibility: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    },
  },
});

export const { addResponsibility, updateResponsibility, removeResponsibility } = responsibilitiesSlice.actions;

export default responsibilitiesSlice.reducer;

