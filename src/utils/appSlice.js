import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
  name: "app",
  initialState: {
       isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    clsoeMenu: (state) => {
      state.isMenuOpen = false;
    }
  },
});

export const { toggleMenu, clsoeMenu } = appSlice.actions;
export default appSlice.reducer;
