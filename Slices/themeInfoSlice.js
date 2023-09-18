import { createSlice } from "@reduxjs/toolkit";

const themeInfoSlice = createSlice({
  name: "themeInfo",
  initialState: {
    logo: "/vercel.svg",
    category: [],
    mainMenu: [],
    slider: [],
    footer: null,
    metaData: {},
  },
  reducers: {
    setLogo: (state, action) => {
      state.logo = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setMainMenu: (state, action) => {
      state.mainMenu = action.payload;
    },
    setSlider: (state, action) => {
      state.slider = action.payload;
    },
    setFooter: (state, action) => {
      state.footer = action.payload;
    },
    setMeta: (state, action) => {
      state.metaData = action.payload;
    },
  },
});

export const {
  setLogo,
  setCategory,
  setMainMenu,
  setSlider,
  setFooter,
  setMeta,
} = themeInfoSlice.actions;
export default themeInfoSlice.reducer;
