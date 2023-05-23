import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news";
import newsApi from "../features/apiSlice";

const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    newsApi.middleware,
  ],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
