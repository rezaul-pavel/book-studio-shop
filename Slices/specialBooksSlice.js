import { createSlice } from "@reduxjs/toolkit";

const specialBooksSlice = createSlice({
  name: "specialBooks",
  initialState: {
    story: [],
    academy: [],
    thriller: [],
  },
  reducers: {
    setStory: (state, action) => {
      state.story = action.payload;
    },
    setAcademy: (state, action) => {
      state.academy = action.payload;
    },
    setThriller: (state, action) => {
      state.thriller = action.payload;
    },
  },
});

export const { setStory, setAcademy, setThriller } = specialBooksSlice.actions;
export default specialBooksSlice.reducer;
