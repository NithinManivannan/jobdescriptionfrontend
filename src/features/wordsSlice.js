import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({
  name: 'words',
  initialState: {
    goodWords: [],
    badWords: []
  },
  reducers: {
    addGoodWord: (state, action) => {
      state.goodWords.push(action.payload);
    },
    removeGoodWord: (state, action) => {
      state.goodWords = state.goodWords.filter(word => word !== action.payload);
    },
    addBadWord: (state, action) => {
      state.badWords.push(action.payload);
    },
    removeBadWord: (state, action) => {
      state.badWords = state.badWords.filter(word => word !== action.payload);
    }
  }
});

export const { addGoodWord, removeGoodWord, addBadWord, removeBadWord } = wordsSlice.actions;

export default wordsSlice.reducer;
