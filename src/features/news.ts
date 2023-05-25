import { Article, Publisher } from "./../interfaces/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface state {
  selectedPublisher: string | null;
  searchArticles: Article[];
  loading: boolean;
  localLoading: boolean;
  inputValue: string;
}

const initialState: state = {
  selectedPublisher: null,
  searchArticles: [],
  inputValue: "",
  loading: true,
  localLoading: false,
};
export const newSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    choosePublisher: (state, action: PayloadAction<string | null>) => {
      // state.inputValue = null;
      state.selectedPublisher = action.payload;
    },

    searchCategory: (state, action: PayloadAction<Article[]>) => {
      state.searchArticles = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    loadingData: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setLocalLoading: (state, action: PayloadAction<boolean>) => {
      state.localLoading = action.payload;
    },
  },
});

export const {
  choosePublisher,
  searchCategory,
  setInputValue,
  loadingData,
  setLocalLoading,
} = newSlice.actions;
export default newSlice.reducer;
