import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news";
const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
export default store;
