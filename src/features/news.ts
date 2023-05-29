import { Article, Publisher } from "./../interfaces/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface state {
  selectedSource: string | null;
  searchArticles: Article[];
  loading: boolean;
  localLoading: boolean;
  inputValue: string;
}

const initialState: state = {
  selectedSource: null,
  searchArticles: [],
  inputValue: "",
  loading: true,
  localLoading: false,
};
export const newSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    setSelectedSource: (state, action: PayloadAction<string | null>) => {
      // state.inputValue = null;
      state.selectedSource = action.payload;
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
  setSelectedSource,
  searchCategory,
  setInputValue,
  loadingData,
  setLocalLoading,
} = newSlice.actions;
export default newSlice.reducer;
