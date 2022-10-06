import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryBar: false,
};


export const staticSlice = createSlice({
  name: 'static',
  initialState,

  reducers: {
    categoryBarOc: (state, action) => {
      state.categoryBar = !state.categoryBar
    }
  },
})

// Selectors:
export const selectcategoryBar = (state) => state.static.categoryBar;


export default staticSlice.reducer;