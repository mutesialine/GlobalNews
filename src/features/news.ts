import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  newsArticle: [],
  newsPublisher: [],
  selectedPublisher: null,
};
export const newSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    updateArticles: (state, action) => {
      state.newsArticle = action.payload;
    },
    updatePublisher: (state, action) => {
      state.newsPublisher = action.payload;
    },
    choosePublisher: (state, action) => {
      state.selectedPublisher = action.payload;
    },
  },
});

export const { updateArticles, updatePublisher, choosePublisher } =
  newSlice.actions;
export default newSlice.reducer;
